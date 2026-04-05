import { useState, useEffect } from 'react';
import { getFlashSaleProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { Timer, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
  const { t, locale } = useLanguage();
  const products = getFlashSaleProducts();
  const { h, m, s } = useCountdown();

  if (products.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-20 bg-[#020617] text-white">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse">
                <Zap className="h-6 w-6 fill-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter italic">
                {t('flashSales')}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md font-medium text-sm">
              {locale === 'fr' ? 'Offres exclusives valables pour une durée limitée. Ne ratez pas votre chance !' : 'عروض حصرية لفترة محدودة. لا تفوت فرصتك!'}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-2 text-primary">
              <Timer className="h-5 w-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{locale === 'fr' ? 'FIN DANS' : 'ينتهي في'}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-2xl font-black">
              <div className="flex flex-col items-center">
                <span className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">{String(h).padStart(2, '0')}</span>
              </div>
              <span className="opacity-40 text-primary">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">{String(m).padStart(2, '0')}</span>
              </div>
              <span className="opacity-40 text-primary">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-white/10 w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">{String(s).padStart(2, '0')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, idx) => (
            <ProductCard key={p.id} product={p} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}
