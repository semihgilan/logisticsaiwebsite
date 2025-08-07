import Hero from '@/components/Hero';
import SolutionsByRole from '@/components/SolutionsByRole';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import TrustSignals from '@/components/TrustSignals';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsByRole />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Testimonials />
      <TrustSignals />
      <CTA />
    </>
  );
}