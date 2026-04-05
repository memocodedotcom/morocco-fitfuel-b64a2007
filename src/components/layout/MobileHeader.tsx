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
    <header className={cn('md:hidden border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md', className)}>
      <div className="container flex items-center justify-between h-14 gap-3">
        <LogoLink className="text-lg min-w-0" />
        <div className="flex items-center gap-0.5 shrink-0">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')}
            title={t('language')}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
