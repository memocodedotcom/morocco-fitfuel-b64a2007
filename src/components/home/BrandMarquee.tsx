import { brands } from '@/data/products';
import { ShieldCheck, Truck, CreditCard, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function BrandMarquee() {
  const { dir, t } = useLanguage();
  const allBrands = [...brands, ...brands, ...brands];
  const marqueeClass = dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee';

  return (
    <section className="relative py-10 border-y bg-[#050914] overflow-hidden group">
      {/* Subtle overlay gradients for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050914] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050914] to-transparent z-10 pointer-events-none" />

      <div className="container mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
            {t('marqueePartnerBrands')}
          </span>
        </div>
      </div>

      <div className="flex marquee-hover-pause overflow-hidden">
        <div className={cn(
          "flex gap-16 items-center whitespace-nowrap py-2 transition-all duration-700",
          marqueeClass
        )}>
          {allBrands.map((brand, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="text-white/30 font-black text-lg md:text-2xl tracking-tighter uppercase transition-colors hover:text-primary cursor-default">
                {brand.name}
              </span>
              <div className="h-1 w-1 rounded-full bg-white/10" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 transition-colors hover:bg-white/10 group/item">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">{t('marqueeAuthentic')}</p>
            <p className="text-xs text-muted-foreground font-medium">100% Officiel</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 transition-colors hover:bg-white/10 group/item">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">{t('marqueeDelivery24h')}</p>
            <p className="text-xs text-muted-foreground font-medium">Livraison Express</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 transition-colors hover:bg-white/10 group/item">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">{t('marqueeSecurePay')}</p>
            <p className="text-xs text-muted-foreground font-medium">CMI & Cash</p>
          </div>
        </div>
      </div>
    </section>
  );
}
