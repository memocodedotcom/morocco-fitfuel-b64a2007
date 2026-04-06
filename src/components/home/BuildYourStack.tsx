import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { stackBundles, getProduct } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Dumbbell, Zap, Plus, Sparkles, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';

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
    <section className="relative py-24 bg-obsidian overflow-hidden grain-overlay">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric/10 rounded-full blur-[120px] -translate-y-1/2 opacity-20" />
      
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
              {t('buildStack')}
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-4">
              {t('buildStackDesc')}
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g.id)}
                className={cn(
                  "relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300",
                  selected === g.id
                    ? "text-white scale-105"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {selected === g.id && (
                  <motion.div
                    layoutId="activeGoal"
                    className="absolute inset-0 bg-primary rounded-xl shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <g.icon className={cn("relative z-10 h-4 w-4", selected === g.id ? "text-white" : "text-primary")} />
                <span className="relative z-10 uppercase tracking-wider">{goalLabels[g.id]}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Main Bundle Card */}
            <div className="lg:col-span-8 bg-card/30 backdrop-blur-sm border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black tracking-widest border border-primary/20 animate-pulse">
                  OFFRE BUNDLE -{bundle.discount}%
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-display font-black uppercase mb-12 max-w-md">
                  {bundle.name[locale]}
                </h3>

                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {bundleProducts.map((p, i) => (
                    <div key={p.id} className="relative group/item">
                      <div className="relative aspect-square bg-white/[0.03] rounded-2xl p-4 overflow-hidden mb-4 border border-white/[0.05] group-hover/item:border-primary/20 transition-all duration-500">
                        <img
                          src={p.images[0]}
                          alt={p.name[locale]}
                          className="w-full h-full object-contain filter drop-shadow-2xl group-hover/item:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <p className="text-xs font-black uppercase tracking-wider mb-1 opacity-60">{p.brand}</p>
                      <p className="text-sm font-bold line-clamp-1">{p.name[locale]}</p>
                      
                      {i < bundleProducts.length - 1 && (
                        <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-12 h-6 w-6 items-center justify-center bg-primary text-white rounded-full z-20 shadow-lg">
                          <Plus className="h-4 w-4" strokeWidth={4} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary & Checkout */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#050914] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
               
               <div>
                 <div className="flex items-center gap-2 mb-8">
                   <Sparkles className="h-5 w-5 text-primary" />
                   <span className="text-xs font-black uppercase tracking-widest text-primary">Inclus dans le stack</span>
                 </div>

                 <ul className="space-y-4 mb-12">
                   {bundleProducts.map((p) => (
                     <li key={p.id} className="flex items-center justify-between py-3 border-b border-white/[0.05]">
                        <span className="text-sm font-medium opacity-80">{p.name[locale]}</span>
                        <span className="text-xs font-bold opacity-60">{p.price} MAD</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="space-y-6">
                 <div className="flex items-end justify-between">
                   <div>
                     <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Total Valeur</p>
                     <p className="text-xl font-medium line-through opacity-40">{totalPrice} MAD</p>
                   </div>
                   <div className="text-right">
                     <p className="text-xs font-bold uppercase tracking-widest text-electric mb-1">Prix Stack</p>
                     <p className="text-4xl font-black">{discountedPrice} MAD</p>
                   </div>
                 </div>

                 <Button 
                   onClick={handleAddBundle} 
                   size="lg" 
                   className="w-full h-16 rounded-2xl bg-electric hover:bg-white text-black font-black tracking-[0.1em] text-sm shadow-[0_10px_30px_rgba(34,197,94,0.3)] transition-all hover:-translate-y-1 active:translate-y-0"
                 >
                   <ShoppingBag className="mr-3 h-5 w-5" />
                   AJOUTER LE BUNDLE
                 </Button>
                 
                 <p className="text-[10px] text-center font-bold opacity-40 uppercase tracking-tighter">
                   *Économisez {totalPrice - discountedPrice} MAD avec cette sélection d'experts
                 </p>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
