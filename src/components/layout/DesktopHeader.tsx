import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Globe, ChevronDown, Dumbbell, Zap, Flame, Weight, Pill, TrendingDown, Activity } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { SearchOverlay } from '@/components/search/SearchOverlay';
import { LogoLink } from './LogoLink';
import { ThemeToggle } from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from 'framer-motion';
import { Magnetic } from '@/components/ui/magnetic';

export function DesktopHeader() {
  const { locale, setLocale, t } = useLanguage();
  const { itemCount, setCartOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Cart pulse effect on item add
  useEffect(() => {
    if (itemCount > 0) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  const categories = [
    { id: 'protein', name: t('protein'), icon: Dumbbell, slug: 'proteines', color: 'text-electric' },
    { id: 'creatine', name: t('creatine'), icon: Zap, slug: 'creatine', color: 'text-terracotta' },
    { id: 'mass-gainer', name: t('massGainer'), icon: Weight, slug: 'mass-gainer', color: 'text-sage-light' },
    { id: 'pre-workout', name: t('preWorkout'), icon: Flame, slug: 'pre-workout', color: 'text-red-500' },
    { id: 'vitamins', name: t('vitamins'), icon: Pill, slug: 'vitamines', color: 'text-emerald-500' },
    { id: 'weight-loss', name: t('weightLoss'), icon: TrendingDown, slug: 'perte-de-poids', color: 'text-purple-500' },
  ];

  const goals = [
    { id: 'gain-muscle', name: t('gainMuscle'), desc: 'Optimisez votre croissance musculaire.', slug: 'musculation' },
    { id: 'lose-weight', name: t('loseWeight'), desc: 'Brûlez les graisses efficacement.', slug: 'perte-de-poids' },
    { id: 'energy', name: t('energy'), desc: 'Boostez votre endurance et focus.', slug: 'energie' },
  ];

  return (
    <header className="hidden md:block sticky top-0 z-50 bg-obsidian/80 backdrop-blur-3xl border-b border-white/[0.05] shadow-2xl">
      <div className="container flex items-center justify-between h-24 gap-12">
        <div className="flex items-center gap-16">
          <Magnetic amount={0.1}>
            <LogoLink className="scale-110" />
          </Magnetic>
          
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 font-black uppercase tracking-[0.4em] text-[10px] text-white/50 hover:text-white transition-all">
                  {t('shopByCategory')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[650px] gap-6 p-10 md:grid-cols-2 bg-obsidian border border-white/5 shadow-4xl rounded-[3rem] grain-organic backdrop-blur-3xl">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/category/${cat.id}`}
                            className="flex items-center gap-6 p-6 rounded-[2rem] hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                          >
                            <div className={cn("p-4 rounded-2xl bg-white/5 group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 shadow-2xl", cat.color)}>
                              <cat.icon className="h-7 w-7" />
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm font-black uppercase tracking-widest text-white group-hover:text-electric transition-colors font-display italic">{cat.name}</div>
                              <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{locale === 'fr' ? 'SÉLECTION ÉLITE' : 'اختيار النخبة'}</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 font-black uppercase tracking-[0.4em] text-[10px] text-white/50 hover:text-white transition-all">
                  {t('shopByGoal')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[450px] gap-4 p-8 bg-obsidian border border-white/5 shadow-4xl rounded-[3rem] grain-organic backdrop-blur-3xl">
                    {goals.map((goal) => (
                      <li key={goal.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/goal/${goal.id}`}
                            className="flex flex-col gap-3 p-6 rounded-[2rem] hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                          >
                            <div className="flex items-center justify-between">
                               <div className="text-sm font-black uppercase tracking-[0.2em] text-electric italic font-display">{goal.name}</div>
                               <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-all">
                                 <Activity className="h-4 w-4" />
                               </div>
                            </div>
                            <div className="text-xs text-slate-400 font-medium italic leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{goal.desc}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex-1 max-w-md group relative">
          <Magnetic amount={0.05}>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="w-full h-14 flex items-center gap-6 bg-white/[0.03] border border-white/5 rounded-[1.5rem] px-8 text-[11px] text-slate-400 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-inner uppercase font-black tracking-[0.3em] backdrop-blur-3xl"
            >
              <Search className="h-5 w-5 text-electric" />
              <span className="opacity-40 group-hover:opacity-100 transition-opacity italic">{t('searchPlaceholder')}</span>
            </button>
          </Magnetic>
        </div>

        <nav className="flex items-center gap-6">
          <ThemeToggle />

          <Magnetic amount={0.2}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
              className="hover:bg-white/10 text-white/40 hover:text-white transition-all h-12 w-12 rounded-2xl border border-transparent hover:border-white/10"
            >
              <Globe className="h-6 w-6" />
            </Button>
          </Magnetic>

          <div className="relative">
             <AnimatePresence>
                {isPulsing && (
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0.5 }}
                     animate={{ scale: 1.5, opacity: 0 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 bg-electric rounded-2xl z-0"
                   />
                )}
             </AnimatePresence>
             
             <Magnetic amount={0.15}>
               <Button 
                 variant="default" 
                 size="default" 
                 className={cn(
                   "relative px-8 h-14 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] gap-4 transition-all duration-700 z-10 border-0",
                   itemCount > 0 ? "bg-electric text-black shadow-[0_0_40px_rgba(212,255,0,0.4)] hover:scale-105" : "bg-white/5 border border-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                 )} 
                 onClick={() => setCartOpen(true)}
               >
                 <ShoppingCart className="h-6 w-6" />
                 <span className="hidden xl:inline">{t('cart')}</span>
                 {itemCount > 0 && (
                   <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center border-2 border-electric shadow-2xl">
                     {itemCount}
                   </span>
                 )}
               </Button>
             </Magnetic>
          </div>
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
