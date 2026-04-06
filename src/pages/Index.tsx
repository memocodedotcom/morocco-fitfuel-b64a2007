import { AppLayout } from '@/components/layout/AppLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { GoalSelector } from '@/components/home/GoalSelector';
import { FlashSales } from '@/components/home/FlashSales';
import { BuildYourStack } from '@/components/home/BuildYourStack';
import { TrendingGrid } from '@/components/home/TrendingGrid';
import { SuccessStories } from '@/components/home/SuccessStories';
import { PerformanceVideoFeed } from '@/components/home/PerformanceVideoFeed';
import { QualitySeal } from '@/components/home/QualitySeal';
import { BrandMarquee } from '@/components/home/BrandMarquee';
import { CategoryPills } from '@/components/home/CategoryPills';
import { HomeValueCards } from '@/components/home/HomeValueCards';

const Index = () => {
  return (
    <AppLayout>
      <HeroSection />
      <GoalSelector />
      <FlashSales />
      <BuildYourStack />
      <TrendingGrid />
      <SuccessStories />
      <PerformanceVideoFeed />
      <QualitySeal />
      <BrandMarquee />
      <CategoryPills />
      <HomeValueCards />
    </AppLayout>
  );
};

export default Index;
