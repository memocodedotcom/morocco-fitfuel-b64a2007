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
    <header className="hidden md:block sticky top-0 z-50 bg-black/90 backdrop-blur-3xl border-b border-white/[0.05]">
      <div className="container flex items-center justify-between h-24 gap-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-16">
          <LogoLink className="scale-105" />
          
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/[0.02] font-extrabold uppercase tracking-widest text-[10px] text-slate-500 hover:text-white transition-all shadow-none">
                  {t('shopByCategory')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-4 p-8 bg-black border border-white/[0.05] rounded-sm backdrop-blur-3xl">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/category/${cat.id}`}
                            className="flex items-center gap-6 p-5 rounded-sm hover:bg-white/[0.02] transition-colors group border border-transparent hover:border-white/5"
                          >
                            <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-white/5 text-white/30 group-hover:bg-electric group-hover:text-black transition-colors">
                              <cat.icon className="h-5 w-5" strokeWidth={1} />
                            </div>
                            <div className="space-y-1">
                              <div className="text-[11px] font-extrabold uppercase tracking-widest text-white group-hover:text-electric transition-colors">{cat.name}</div>
                              <div className="text-[8px] font-extrabold text-slate-600 uppercase tracking-widest">SÉLECTION CERTIFIÉE</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/[0.02] font-extrabold uppercase tracking-widest text-[10px] text-slate-500 hover:text-white transition-all shadow-none">
                  {t('shopByGoal')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[400px] gap-2 p-6 bg-black border border-white/[0.05] rounded-sm backdrop-blur-3xl">
                    {goals.map((goal) => (
                      <li key={goal.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/goal/${goal.id}`}
                            className="flex flex-col gap-2 p-5 rounded-sm hover:bg-white/[0.02] transition-colors group border border-transparent hover:border-white/5"
                          >
                            <div className="flex items-center justify-between">
                               <div className="text-[11px] font-extrabold uppercase tracking-widest text-white group-hover:text-electric transition-colors">{goal.name}</div>
                               <div className="h-6 w-6 rounded-none bg-white/5 flex items-center justify-center group-hover:bg-electric group-hover:text-black transition-colors">
                                 <Activity className="h-3 w-3" />
                               </div>
                            </div>
                            <div className="text-[10px] text-slate-500 font-normal leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{goal.desc}</div>
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
            className="w-full h-12 flex items-center gap-6 bg-white/[0.02] border border-white/[0.05] rounded-sm px-6 text-[10px] text-slate-500 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer uppercase font-extrabold tracking-widest"
          >
            <Search className="h-4 w-4 text-electric" />
            <span className="opacity-40 group-hover:opacity-80 transition-opacity">{t('searchPlaceholder')}</span>
          </button>
        </div>

        <nav className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            variant="outline"
            size="icon"
            onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
            className="hover:bg-white/[0.02] text-slate-500 hover:text-white transition-colors h-12 w-12 rounded-sm border-white/[0.05] shadow-none"
          >
            <Globe className="h-5 w-5" />
          </Button>

          <Button 
            variant="outline" 
            className={cn(
              "relative px-8 h-12 rounded-sm font-extrabold uppercase tracking-widest text-[9px] gap-4 transition-all duration-300 shadow-none border-white/[0.05]",
              itemCount > 0 ? "bg-electric text-black border-electric" : "bg-white/[0.02] text-slate-500"
            )} 
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden lg:inline">{t('cart')}</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[9px] font-extrabold rounded-none h-5 w-5 flex items-center justify-center border border-black">
                {itemCount}
              </span>
            )}
          </Button>
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
