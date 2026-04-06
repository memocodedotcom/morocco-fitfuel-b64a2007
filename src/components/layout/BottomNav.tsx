import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { SearchOverlay } from '@/components/search/SearchOverlay';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-3xl border-t border-white/[0.05] safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = item.path && location.pathname === item.path;
            const Component = item.path ? Link : 'button';
            const props = item.path ? { to: item.path } : { onClick: item.action };

            return (
              <Component
                key={item.label}
                {...(props as any)}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 flex-1 h-full relative transition-all duration-300",
                  isActive ? "text-electric" : "text-slate-600"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-6 top-0 h-0.5 bg-electric"
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
                <div className="relative">
                  <item.icon className={cn("h-5 w-5 transition-transform duration-300", isActive && "scale-105")} strokeWidth={1} />
                  {item.badge ? (
                    <span className="absolute -top-1.5 -right-2 bg-white text-black text-[8px] font-extrabold rounded-none h-4 w-4 flex items-center justify-center border border-black shadow-none">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-[8px] font-extrabold uppercase tracking-widest leading-none">{item.label}</span>
              </Component>
            );
          })}
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
