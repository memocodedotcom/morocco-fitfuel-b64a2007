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
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Structural Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">{t('flashSales')}</span>
            </div>
            <h2 className="text-6xl md:text-huge font-display font-extrabold text-white uppercase tracking-tight leading-[0.9]">
              OFFRES <br />
              <span className="text-white/30">LIMITÉES.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border border-white/10 p-4 md:p-6 rounded-sm bg-white/[0.02] backdrop-blur-xl shrink-0">
              <Timer className="h-5 w-5 text-electric hidden md:block" />
              <div className="flex items-center gap-4 md:gap-6 font-mono text-3xl md:text-4xl font-extrabold text-white">
                <div className="flex flex-col items-center">
                  <span>{String(h).padStart(2, '0')}</span>
                  <span className="text-[7px] md:text-[8px] font-extrabold text-white/20 uppercase tracking-[0.15em] mt-2">HRS</span>
                </div>
                <span className="text-white/10">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(m).padStart(2, '0')}</span>
                  <span className="text-[7px] md:text-[8px] font-extrabold text-white/20 uppercase tracking-[0.15em] mt-2">MINS</span>
                </div>
                <span className="text-white/10">:</span>
                <div className="flex flex-col items-center">
                  <span>{String(s).padStart(2, '0')}</span>
                  <span className="text-[7px] md:text-[8px] font-extrabold text-white/20 uppercase tracking-[0.15em] mt-2">SECS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p, idx) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
