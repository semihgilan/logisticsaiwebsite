# Talarex - AI Logistics Platform

Your smartest AI logistics worker. Offload work to the only AI that thinks, adapts, and learns.

## 🚀 Features

- **Deep Context Understanding**: Ingests natural language SOPs and historical cases
- **AI-Driven Automation**: Processes unstructured documents and complex business rules
- **Continuous Learning**: Improves performance through feedback loops
- **Human-in-the-Loop**: Configurable escalation for critical decisions
- **Seamless Integration**: Works with existing TMS, WMS, ERP systems

## 🎯 Solutions by Role

- **Freight Brokerages**: Automate rate requests, capacity confirmation, and data entry
- **Freight Forwarders**: Extract data from invoices, BOLs, and orchestrate multi-party updates
- **Carriers**: Digitize dispatch workflows, streamline POD capture, real-time communications
- **Shippers**: Standardize confirmations, reduce exceptions, maintain shipment visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions

## 📦 Installation

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/talarex.git
cd talarex

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
talarex/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Footer.tsx
│       └── ...
├── public/              # Static assets
├── scripts/             # Deployment scripts
├── .github/workflows/   # CI/CD pipelines
└── next.config.ts       # Next.js configuration
```

## 🚀 Deployment

### Quick Deploy to Azure

1. Run the setup script:
```bash
./scripts/setup-azure.sh
```

2. Add GitHub secrets for CI/CD

3. Push to main branch to deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🎨 Customization

### Styling
- Edit Tailwind config in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes

### Content
- Update component text directly in `/src/components/`
- Modify metadata in `src/app/layout.tsx`

### Colors
- Primary: Blue (`blue-600`)
- Secondary: Gray (`gray-`)
- Accent: Customizable in Tailwind config

## 🔒 Security

- SOC 2-ready processes
- Data encryption in transit and at rest
- SSO/SAML support ready
- Enterprise-grade security

## 📊 Performance

- Lighthouse score: 95+
- Core Web Vitals optimized
- Image optimization
- Code splitting
- Edge caching ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

- Documentation: See `/docs` folder
- Issues: GitHub Issues
- Contact: support@talarex.com

## 🔗 Links

- [Live Demo](https://talarex-webapp.azurewebsites.net)
- [Documentation](./DEPLOYMENT.md)
- [Azure Portal](https://portal.azure.com)

---

Built with ❤️ for the logistics industry