#!/bin/bash

# Azure deployment setup script for Talarex
# This script creates a new resource group, app service plan, and web app in Azure

set -e

# Configuration variables - update these as needed
RESOURCE_GROUP="talarex-rg-westeu"
LOCATION="westeurope"  # Changed from eastus to westeurope for better availability
APP_SERVICE_PLAN="talarex-plan-westeu"
WEB_APP_NAME="talarex-webapp-westeu"
SKU="B1"  # Basic tier, can be changed to S1 for Standard or P1V2 for Premium

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Azure deployment setup for Talarex...${NC}"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}Azure CLI is not installed. Please install it first.${NC}"
    echo "Visit: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Login to Azure
echo -e "${YELLOW}Logging in to Azure...${NC}"
az login

# Create Resource Group
echo -e "${YELLOW}Creating resource group: $RESOURCE_GROUP in $LOCATION...${NC}"
az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION

# Create App Service Plan
echo -e "${YELLOW}Creating App Service Plan: $APP_SERVICE_PLAN...${NC}"
az appservice plan create \
    --name $APP_SERVICE_PLAN \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --sku $SKU \
    --is-linux

# Create Web App with Node.js 20 runtime
echo -e "${YELLOW}Creating Web App: $WEB_APP_NAME...${NC}"
az webapp create \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan $APP_SERVICE_PLAN \
    --runtime "NODE:20-lts"

# Configure app settings
echo -e "${YELLOW}Configuring app settings...${NC}"
az webapp config appsettings set \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings \
    WEBSITE_NODE_DEFAULT_VERSION="~20" \
    SCM_DO_BUILD_DURING_DEPLOYMENT="false" \
    WEBSITE_RUN_FROM_PACKAGE="0"

# Configure startup command
echo -e "${YELLOW}Setting startup command...${NC}"
az webapp config set \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --startup-file "npm run start"

# Get the publish profile and save it
echo -e "${YELLOW}Downloading publish profile...${NC}"
PUBLISH_PROFILE=$(az webapp deployment list-publishing-profiles \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --xml)

# Create a file with instructions for GitHub secrets
echo -e "${YELLOW}Creating GitHub secrets instructions...${NC}"
cat > github-secrets-setup.txt << EOF
========================================
GitHub Secrets Setup Instructions
========================================

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Create a new secret with:
   - Name: AZURE_WEBAPP_PUBLISH_PROFILE
   - Value: (Copy the entire content below between the markers)

--- START PUBLISH PROFILE ---
$PUBLISH_PROFILE
--- END PUBLISH PROFILE ---

5. Save the secret
6. Your GitHub Actions workflow is now configured!

========================================
Azure Resources Created:
========================================
- Resource Group: $RESOURCE_GROUP
- App Service Plan: $APP_SERVICE_PLAN
- Web App: $WEB_APP_NAME
- URL: https://$WEB_APP_NAME.azurewebsites.net

========================================
EOF

echo -e "${GREEN}✅ Azure resources created successfully!${NC}"
echo -e "${GREEN}✅ Publish profile saved to: github-secrets-setup.txt${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Review the github-secrets-setup.txt file"
echo "2. Add the AZURE_WEBAPP_PUBLISH_PROFILE secret to your GitHub repository"
echo "3. Push your code to the main branch to trigger deployment"
echo ""
echo -e "${GREEN}Your app will be available at: https://$WEB_APP_NAME.azurewebsites.net${NC}"