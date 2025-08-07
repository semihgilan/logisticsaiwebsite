# Custom Domain Setup for talarex.com

## Overview
This guide will help you configure talarex.com to point to your Azure Web App.

## Step 1: DNS Configuration

You need to add the following DNS records to your domain registrar (where you bought talarex.com):

### Required DNS Records

1. **Domain Verification (TXT Record)**
   - Type: `TXT`
   - Host/Name: `asuid`
   - Value: `cf734ad8bd2d40cb9a4f9a67046f2b70ba6c728a29f606ce5f37f84ed1d3c69e`
   - TTL: 3600 (or default)

2. **Root Domain (A Record)**
   - Type: `A`
   - Host/Name: `@` (or leave blank for root)
   - Value: `104.45.2.57`
   - TTL: 3600 (or default)

3. **WWW Subdomain (CNAME Record)**
   - Type: `CNAME`
   - Host/Name: `www`
   - Value: `talarex-webapp-westeu.azurewebsites.net`
   - TTL: 3600 (or default)

## Step 2: Add DNS Records to Your Domain Provider

### Popular Domain Registrars Instructions:

#### GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" → Find your domain → "DNS"
3. Add the records listed above

#### Namecheap
1. Log in to Namecheap
2. Go to "Domain List" → "Manage" → "Advanced DNS"
3. Add the records listed above

#### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. Go to "DNS" tab
4. Add the records (if using Cloudflare proxy, set to "DNS only" initially)

#### Google Domains
1. Log in to Google Domains
2. Click on your domain
3. Go to "DNS" → "Manage custom records"
4. Add the records listed above

## Step 3: Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours to propagate
- Typically it takes 10-30 minutes

## Step 4: Add Custom Domain in Azure (After DNS Propagation)

Run these commands after DNS records are set:

```bash
# Add the root domain
az webapp config hostname add \
  --webapp-name talarex-webapp-westeu \
  --resource-group talarex-rg-westeu \
  --hostname talarex.com

# Add the www subdomain
az webapp config hostname add \
  --webapp-name talarex-webapp-westeu \
  --resource-group talarex-rg-westeu \
  --hostname www.talarex.com
```

## Step 5: Configure SSL/HTTPS (Free with Azure)

After domains are verified and added:

```bash
# Create managed certificate for root domain
az webapp config ssl create \
  --resource-group talarex-rg-westeu \
  --name talarex-webapp-westeu \
  --hostname talarex.com

# Create managed certificate for www
az webapp config ssl create \
  --resource-group talarex-rg-westeu \
  --name talarex-webapp-westeu \
  --hostname www.talarex.com

# Bind SSL certificates
az webapp config ssl bind \
  --name talarex-webapp-westeu \
  --resource-group talarex-rg-westeu \
  --certificate-thumbprint <thumbprint-from-previous-command> \
  --ssl-type SNI
```

## Step 6: Enforce HTTPS

```bash
# Force HTTPS only
az webapp update \
  --name talarex-webapp-westeu \
  --resource-group talarex-rg-westeu \
  --https-only true
```

## Verification Steps

1. **Check DNS Propagation:**
   ```bash
   # Check TXT record
   nslookup -type=TXT asuid.talarex.com
   
   # Check A record
   nslookup talarex.com
   
   # Check CNAME record
   nslookup www.talarex.com
   ```

2. **Test Your Domain:**
   - After setup, visit: https://talarex.com
   - Also test: https://www.talarex.com

## Troubleshooting

### DNS Not Propagating?
- Use online tools like whatsmydns.net to check global DNS propagation
- Clear your local DNS cache:
  - Mac: `sudo dscacheutil -flushcache`
  - Windows: `ipconfig /flushdns`

### Domain Verification Failing?
- Ensure TXT record is exactly as provided
- Wait at least 10-15 minutes after adding DNS records
- Try removing and re-adding the records

### SSL Certificate Issues?
- Azure managed certificates are free but require domain ownership verification
- Certificates auto-renew before expiration

## Alternative: Using Azure Portal UI

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to your Web App: `talarex-webapp-westeu`
3. In left menu, under "Settings", click "Custom domains"
4. Click "+ Add custom domain"
5. Enter `talarex.com` and follow the validation steps
6. Repeat for `www.talarex.com`

## Support Resources

- [Azure Custom Domain Documentation](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain)
- [Azure Managed Certificates](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate)

## Your Specific Azure Web App IP Addresses

For A records, you can use any of these IPs (the first one is recommended):
- 104.45.2.57 (Primary)
- 137.117.162.115
- 51.145.157.213
- 40.114.230.242
- 13.69.68.11

## Next Steps After Domain Setup

1. Update your GitHub repository settings if needed
2. Consider setting up:
   - Azure CDN for better global performance
   - Application Insights for monitoring
   - Backup policies for your web app