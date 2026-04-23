import { useState, useEffect } from 'react';
import { getFlashSaleProducts } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Timer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FlashSales() {
  const { t, locale } = useLanguage();
  const products = getFlashSaleProducts();
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 24, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-px bg-gradient-to-l from-electric/20 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Flash Sale Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10 max-w-7xl mx-auto p-12 border border-electric/10 bg-electric/[0.01] rounded-sm backdrop-blur-3xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,255,0,0.05)_0%,transparent_50%)]" />
           
           <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-electric text-black">
                   <Zap className="h-4 w-4 fill-black" strokeWidth={3} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-electric">VENTE FLASH LIMITÉE</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white">
                {t('flashSales')}
              </h2>
           </div>

           <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex gap-4">
                 <TimeUnit value={timeLeft.hours} label="HRS" />
                 <TimeUnit value={timeLeft.minutes} label="MIN" />
                 <TimeUnit value={timeLeft.seconds} label="SEC" />
              </div>
              <Link to="/products" className="group flex items-center gap-4 h-12 px-8 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-electric transition-colors">
                 <span>VOIR TOUT</span>
                 <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProductCard product={product} variant="minimal" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
       <div className="h-16 w-16 md:h-20 md:w-20 bg-white/[0.02] border border-white/10 rounded-sm flex items-center justify-center">
          <span className="text-2xl md:text-4xl font-display font-black text-white lining-nums">
            {value.toString().padStart(2, '0')}
          </span>
       </div>
       <span className="text-[8px] font-extrabold tracking-widest text-slate-500">{label}</span>
    </div>
  );
}
