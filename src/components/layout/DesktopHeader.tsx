import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Globe, ChevronDown, Dumbbell, Zap, Flame, Weight, Pill, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
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

export function DesktopHeader() {
  const { locale, setLocale, t } = useLanguage();
  const { itemCount, setCartOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

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
    <header className="hidden md:block sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/[0.08] shadow-sm">
      <div className="container flex items-center justify-between h-20 gap-8">
        <div className="flex items-center gap-12">
          <LogoLink />
          
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 font-bold uppercase tracking-wider text-xs">
                  {t('shopByCategory')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-6 md:grid-cols-2 bg-background border border-white/10 shadow-2xl rounded-xl">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/category/${cat.id}`}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                          >
                            <div className={cn("p-2 rounded-full bg-secondary/80 group-hover:bg-primary/10 transition-colors", cat.color)}>
                              <cat.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold tracking-tight">{cat.name}</div>
                              <div className="text-xs text-muted-foreground">Voir la collection</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="md:col-span-2 pt-2 border-t border-white/5">
                      <NavigationMenuLink asChild>
                        <Link to="/products" className="flex items-center justify-center p-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                          {t('allProducts')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 font-bold uppercase tracking-wider text-xs">
                  {t('shopByGoal')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[350px] gap-1 p-4 bg-background border border-white/10 shadow-2xl rounded-xl">
                    {goals.map((goal) => (
                      <li key={goal.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/goal/${goal.id}`}
                            className="flex flex-col gap-1 p-4 rounded-lg hover:bg-secondary/50 transition-all border border-transparent hover:border-primary/20"
                          >
                            <div className="text-sm font-black uppercase tracking-tight text-primary">{goal.name}</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">{goal.desc}</div>
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
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center gap-3 bg-secondary/30 border border-white/[0.05] rounded-xl px-5 py-3 text-sm text-muted-foreground hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-inner"
          >
            <Search className="h-4 w-4 text-primary" />
            <span className="font-medium tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">{t('searchPlaceholder')}</span>
          </button>
        </div>

        <nav className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
            className="hover:bg-primary/10 hover:text-primary transition-colors h-10 w-10"
            title={t('language')}
          >
            <Globe className="h-5 w-5" />
          </Button>

          <Button 
            variant="default" 
            size="default" 
            className="relative px-5 h-10 rounded-xl font-bold gap-2 shadow-lg shadow-primary/20" 
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden lg:inline">{t('cart')}</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-primary shadow-xl">
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
