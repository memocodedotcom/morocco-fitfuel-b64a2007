import { useState, useEffect } from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { icon: Truck, text: 'Livraison gratuite à partir de 500 MAD' },
  { icon: Shield, text: '100% Authentique' },
  { icon: CreditCard, text: 'Paiement Sécurisé' },
];

export function PromoBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % messages.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground text-background text-xs py-2 text-center font-medium tracking-wide overflow-hidden">
      {/* Desktop: show all */}
      <div className="container hidden sm:flex items-center justify-center gap-4">
        {messages.map((msg, i) => (
          <span key={i} className="flex items-center gap-1">
            <msg.icon className="h-3 w-3" />
            {msg.text}
            {i < messages.length - 1 && <span className="ms-4 text-background/30">|</span>}
          </span>
        ))}
      </div>
      {/* Mobile: rotate */}
      <div className="sm:hidden h-4 relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center gap-1"
          >
            {(() => { const Ic = messages[current].icon; return <Ic className="h-3 w-3" />; })()}
            {messages[current].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
