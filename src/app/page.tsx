import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyHiops from '@/components/WhyHiops'
import CTASection from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HiOps - Cloud Cost Optimization Platform',
  description: 'HiOps analyzes and optimizes your cloud costs in real-time. Connect your cluster in minutes and start saving up to 50% on your cloud bill.',
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <WhyHiops />
    </div>
  );
}