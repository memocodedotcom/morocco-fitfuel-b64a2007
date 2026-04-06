import { getTrendingProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function TrendingGrid() {
  const { t } = useLanguage();
  const products = getTrendingProducts();

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Precision Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-electric" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">{t('trending')}</span>
            </div>
            <h2 className="text-6xl md:text-huge font-display font-extrabold text-white uppercase tracking-tight leading-[0.9]">
              SÉLECTION<br />
              <span className="text-white/30">ELITE.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-md font-normal leading-relaxed border-l-0 md:border-l border-white/10 md:pl-8">
            {t('trendingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
