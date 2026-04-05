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
    <section className="relative py-12 bg-background border-b border-white/[0.03]">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-6 bg-primary rounded-full" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{t('categories')}</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
              {locale === 'fr' ? 'Parcourez par Objectif' : 'تصفح حسب الهدف'}
            </h2>
          </motion.div>
          
          <Link 
            to="/products" 
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group"
          >
            {locale === 'fr' ? 'Tout voir' : 'عرض الكل'}
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Dumbbell;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={`/products?category=${encodeURIComponent(cat.id)}`}
                  className="flex flex-col items-center gap-4 shrink-0 group w-24 md:w-32"
                >
                  <div
                    className={cn(
                      "w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center transition-all duration-500",
                      "bg-white/[0.03] border border-white/[0.05] relative overflow-hidden",
                      "group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]",
                      "group-hover:-translate-y-2"
                    )}
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-center tracking-tight text-muted-foreground group-hover:text-foreground transition-colors uppercase">
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
