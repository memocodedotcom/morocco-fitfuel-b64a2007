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
    <section className="relative py-40 bg-obsidian overflow-hidden grain-organic">
      {/* Signature Light Leaks */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-terracotta/5 rounded-full blur-[160px] -translate-y-1/2 -translate-x-1/2 opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[140px] opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-5xl mx-auto mb-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
               <div className="h-[1px] w-12 bg-terracotta/40" />
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-terracotta/80">{t('buildStack')}</span>
               <div className="h-[1px] w-12 bg-terracotta/40" />
            </div>
            <h2 className="text-huge font-display font-black uppercase tracking-tighter leading-[0.75] italic text-white">
              VOTRE PROTOCOLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40 drop-shadow-[0_0_20px_rgba(212,255,0,0.2)]">SUR MESURE.</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g.id)}
                className={cn(
                  "relative h-20 px-10 rounded-[2rem] text-[10px] font-black transition-all duration-700 uppercase tracking-[0.3em] backdrop-blur-3xl border-2",
                  selected === g.id
                    ? "bg-electric text-black border-electric shadow-[0_0_40px_rgba(212,255,0,0.3)] scale-105"
                    : "bg-white/5 text-white/40 border-white/10 hover:border-white/20 hover:text-white"
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <g.icon className={cn("h-5 w-5", selected === g.id ? "text-black" : "text-electric/60")} />
                  <span>{goalLabels[g.id]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-10 items-stretch"
          >
            {/* Main Bundle Card - Enhanced Depth */}
            <div className="lg:col-span-8 bg-white/[0.01] backdrop-blur-3xl border-2 border-white/5 rounded-[4rem] p-10 md:p-16 relative overflow-hidden group shadow-4xl">
              {/* Physical Detail: Glass corner reflection */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="absolute top-10 right-10 p-4 z-20">
                <div className="bg-terracotta text-white px-6 py-3 rounded-full text-[10px] font-black tracking-[0.3em] border border-white/10 shadow-2xl uppercase">
                  ELITE DEAL -{bundle.discount}%
                </div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-5xl md:text-7xl font-display font-black uppercase mb-16 max-w-xl italic leading-[0.8] tracking-tighter">
                  {bundle.name[locale]}
                </h3>

                <div className="grid md:grid-cols-3 gap-10 items-center mt-auto">
                  {bundleProducts.map((p, i) => (
                    <div key={p.id} className="relative group/item">
                      <div className="relative aspect-square bg-white/[0.02] rounded-[2.5rem] p-8 overflow-hidden mb-6 border border-white/5 group-hover/item:border-electric/30 transition-all duration-1000 shadow-2xl">
                        <img
                          src={p.images[0]}
                          alt={p.name[locale]}
                          className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover/item:scale-110 transition-transform duration-1000"
                        />
                        {/* Interior Glow */}
                        <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none" />
                      </div>
                      <div className="space-y-2 text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-electric/60 mb-1">{p.brand}</p>
                        <p className="text-lg font-display font-bold italic line-clamp-1 text-white">{p.name[locale]}</p>
                      </div>
                      
                      {i < bundleProducts.length - 1 && (
                        <div className="hidden md:flex absolute top-1/3 -right-5 -translate-y-1/2 h-10 w-10 items-center justify-center bg-white/5 backdrop-blur-2xl text-white/20 rounded-full z-20 border border-white/10">
                          <Plus className="h-5 w-5" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary & Checkout - Tactical Layout */}
            <div className="lg:col-span-4 flex flex-col justify-between glass-terracotta border-2 border-terracotta/20 rounded-[4rem] p-10 md:p-14 text-white relative overflow-hidden shadow-4xl">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
               
               <div>
                 <div className="flex items-center gap-4 mb-12">
                   <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                     <Sparkles className="h-5 w-5 text-electric" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Contenu du Pack Élite</span>
                 </div>

                 <ul className="space-y-6 mb-16">
                   {bundleProducts.map((p) => (
                     <li key={p.id} className="flex items-center justify-between pb-6 border-b border-white/5 group/li">
                        <div className="space-y-1">
                          <span className="text-sm font-medium text-white group-hover:text-electric transition-colors">{p.name[locale]}</span>
                          <p className="text-[9px] font-bold opacity-30 uppercase tracking-widest">{p.brand}</p>
                        </div>
                        <span className="text-xs font-black text-white/40">{p.price} MAD</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="space-y-10">
                 <div className="flex items-end justify-between p-8 rounded-[2.5rem] bg-black/40 border border-white/5">
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-3">Prix Initial</p>
                     <p className="text-2xl font-display font-medium line-through opacity-30 italic">{totalPrice} MAD</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-electric mb-3">Prix Membre</p>
                     <p className="text-5xl font-display font-black tracking-tighter italic text-white">{discountedPrice} MAD</p>
                   </div>
                 </div>

                 <div className="space-y-6">
                   <Magnetic amount={0.15}>
                     <Button 
                       onClick={handleAddBundle} 
                       className="w-full h-24 rounded-[2.5rem] bg-white text-black font-black tracking-[0.4em] text-xs shadow-4xl hover:bg-electric transition-all group overflow-hidden border-0"
                     >
                       <ShoppingBag className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform" />
                       ACTIVER LE PACK
                       <ChevronRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                     </Button>
                   </Magnetic>
                   
                   <p className="text-[9px] text-center font-black opacity-30 uppercase tracking-[0.2em] italic">
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
