import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Globe, ChevronDown, Dumbbell, Zap, Flame, Weight, PersonStand } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function DesktopHeader() {
  const { t, locale, setLocale } = useLanguage();
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goals = [
    { id: 'gain-muscle', label: t('gainMuscle'), icon: Dumbbell, color: 'electric' },
    { id: 'lose-weight', label: t('loseWeight'), icon: Flame, color: 'terracotta' },
    { id: 'energy', label: t('energy'), icon: Zap, color: 'teal' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-black/80 backdrop-blur-2xl border-white/10 py-3" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-12">
            <Link to="/" className="group relative overflow-hidden">
               <span className="text-2xl font-display font-black uppercase tracking-tighter text-white transition-opacity group-hover:opacity-70">
                 NUTRI<span className="text-electric">MAROC</span>
               </span>
            </Link>

            {/* Navigation Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
               <Link to="/products" className="text-[10px] font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                 {t('allProducts')}
               </Link>
               
               <div className="group relative">
                 <button className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                   {t('shopByGoal')}
                   <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                 </button>
                 
                 <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
                    <div className="w-64 bg-black border border-white/10 p-4 rounded-sm shadow-2xl backdrop-blur-3xl">
                       <ul className="space-y-1">
                         {goals.map((goal) => (
                           <li key={goal.id}>
                             <Link 
                               to={`/products?goal=${goal.id}`}
                               className="flex items-center gap-4 p-3 rounded-sm hover:bg-white/[0.05] transition-colors group/item"
                             >
                                <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 group-hover/item:border-electric/30">
                                   <goal.icon className="h-4 w-4 text-electric" />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/70 group-hover/item:text-white">
                                  {goal.label}
                                </span>
                             </Link>
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
               </div>
            </nav>
          </div>

          {/* Action Center */}
          <div className="flex items-center gap-6">
             {/* Search Trigger (Placeholder) */}
             <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 text-white/60 hover:text-white">
               <Search className="h-4 w-4" />
             </button>

             {/* Language Dropdown */}
             <div className="relative group">
                <button className="flex items-center gap-3 h-10 px-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white/60 hover:text-white">
                  <Globe className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{locale}</span>
                </button>
                <div className="absolute top-full right-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
                   <div className="w-32 bg-black border border-white/10 rounded-sm shadow-2xl overflow-hidden">
                      <button 
                        onClick={() => setLocale('fr')}
                        className={cn(
                          "w-full p-3 text-[10px] font-extrabold uppercase tracking-widest text-left hover:bg-white/10 transition-colors",
                          locale === 'fr' ? "text-electric bg-white/5" : "text-white/60"
                        )}
                      >
                        Français
                      </button>
                      <button 
                        onClick={() => setLocale('ar')}
                        className={cn(
                          "w-full p-3 text-[10px] font-extrabold uppercase tracking-widest text-right hover:bg-white/10 transition-colors font-arabic",
                          locale === 'ar' ? "text-electric bg-white/5" : "text-white/60"
                        )}
                      >
                        العربية
                      </button>
                   </div>
                </div>
             </div>

             {/* Cart Button */}
             <Link to="/checkout" className="relative group">
               <Button className="rounded-full bg-white text-black hover:bg-electric transition-all duration-500 h-10 px-6 gap-3">
                 <ShoppingCart className="h-4 w-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">{t('cart')}</span>
                 <AnimatePresence>
                   {itemCount > 0 && (
                     <motion.span 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       exit={{ scale: 0 }}
                       className="absolute -top-1 -right-1 h-5 w-5 bg-electric text-black rounded-full text-[10px] font-black flex items-center justify-center border-2 border-black"
                     >
                       {itemCount}
                     </motion.span>
                   )}
                 </AnimatePresence>
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
