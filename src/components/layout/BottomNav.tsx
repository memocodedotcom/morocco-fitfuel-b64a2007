import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { SearchOverlay } from '@/components/search/SearchOverlay';

export function BottomNav() {
  const { t } = useLanguage();
  const { itemCount, setCartOpen } = useCart();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { icon: Home, label: t('home'), path: '/', action: undefined },
    { icon: Search, label: t('search'), path: undefined, action: () => setSearchOpen(true) },
    { icon: ShoppingCart, label: t('cart'), path: undefined, action: () => setCartOpen(true), badge: itemCount },
    { icon: User, label: t('profile'), path: '/profile', action: undefined },
  ];

  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = item.path && location.pathname === item.path;
            const Component = item.path ? Link : 'button';
            const props = item.path ? { to: item.path } : { onClick: item.action };

            return (
              <Component
                key={item.label}
                {...(props as any)}
                className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full relative transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className="relative">
                  <item.icon className="h-5 w-5" />
                  {item.badge ? (
                    <span className="absolute -top-1.5 -right-2.5 bg-accent text-accent-foreground text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Component>
            );
          })}
        </div>
      </nav>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
