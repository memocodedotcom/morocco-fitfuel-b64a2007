import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import { Zap, Target, Dumbbell, ArrowRight, ShoppingCart, Check } from 'lucide-react';

export function BuildYourStack() {
  const { t, locale } = useLanguage();
  const { addItem } = useCart();
  const [selectedGoal, setSelectedGoal] = useState<'lose-weight' | 'gain-muscle' | 'energy'>('gain-muscle');
  const [added, setAdded] = useState(false);

  const goals = useMemo(() => [
    { id: 'gain-muscle', label: t('gainMuscle'), icon: Dumbbell, color: 'electric' },
    { id: 'lose-weight', label: t('loseWeight'), icon: Target, color: 'terracotta' },
    { id: 'energy', label: t('energy'), icon: Zap, color: 'teal' },
  ] as const, [t]);

  const currentBundle = useMemo(() => {
    // Basic logic for bundle generation
    const bundleProducts = products
      .filter(p => (p.category === 'protein' || p.category === 'creatine' || p.category === 'pre-workout'))
      .slice(0, 3);
      
    const totalPrice = bundleProducts.reduce((sum, p) => sum + p.price, 0);
    const bundlePrice = Math.round(totalPrice * 0.85); // 15% Bundle Discount

    return {
      products: bundleProducts,
      totalPrice,
      bundlePrice,
      name: {
        fr: `Stack ${goals.find(g => g.id === selectedGoal)?.label || ''}`,
        ar: `باقة ${goals.find(g => g.id === selectedGoal)?.label || ''}`
      }
    };
  }, [selectedGoal, locale, goals, t]);

  const handleAddBundle = () => {
    currentBundle.products.forEach(p => addItem(p.id));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="goal-selector" className="py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-0 w-full h-[600px] bg-electric/5 -translate-y-1/2 blur-[150px] opacity-30" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
          {/* Left: Selector */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="h-px w-10 bg-electric" />
                 <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">OPTIMISER VOTRE STACK</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-white leading-[0.9]">
                BUILD YOUR<br/>
                <span className="serif-display italic text-white/30 lowercase">excellence.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {goals.map((goal) => (
                 <button
                   key={goal.id}
                   onClick={() => setSelectedGoal(goal.id)}
                   className={cn(
                     "relative p-8 rounded-sm border transition-all duration-500 text-left group overflow-hidden",
                     selectedGoal === goal.id 
                      ? "bg-white/[0.05] border-electric/40" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                   )}
                 >
                   <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                         <div className={cn(
                            "h-12 w-12 flex items-center justify-center rounded-sm transition-colors",
                            selectedGoal === goal.id ? "bg-electric text-black" : "bg-white/5 text-white"
                         )}>
                            <goal.icon className="h-6 w-6" />
                         </div>
                         <span className={cn(
                           "text-xl font-display font-black uppercase tracking-tighter transition-colors",
                           selectedGoal === goal.id ? "text-white" : "text-slate-500"
                         )}>
                           {goal.label}
                         </span>
                      </div>
                      {selectedGoal === goal.id && (
                        <ArrowRight className="h-6 w-6 text-electric" />
                      )}
                   </div>
                 </button>
               ))}
            </div>
          </div>

          {/* Right: Bundle Card */}
          <div className="relative">
             <div className="relative z-10 bg-white/[0.02] border border-white/10 p-12 rounded-sm backdrop-blur-3xl space-y-10 group hover:border-white/20 transition-all duration-700">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                     <span className="text-[10px] font-black uppercase tracking-widest text-electric">BUNDLE ELITE -15%</span>
                     <h3 className="text-4xl font-display font-black uppercase tracking-tighter text-white">
                       {currentBundle.name[locale]}
                     </h3>
                   </div>
                   <div className="text-right">
                      <div className="text-slate-500 line-through text-sm">{currentBundle.totalPrice} MAD</div>
                      <div className="text-4xl font-display font-black text-white">{currentBundle.bundlePrice} MAD</div>
                   </div>
                </div>

                <div className="space-y-6">
                   <p className="text-slate-500 text-[10px] uppercase tracking-widest font-extrabold pb-4 border-b border-white/5">COMPOSITION DU STACK</p>
                   <div className="grid gap-6">
                      {currentBundle.products.map((product) => (
                        <div key={product.id} className="flex items-center gap-6 group/item">
                           <div className="h-16 w-16 bg-white/5 p-2 rounded-sm border border-white/5 group-hover/item:border-white/20 transition-colors">
                              <img src={product.images[0]} alt={product.name[locale]} className="w-full h-full object-contain grayscale group-hover/item:grayscale-0 transition-all" />
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-xs font-black uppercase tracking-widest text-white">{product.name[locale]}</h4>
                              <p className="text-[10px] text-slate-500 uppercase tracking-widest">{product.brand}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <Button 
                  onClick={handleAddBundle}
                  className={cn(
                    "w-full h-16 rounded-sm font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 mt-6",
                    added ? "bg-green-500 text-white" : "bg-electric text-black hover:bg-white"
                  )}
                >
                  {added ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      {locale === 'fr' ? 'ADDITIONNÉ' : 'تمت الإضافة'}
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {t('addBundle')}
                    </>
                  )}
                </Button>
             </div>

             {/* Decorative Background Element */}
             <div className="absolute -inset-4 border border-white/5 -z-10 translate-x-2 translate-y-2 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
