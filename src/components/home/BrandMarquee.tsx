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
    <section className="relative py-16 bg-black overflow-hidden border-y border-white/5">
      {/* Precision Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative z-10 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-electric" />
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
            {t('marqueePartnerBrands')}
          </span>
        </div>
      </div>

      <div className="flex marquee-hover-pause overflow-hidden border-y border-white/5 py-10 bg-white/[0.02]">
        <div className={cn(
          "flex gap-24 items-center whitespace-nowrap transition-all duration-700",
          marqueeClass
        )}>
          {allBrands.map((brand, i) => (
            <div key={i} className="flex items-center gap-24 shrink-0">
              <span className="text-white/20 font-display font-extrabold text-3xl tracking-tight uppercase transition-colors hover:text-electric cursor-default">
                {brand.name}
              </span>
              <div className="h-2 w-2 rounded-none bg-white/5" aria-hidden />
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mt-12 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-sm border border-white/5 group/item transition-colors hover:border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/5 text-white/40 group-hover:bg-electric group-hover:text-black transition-colors">
            <ShieldCheck className="h-6 w-6" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">{t('marqueeAuthentic')}</p>
            <p className="text-xs text-white/60 font-normal uppercase tracking-tight">VERIFICATION TOTALE</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/[0.02] p-5 rounded-sm border border-white/5 group/item transition-colors hover:border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/5 text-white/40 group-hover:bg-electric group-hover:text-black transition-colors">
            <Truck className="h-6 w-6" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">{t('marqueeDelivery24h')}</p>
            <p className="text-xs text-white/60 font-normal uppercase tracking-tight">LOGISTIQUE EXPRESS</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 bg-white/[0.02] p-5 rounded-sm border border-white/5 group/item transition-colors hover:border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/5 text-white/40 group-hover:bg-electric group-hover:text-black transition-colors">
            <CreditCard className="h-6 w-6" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">{t('marqueeSecurePay')}</p>
            <p className="text-xs text-white/60 font-normal uppercase tracking-tight">CRYPTAGE BANCAIRE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
