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
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian/90 backdrop-blur-2xl border-t border-white/5 safe-area-bottom shadow-3xl">
        {/* Physical Detail: Subtle Top Light Leak */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
        
        <div className="flex items-center justify-around h-20">
          {navItems.map((item) => {
            const isActive = item.path && location.pathname === item.path;
            const Component = item.path ? Link : 'button';
            // @ts-ignore
            const props = item.path ? { to: item.path } : { onClick: item.action };

            return (
              <Component
                key={item.label}
                {...(props as any)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1.5 flex-1 h-full relative transition-all duration-500",
                  isActive ? "text-electric" : "text-white/30"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-4 top-0 h-1 bg-electric rounded-b-full shadow-[0_5px_15px_rgba(212,255,0,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative">
                  <item.icon className={cn("h-6 w-6 transition-transform duration-500", isActive && "scale-110")} />
                  {item.badge ? (
                    <span className="absolute -top-2 -right-3 bg-white text-black text-[9px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-electric shadow-xl">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">{item.label}</span>
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
