import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/products/${product.slug}`} className="block h-full">
        <div
          className={cn(
            'h-full rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col',
            variant === 'dark'
              ? 'bg-secondary/40 border-white/5 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)]'
              : 'bg-card border-border/60 hover:border-primary/20 hover:shadow-card-hover'
          )}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
            <img
              src={product.images[0]}
              alt={product.name[locale]}
              className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-3 inset-x-3 flex flex-wrap gap-2 pointer-events-none">
              {discount > 0 && (
                <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-sm shadow-xl">
                  -{discount}%
                </span>
              )}
              {product.stock <= 5 && product.stock > 0 && (
                <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-sm shadow-xl">
                  {t('lowStockShort', { n: product.stock })}
                </span>
              )}
            </div>

            {/* Hover Action Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/60 to-transparent">
              <button
                onClick={handleAdd}
                className={cn(
                  "w-full h-10 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-all shadow-xl",
                  added ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.div
                      key="checked"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.5, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-lg">✓</span>
                      <span>AJOUTÉ</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -5, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" strokeWidth={3} />
                      <span>PANIER</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-4 flex-1 flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">
              {product.brand}
            </p>
            <h3 className={cn(
              "text-sm font-bold line-clamp-1 mb-2 group-hover:text-primary transition-colors",
              variant === 'dark' ? 'text-white' : 'text-foreground'
            )}>
              {product.name[locale]}
            </h3>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-2.5 w-2.5", 
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                    )} 
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold opacity-60">({product.reviewCount})</span>
            </div>

            <div className="mt-auto flex items-baseline gap-2">
              <span className="text-lg font-black tracking-tight text-primary">
                {product.price} <span className="text-[10px] font-bold ml-0.5">MAD</span>
              </span>
              {product.originalPrice && (
                <span className="text-[11px] font-medium text-muted-foreground line-through opacity-60">
                  {product.originalPrice} MAD
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
