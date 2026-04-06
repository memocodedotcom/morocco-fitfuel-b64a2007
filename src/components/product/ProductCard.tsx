import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Star, Plus, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  product: Product;
  variant?: 'light' | 'dark' | 'obsidian';
}

export function ProductCard({ product, variant = 'obsidian' }: Props) {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt / glow effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

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
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link to={`/products/${product.slug}`} className="block h-full">
        <div
          className={cn(
            'h-full rounded-sm overflow-hidden border border-white/[0.05] transition-all duration-300 flex flex-col relative',
            'bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
          )}
        >
          {/* Image Container - Geometric Split */}
          <div className="relative aspect-square overflow-hidden bg-black/20 p-12 border-b border-white/[0.05]">
            <img
              src={product.images[0]}
              alt={product.name[locale]}
              className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Minimalist Tech Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
              {discount > 0 && (
                <span className="bg-electric text-black font-extrabold uppercase text-[8px] tracking-[0.2em] px-2 py-1 rounded-none">
                  SALE {discount}%
                </span>
              )}
            </div>

            {/* Flat CTA Overlay - Constant 48px height for alignment */}
            <div className={cn(
              "absolute inset-x-0 bottom-0 transition-transform duration-300 md:translate-y-full md:group-hover:translate-y-0",
              added && "md:translate-y-0"
            )}>
               <button
                onClick={handleAdd}
                className={cn(
                  "w-full h-12 flex items-center justify-center gap-2.5 font-extrabold text-[9px] transition-all uppercase tracking-widest border-t border-white/[0.05]",
                  added 
                    ? "bg-electric text-black" 
                    : "bg-white text-black hover:bg-electric"
                )}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.div
                      key="checked"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{locale === 'fr' ? 'CONFIRMÉ' : 'تم التأكيد'}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>{t('addToCart')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Structured Metadata Section */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[8px] font-extrabold uppercase tracking-widest text-white/40">
                <span>{product.brand}</span>
                <div className="flex items-center gap-1.5 border-l border-white/10 pl-2">
                  <Star className="h-2 w-2 fill-electric text-electric" />
                  <span>{product.rating} / 5</span>
                </div>
              </div>

              <h3 className="text-sm font-extrabold uppercase tracking-tight leading-tight text-white transition-colors group-hover:text-electric">
                {product.name[locale]}
              </h3>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold tracking-tighter text-white">
                  {product.price}<span className="text-[9px] font-bold ml-1 opacity-40">DH</span>
                </span>
                {product.originalPrice && (
                  <span className="text-[10px] font-bold text-white/20 line-through">
                    {product.originalPrice} DH
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest text-white/20">
                 <Zap className="h-2.5 w-2.5 text-white/20" />
                 <span>PURETY SEALED</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
