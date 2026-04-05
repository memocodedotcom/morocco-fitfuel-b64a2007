import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  product: Product;
  variant?: 'light' | 'dark';
}

export function ProductCard({ product, variant = 'light' }: Props) {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="group"
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div
          className={`rounded-2xl overflow-hidden border shadow-sm transition-shadow duration-300 group-hover:shadow-md ${
            variant === 'dark'
              ? 'bg-urgency border-white/10 ring-1 ring-white/5 group-hover:ring-white/15'
              : 'bg-card border-border/80 ring-1 ring-transparent group-hover:ring-primary/15 group-hover:border-primary/20'
          }`}
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name[locale]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {discount > 0 && (
              <span className="absolute top-2 start-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                -{discount}%
              </span>
            )}
            {product.stock <= 5 && product.stock > 0 && (
              <span className="absolute bottom-2 start-2 bg-amber-500/95 text-amber-950 dark:bg-amber-400/90 dark:text-amber-950 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm border border-amber-600/20">
                {t('lowStockShort', { n: product.stock })}
              </span>
            )}
            {/* Quick add */}
            <button
              onClick={handleAdd}
              className="absolute bottom-2 end-2 bg-primary text-primary-foreground rounded-full p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
            >
              {added ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="block text-xs"
                >
                  ✓
                </motion.span>
              ) : (
                <ShoppingCart className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Info */}
          <div className={`p-3 ${variant === 'dark' ? 'text-urgency-foreground' : ''}`}>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
              {product.brand}
            </p>
            <p className="text-sm font-semibold truncate mb-1">{product.name[locale]}</p>
            <div className="flex items-center gap-1 mb-1.5">
              <Star className="h-3 w-3 fill-gold text-gold" />
              <span className="text-xs font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-primary">{product.price} MAD</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">{product.originalPrice} MAD</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
