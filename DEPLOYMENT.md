# Talarex - Azure Deployment Guide

## Overview
This guide walks you through deploying the Talarex logistics AI website to Azure App Service.

## Prerequisites
- Node.js 20.x or higher installed locally
- Azure CLI installed ([Installation Guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli))
- An Azure account with an active subscription
- A GitHub repository for your code

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see the application.

### 3. Build for Production
```bash
npm run build
```

## Azure Deployment

### Option 1: Automated Setup (Recommended)

Run the provided setup script to create all Azure resources:

```bash
./scripts/setup-azure.sh
```

This script will:
1. Create a new Resource Group
2. Create an App Service Plan (Linux, B1 tier)
3. Create a Web App with Node.js 20 runtime
4. Configure app settings
5. Download the publish profile

### Option 2: Manual Setup

#### 1. Create Resource Group
```bash
az group create --name talarex-rg --location eastus
```

#### 2. Create App Service Plan
```bash
az appservice plan create \
  --name talarex-plan \
  --resource-group talarex-rg \
  --location eastus \
  --sku B1 \
  --is-linux
```

#### 3. Create Web App
```bash
az webapp create \
  --name talarex-webapp \
  --resource-group talarex-rg \
  --plan talarex-plan \
  --runtime "NODE:20-lts"
```

#### 4. Get Publish Profile
```bash
az webapp deployment list-publishing-profiles \
  --name talarex-webapp \
  --resource-group talarex-rg \
  --xml > publish-profile.xml
```

## GitHub Actions CI/CD Setup

### 1. Add GitHub Secret
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Click "New repository secret"
4. Create a secret named `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Paste the entire publish profile XML as the value

### 2. Update Workflow Configuration
Edit `.github/workflows/azure-deploy.yml` and update the `AZURE_WEBAPP_NAME` to match your web app name.

### 3. Deploy
Push to the main branch to trigger automatic deployment:
```bash
git add .
git commit -m "Deploy to Azure"
git push origin main
```

## Configuration

### Environment Variables
Add these in Azure Portal > App Service > Configuration > Application settings:

- `NODE_ENV`: production
- `PORT`: (Azure sets this automatically)

### Custom Domain (Optional)
1. Go to Azure Portal > Your Web App > Custom domains
2. Add your custom domain
3. Configure DNS records as instructed

### SSL Certificate (Optional)
1. Go to Azure Portal > Your Web App > TLS/SSL settings
2. Upload or create a managed certificate

## Monitoring

### View Logs
```bash
az webapp log tail \
  --name talarex-webapp \
  --resource-group talarex-rg
```

### Application Insights (Optional)
1. Create Application Insights resource
2. Link it to your Web App
3. View metrics and logs in Azure Portal

## Scaling

### Scale Up (Vertical)
Change the App Service Plan tier:
```bash
az appservice plan update \
  --name talarex-plan \
  --resource-group talarex-rg \
  --sku S1
```

### Scale Out (Horizontal)
Configure autoscaling rules in Azure Portal or via CLI.

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Ensure all dependencies are in package.json
   - Review build logs in GitHub Actions

2. **Runtime Errors**
   - Check application logs: `az webapp log tail`
   - Verify environment variables
   - Ensure Next.js standalone output is configured

3. **Performance Issues**
   - Consider upgrading App Service Plan tier
   - Enable Application Insights for detailed metrics
   - Implement caching strategies

## Cost Optimization

- **Development**: Use B1 tier (~$13/month)
- **Production**: Use S1 or P1V2 tier for better performance
- **Enable auto-shutdown** for development environments
- **Use Azure Cost Management** to monitor spending

## Security Best Practices

1. Enable HTTPS only
2. Configure CORS if needed
3. Use Azure Key Vault for secrets
4. Enable Azure AD authentication if required
5. Regular security updates

## Support

For issues or questions:
- Check Azure App Service documentation
- Review Next.js deployment guides
- Contact Azure support

## Resources

- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions for Azure](https://github.com/Azure/actions)