import { getTrendingProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';

export function TrendingGrid() {
  const { t } = useLanguage();
  const products = getTrendingProducts();

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-lg font-bold mb-4">{t('trending')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
