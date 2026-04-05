import { brands } from '@/data/products';
import { Shield, Truck, CreditCard } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function BrandMarquee() {
  const { dir, t } = useLanguage();
  const items = [...brands, ...brands];
  const marqueeClass = dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee';

  return (
    <section className="py-6 border-b bg-secondary/30 overflow-hidden">
      <div className={`flex ${marqueeClass} gap-12 items-center whitespace-nowrap`}>
        {items.map((brand, i) => (
          <span key={i} className="text-muted-foreground font-bold text-sm tracking-wider uppercase shrink-0">
            {brand.name}
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <Shield className="h-3.5 w-3.5 text-primary shrink-0" /> {t('marqueeAuthentic')}
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <Truck className="h-3.5 w-3.5 text-primary shrink-0" /> {t('marqueeDelivery24h')}
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <CreditCard className="h-3.5 w-3.5 text-primary shrink-0" /> {t('marqueeSecurePay')}
        </span>
        {items.map((brand, i) => (
          <span key={`d-${i}`} className="text-muted-foreground font-bold text-sm tracking-wider uppercase shrink-0">
            {brand.name}
          </span>
        ))}
      </div>
    </section>
  );
}
