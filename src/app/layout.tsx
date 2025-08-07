import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Talarex - Your Smartest AI Logistics Worker',
  description: 'Offload work to the only AI that thinks, adapts, and learns. Automate logistics operations for freight forwarders, brokerages, carriers, and shippers.',
  keywords: 'logistics AI, freight automation, supply chain automation, TMS integration, logistics software',
  openGraph: {
    title: 'Talarex - Your Smartest AI Logistics Worker',
    description: 'Offload work to the only AI that thinks, adapts, and learns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}