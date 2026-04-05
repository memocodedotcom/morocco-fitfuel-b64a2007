import { useState, useEffect, useMemo } from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function PromoBar() {
  const { t } = useLanguage();
  const reduceMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  const messages = useMemo(
    () => [
      { icon: Truck, text: t('promoFreeShipping') },
      { icon: Shield, text: t('promoAuthentic') },
      { icon: CreditCard, text: t('promoSecurePayment') },
    ],
    [t],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => setCurrent(c => (c + 1) % messages.length), 3000);
    return () => clearInterval(interval);
  }, [reduceMotion, messages.length]);

  return (
    <div className="bg-foreground text-background text-xs py-2 text-center font-medium tracking-wide overflow-hidden">
      <div className="container hidden sm:flex items-center justify-center gap-4 flex-wrap">
        {messages.map((msg, i) => (
          <span key={i} className="flex items-center gap-1">
            <msg.icon className="h-3 w-3 shrink-0" />
            {msg.text}
            {i < messages.length - 1 && <span className="ms-4 text-background/30" aria-hidden>|</span>}
          </span>
        ))}
      </div>
      <div className="sm:hidden min-h-4 flex items-center justify-center px-2">
        {reduceMotion ? (
          <span className="flex items-center justify-center gap-1">
            {(() => {
              const Ic = messages[0].icon;
              return <Ic className="h-3 w-3 shrink-0" />;
            })()}
            {messages[0].text}
          </span>
        ) : (
          <div className="relative w-full h-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center gap-1"
              >
                {(() => {
                  const Ic = messages[current].icon;
                  return <Ic className="h-3 w-3 shrink-0" />;
                })()}
                {messages[current].text}
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
