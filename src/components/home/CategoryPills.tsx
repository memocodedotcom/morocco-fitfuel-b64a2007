import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function CategoryPills() {
  const { t } = useLanguage();
  
  const categories = [
    { id: 'protein', label: t('protein') },
    { id: 'creatine', label: t('creatine') },
    { id: 'pre-workout', label: t('preWorkout') },
    { id: 'vitamins', label: t('vitamins') },
    { id: 'weight-loss', label: t('weightLoss') },
    { id: 'mass-gainer', label: t('massGainer') },
    { id: 'accessories', label: 'Accessoires' }
  ];

  return (
    <div className="py-12 bg-black border-b border-white/5 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
           {categories.map((cat, idx) => (
             <motion.div
               key={cat.id}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
             >
               <Link 
                 to={`/products?category=${cat.id}`}
                 className="flex items-center gap-3 px-8 h-12 bg-white/[0.02] border border-white/5 rounded-full hover:border-electric hover:bg-electric transition-all duration-500 group"
               >
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-black">{cat.label}</span>
               </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
