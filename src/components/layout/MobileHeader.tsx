import { Globe, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { LogoLink } from './LogoLink';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export function MobileHeader({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const { itemCount, setCartOpen } = useCart();

  return (
    <header className={cn('md:hidden border-b border-white/[0.05] bg-black/90 backdrop-blur-3xl sticky top-0 z-40', className)}>
      <div className="container flex items-center justify-between h-16 gap-3 px-4">
        <LogoLink className="scale-90 origin-left" />
        <div className="flex items-center gap-1 shrink-0">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
            className="h-10 w-10 border-white/[0.05] rounded-sm bg-white/[0.02]"
          >
            <Globe className="h-4 w-4 text-slate-500" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={cn(
              "relative h-10 w-10 border-white/[0.05] rounded-sm transition-colors",
              itemCount > 0 ? "bg-electric border-electric" : "bg-white/[0.02]"
            )} 
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className={cn("h-4 w-4", itemCount > 0 ? "text-black" : "text-slate-500")} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-extrabold rounded-none h-4 w-4 flex items-center justify-center border border-black">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
