import { useState, useEffect, useMemo } from 'react';
import { Truck, Shield, CreditCard, Activity, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function PromoBar() {
  const { t, locale } = useLanguage();
  const reduceMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  const messages = useMemo(
    () => [
      { icon: Truck, text: locale === 'fr' ? 'LIVRAISON EXPRESS 24H - MAROC' : 'توصيل سريع 24 ساعة - المغرب' },
      { icon: Shield, text: locale === 'fr' ? '100% AUTHENTIQUE - CERTIFIÉ' : '100% أصلي - معتمد' },
      { icon: Zap, text: locale === 'fr' ? 'PERFORMANCE LUXURY 2.0' : 'فخامة الأداء 2.0' },
    ],
    [locale],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => setCurrent(c => (c + 1) % messages.length), 4000);
    return () => clearInterval(interval);
  }, [reduceMotion, messages.length]);

  return (
    <div className="bg-electric text-black text-[10px] py-2 text-center font-black tracking-[0.2em] uppercase overflow-hidden shadow-[0_4px_20px_rgba(212,255,0,0.2)] relative z-50">
      <div className="container hidden sm:flex items-center justify-center gap-12 flex-wrap">
        {messages.map((msg, i) => (
          <span key={i} className="flex items-center gap-3 group cursor-default">
            <msg.icon className="h-3 w-3 shrink-0 transition-transform group-hover:scale-125" />
            <span className="opacity-90 group-hover:opacity-100 transition-opacity">{msg.text}</span>
            {i < messages.length - 1 && <div className="h-1 w-1 rounded-full bg-black/20 ml-8" />}
          </span>
        ))}
      </div>
      <div className="sm:hidden min-h-4 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="flex items-center justify-center gap-3 w-full"
          >
            {(() => {
              const Ic = messages[current].icon;
              return <Ic className="h-3.5 w-3.5 shrink-0" />;
            })()}
            <span className="truncate">{messages[current].text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
