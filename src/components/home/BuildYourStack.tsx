import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { stackBundles, getProduct } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Dumbbell, Zap, Plus, Sparkles, ShoppingBag, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';
import { Magnetic } from '@/components/ui/magnetic';

const goals = [
  { id: 'lose-weight', icon: Target },
  { id: 'gain-muscle', icon: Dumbbell },
  { id: 'energy', icon: Zap },
] as const;

type GoalKey = keyof typeof stackBundles;

export function BuildYourStack() {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const [selected, setSelected] = useState<GoalKey>('gain-muscle');
  const bundle = stackBundles[selected];
  const bundleProducts = bundle.productIds.map((id) => getProduct(id)!).filter(Boolean);
  const totalPrice = bundleProducts.reduce((s, p) => s + p.price, 0);
  const discountedPrice = Math.round(totalPrice * (1 - bundle.discount / 100));

  const goalLabels: Record<GoalKey, string> = {
    'lose-weight': t('loseWeight'),
    'gain-muscle': t('gainMuscle'),
    energy: t('energy'),
  };

  const handleAddBundle = () => {
    bundleProducts.forEach((p) => addItem(p.id, 1, undefined, undefined, { silent: true }));
    toast.success(t('addedToCart'));
  };

  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Structural Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-5xl mx-auto mb-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
               <div className="h-px w-8 bg-electric" />
               <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">{t('buildStack')}</span>
            </div>
            <h2 className="text-6xl md:text-huge font-display font-extrabold uppercase tracking-tight text-white leading-[0.9]">
              PROTOCOLE <br />
              <span className="text-white/30">SUR MESURE.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-12 pb-4 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g.id)}
                className={cn(
                  "shrink-0 h-14 px-8 rounded-sm text-[9px] font-extrabold transition-all duration-300 uppercase tracking-widest border",
                  selected === g.id
                    ? "bg-electric text-black border-electric"
                    : "bg-white/[0.02] text-white/40 border-white/10 hover:border-white/20 hover:text-white"
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <g.icon className={cn("h-4 w-4", selected === g.id ? "text-black" : "text-electric/60")} />
                  <span>{goalLabels[g.id]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-10 items-stretch max-w-7xl mx-auto"
          >
            {/* Main Bundle Card */}
            <div className="lg:col-span-8 bg-white/[0.02] border border-white/[0.05] rounded-sm p-10 md:p-16 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
                  <h3 className="text-4xl md:text-6xl font-display font-extrabold uppercase mb-0 max-w-xl leading-none tracking-tight text-white order-2 md:order-1">
                    {bundle.name[locale]}
                  </h3>
                  <div className="bg-electric text-black px-6 py-2 rounded-sm text-[10px] font-extrabold tracking-widest uppercase border border-electric order-1 md:order-2">
                    -{bundle.discount}% OFF
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center mt-auto">
                  {bundleProducts.map((p, i) => (
                    <div key={p.id} className="relative group/item flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="relative w-full aspect-square rounded-sm p-8 overflow-hidden mb-6 border border-white/[0.05] bg-black/20 group-hover/item:border-electric transition-colors">
                        <img
                          src={p.images[0]}
                          alt={p.name[locale]}
                          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover/item:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">{p.brand}</p>
                        <p className="text-sm font-display font-bold uppercase tracking-tight text-white line-clamp-1">{p.name[locale]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary & Checkout */}
            <div className="lg:col-span-4 flex flex-col justify-between border border-white/[0.05] bg-white/[0.02] rounded-sm p-10 md:p-14 text-white relative">
               <div>
                 <div className="flex items-center gap-4 mb-12">
                   <div className="h-px w-6 bg-electric" />
                   <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">PACK CONTENT</span>
                 </div>

                 <ul className="space-y-6 mb-16">
                   {bundleProducts.map((p) => (
                     <li key={p.id} className="flex items-center justify-between pb-6 border-b border-white/[0.05] group/li">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-white group-hover:text-electric transition-colors uppercase tracking-tight">{p.name[locale]}</span>
                          <p className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest">{p.brand}</p>
                        </div>
                        <span className="text-[10px] font-extrabold text-slate-500">{p.price} MAD</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="space-y-10">
                 <div className="flex items-end justify-between p-8 bg-black/40 border border-white/[0.05] rounded-sm">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">LIST PRICE</p>
                      <p className="text-xl font-display font-medium line-through text-slate-600">{totalPrice} MAD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-3">MEMBER PRICE</p>
                      <p className="text-4xl font-display font-black tracking-tighter text-white">{discountedPrice} MAD</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <Button 
                      onClick={handleAddBundle} 
                      className="w-full h-16 rounded-sm bg-white text-black font-extrabold tracking-widest text-[10px] uppercase hover:bg-electric transition-all group overflow-hidden border-0"
                    >
                      <ShoppingBag className="mr-4 h-4 w-4" />
                      ACTIVER LE PACK
                      <ChevronRight className="ml-4 h-4 w-4" />
                    </Button>
                    <p className="text-[9px] text-center font-extrabold text-slate-600 uppercase tracking-widest">
                      *Économie garantie de {totalPrice - discountedPrice} MAD
                    </p>
                 </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
