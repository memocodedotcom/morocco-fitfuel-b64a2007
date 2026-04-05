import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { SearchOverlay } from '@/components/search/SearchOverlay';
import { LogoLink } from './LogoLink';
import { ThemeToggle } from './ThemeToggle';

export function DesktopHeader() {
  const { locale, setLocale, t } = useLanguage();
  const { itemCount, setCartOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="hidden md:block sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 gap-6">
        <LogoLink />

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="flex-1 max-w-lg flex items-center gap-2 bg-secondary rounded-full px-4 py-2.5 text-sm text-muted-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
        >
          <Search className="h-4 w-4" />
          <span>{t('searchPlaceholder')}</span>
        </button>

        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/products">{t('products')}</Link>
          </Button>

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
        </nav>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
