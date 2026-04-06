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
    { id: 'protein', name: t('protein'), icon: Dumbbell, slug: 'proteines', color: 'text-blue-500' },
    { id: 'creatine', name: t('creatine'), icon: Zap, slug: 'creatine', color: 'text-yellow-500' },
    { id: 'mass-gainer', name: t('massGainer'), icon: Weight, slug: 'mass-gainer', color: 'text-orange-500' },
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
    <header className="hidden md:block sticky top-0 z-50 bg-obsidian/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl">
      <div className="container flex items-center justify-between h-20 gap-8">
        <div className="flex items-center gap-12">
          <LogoLink />
          
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 font-black uppercase tracking-[0.2em] text-[10px] text-white/70 hover:text-white transition-colors">
                  {t('shopByCategory')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-4 p-8 md:grid-cols-2 bg-obsidian border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2rem] grain-overlay">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/category/${cat.id}`}
                            className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                          >
                            <div className={cn("p-3 rounded-2xl bg-white/5 group-hover:bg-electric/10 transition-all group-hover:scale-110", cat.color)}>
                              <cat.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="text-sm font-black uppercase tracking-tight text-white group-hover:text-electric transition-colors">{cat.name}</div>
                              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{locale === 'fr' ? 'Collection Élite' : 'مجموعة النخبة'}</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 font-black uppercase tracking-[0.2em] text-[10px] text-white/70 hover:text-white transition-colors">
                  {t('shopByGoal')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[400px] gap-2 p-6 bg-obsidian border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2rem] grain-overlay">
                    {goals.map((goal) => (
                      <li key={goal.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/goal/${goal.id}`}
                            className="flex flex-col gap-2 p-5 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                          >
                            <div className="flex items-center justify-between">
                               <div className="text-xs font-black uppercase tracking-[0.2em] text-electric italic">{goal.name}</div>
                               <Activity className="h-3 w-3 text-slate-700 group-hover:text-electric transition-colors" />
                            </div>
                            <div className="text-xs text-slate-400 font-medium italic leading-relaxed">{goal.desc}</div>
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

        <div className="flex-1 max-w-sm group relative">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-3 text-[11px] text-slate-400 hover:bg-white/10 hover:border-electric/30 transition-all duration-300 cursor-pointer shadow-inner uppercase font-black tracking-widest"
          >
            <Search className="h-4 w-4 text-electric" />
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">{t('searchPlaceholder')}</span>
          </button>
        </div>

        <nav className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
            className="hover:bg-white/10 text-white/60 hover:text-electric transition-all h-10 w-10 rounded-xl"
          >
            <Globe className="h-5 w-5" />
          </Button>

          <div className="relative">
             <AnimatePresence>
                {isPulsing && (
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0.5 }}
                     animate={{ scale: 1.5, opacity: 0 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 bg-electric rounded-xl z-0"
                   />
                )}
             </AnimatePresence>
             
             <Button 
               variant="default" 
               size="default" 
               className={cn(
                 "relative px-6 h-12 rounded-xl font-black uppercase tracking-widest text-[11px] gap-3 transition-all duration-500 z-10",
                 itemCount > 0 ? "bg-electric text-black shadow-[0_0_25px_rgba(212,255,0,0.3)] hover:scale-105" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
               )} 
               onClick={() => setCartOpen(true)}
             >
               <ShoppingCart className="h-5 w-5" />
               <span className="hidden xl:inline">{t('cart')}</span>
               {itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-electric shadow-xl">
                   {itemCount}
                 </span>
               )}
             </Button>
          </div>
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
