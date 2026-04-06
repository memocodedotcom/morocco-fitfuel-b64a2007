import { categories } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Dumbbell, Zap, Pill, Flame, TrendingDown, Weight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  dumbbell: Dumbbell,
  zap: Zap,
  pill: Pill,
  flame: Flame,
  'trending-down': TrendingDown,
  weight: Weight,
};

export function CategoryPills() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden border-b border-white/[0.03]">
      {/* Precision Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-electric" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">{t('categories')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
              OBJECTIFS <br />
              <span className="text-white/30">CIBLÉS.</span>
            </h2>
          </div>
          
          <Link 
            to="/products" 
            className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 hover:text-white transition-colors group"
          >
            {locale === 'fr' ? 'TOUT VOIR' : 'عرض الكل'}
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4 md:mx-0 md:px-0 max-w-7xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Dumbbell;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(cat.id)}`}
                  className="flex flex-col items-center gap-6 shrink-0 group w-24 md:w-32"
                >
                  <div
                    className={cn(
                      "w-20 h-20 md:w-24 md:h-24 rounded-sm flex items-center justify-center transition-all duration-300",
                      "bg-white/[0.02] border border-white/5 relative overflow-hidden",
                      "group-hover:bg-electric group-hover:border-electric"
                    )}
                  >
                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-white/40 transition-colors duration-300 group-hover:text-black" strokeWidth={1} />
                  </div>
                  <span className="text-[10px] font-extrabold text-center tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase">
                    {cat.name[locale]}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
