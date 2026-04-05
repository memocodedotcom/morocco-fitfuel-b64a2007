import { AppLayout } from '@/components/layout/AppLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { HomeValueCards } from '@/components/home/HomeValueCards';
import { BrandMarquee } from '@/components/home/BrandMarquee';
import { CategoryPills } from '@/components/home/CategoryPills';
import { FlashSales } from '@/components/home/FlashSales';
import { BuildYourStack } from '@/components/home/BuildYourStack';
import { TrendingGrid } from '@/components/home/TrendingGrid';

const Index = () => {
  return (
    <AppLayout>
      <HeroSection />
      <HomeValueCards />
      <BrandMarquee />
      <CategoryPills />
      <FlashSales />
      <BuildYourStack />
      <TrendingGrid />
    </AppLayout>
  );
};

export default Index;
