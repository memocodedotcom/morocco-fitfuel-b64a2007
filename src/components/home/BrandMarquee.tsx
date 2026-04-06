import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export function BrandMarquee() {
  const { t, locale } = useLanguage();
  const brands = [
    "Optimum Nutrition", "MuscleTech", "Dymatize", "BPI Sports", 
    "Universal", "Cellucor", "JYM", "Redcon1"
  ];

  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-6">
           <div className="h-px w-10 bg-electric/30" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">{t('marqueePartnerBrands')}</span>
           <div className="h-px w-10 bg-electric/30" />
        </div>

        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: locale === 'ar' ? "100%" : "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
          >
            {/* Double the brands for seamless loop */}
            {[...brands, ...brands].map((brand, idx) => (
              <span 
                key={idx} 
                className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter text-white/10 hover:text-electric transition-colors duration-500 cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
