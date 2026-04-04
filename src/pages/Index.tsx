import { AppLayout } from '@/components/layout/AppLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { BrandMarquee } from '@/components/home/BrandMarquee';
import { CategoryPills } from '@/components/home/CategoryPills';
import { FlashSales } from '@/components/home/FlashSales';
import { BuildYourStack } from '@/components/home/BuildYourStack';
import { TrendingGrid } from '@/components/home/TrendingGrid';

const Index = () => {
  return (
    <AppLayout>
      <HeroSection />
      <BrandMarquee />
      <CategoryPills />
      <FlashSales />
      <BuildYourStack />
      <TrendingGrid />
    </AppLayout>
  );
};

export default Index;
