import { getTrendingProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function TrendingGrid() {
  const products = getTrendingProducts().slice(0, 8);
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-black relative overflow-hidden bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="container relative z-10 px-4">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-8 max-w-7xl mx-auto border-l border-white/5 pl-8 md:pl-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter text-white">
              {t('bestSellers')}
            </h2>
            <p className="text-slate-500 font-normal uppercase tracking-widest text-[10px]">
              {t('trendingSubtitle')}
            </p>
          </div>
          
          <Link 
            to="/products" 
            className="group flex items-center gap-4 text-electric font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors"
          >
            <span>{t('allProducts')}</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
