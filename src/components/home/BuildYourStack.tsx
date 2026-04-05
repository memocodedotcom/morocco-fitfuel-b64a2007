import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { stackBundles, getProduct } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Dumbbell, Zap } from 'lucide-react';
import { PageSection } from '@/components/layout/PageSection';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { toast } from '@/components/ui/sonner';

const goals = [
  { id: 'lose-weight', icon: Target },
  { id: 'gain-muscle', icon: Dumbbell },
  { id: 'energy', icon: Zap },
] as const;

type GoalKey = keyof typeof stackBundles;

export function BuildYourStack() {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const reduceMotion = usePrefersReducedMotion();
  const [selected, setSelected] = useState<GoalKey>('gain-muscle');
  const bundle = stackBundles[selected];
  const bundleProducts = bundle.productIds.map((id) => getProduct(id)!).filter(Boolean);
  const totalPrice = bundleProducts.reduce((s, p) => s + p.price, 0);
  const discountedPrice = Math.round(totalPrice * (1 - bundle.discount / 100));

  const goalLabels: Record<GoalKey, string> = {
    'lose-weight': t('loseWeight'),
    'gain-muscle': t('gainMuscle'),
    energy: t('energy'),
  };

  const handleAddBundle = () => {
    bundleProducts.forEach((p) => addItem(p.id, 1, undefined, undefined, { silent: true }));
    toast.success(t('addedToCart'));
  };

  const bundleCard = (
    <div className="bg-card border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold">{bundle.name[locale]}</span>
        <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-bold">
          -{bundle.discount}%
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {bundleProducts.map((p) => (
          <div key={p.id} className="text-center">
            <img
              src={p.images[0]}
              alt={p.name[locale]}
              className="w-full aspect-square object-cover rounded-lg mb-1.5"
            />
            <p className="text-xs font-medium truncate">{p.name[locale]}</p>
            <p className="text-xs text-muted-foreground">{p.price} MAD</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <span className="line-through text-muted-foreground text-sm me-2">{totalPrice} MAD</span>
          <span className="text-primary font-bold text-lg">{discountedPrice} MAD</span>
        </div>
        <Button onClick={handleAddBundle} className="rounded-full shrink-0">
          {t('addBundle')}
        </Button>
      </div>
    </div>
  );

  return (
    <PageSection>
      <h2 className="text-lg font-bold mb-1">{t('buildStack')}</h2>
      <p className="text-sm text-muted-foreground mb-4">{t('buildStackDesc')}</p>

      <div className="flex gap-2 mb-5 flex-wrap">
        {goals.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setSelected(g.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected === g.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            <g.icon className="h-4 w-4 shrink-0" />
            {goalLabels[g.id]}
          </button>
        ))}
      </div>

      {reduceMotion ? (
        <div key={selected}>{bundleCard}</div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {bundleCard}
          </motion.div>
        </AnimatePresence>
      )}
    </PageSection>
  );
}
