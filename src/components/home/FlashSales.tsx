import { useState, useEffect } from 'react';
import { getFlashSaleProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { Timer } from 'lucide-react';
import { PageSection } from '@/components/layout/PageSection';

function useCountdown() {
  const [time, setTime] = useState(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000));
  });

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return { h, m, s };
}

export function FlashSales() {
  const { t } = useLanguage();
  const products = getFlashSaleProducts();
  const { h, m, s } = useCountdown();

  if (products.length === 0) return null;

  return (
    <PageSection sectionClassName="bg-urgency text-urgency-foreground">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden>
            ⚡
          </span>
          <h2 className="text-title-lg md:text-2xl font-extrabold tracking-tight">{t('flashSales')}</h2>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-mono">
          <Timer className="h-4 w-4 text-accent shrink-0" />
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded font-bold">
            {String(h).padStart(2, '0')}
          </span>
          :
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded font-bold">
            {String(m).padStart(2, '0')}
          </span>
          :
          <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded font-bold">
            {String(s).padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} variant="dark" />
        ))}
      </div>
    </PageSection>
  );
}
