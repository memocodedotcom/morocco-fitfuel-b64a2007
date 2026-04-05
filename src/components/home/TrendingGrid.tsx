import { getTrendingProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { PageSection } from '@/components/layout/PageSection';

export function TrendingGrid() {
  const { t } = useLanguage();
  const products = getTrendingProducts();

  return (
    <PageSection>
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">{t('trending')}</h2>
        <p className="text-sm text-muted-foreground mt-1">{t('trendingSubtitle')}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </PageSection>
  );
}
