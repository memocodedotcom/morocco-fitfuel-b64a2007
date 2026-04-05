import { getTrendingProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function TrendingGrid() {
  const { t } = useLanguage();
  const products = getTrendingProducts();

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
             <div className="h-1 w-8 bg-primary rounded-full" />
             <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t('trending')}</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
            {t('trendingSubtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
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
