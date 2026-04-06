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
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link to={`/products/${product.slug}`} className="block h-full">
        <div
          className={cn(
            'h-full rounded-[2.5rem] overflow-hidden border transition-all duration-700 flex flex-col relative',
            variant === 'obsidian'
              ? 'bg-white/[0.03] border-white/[0.08] hover:border-electric/40 backdrop-blur-xl'
              : variant === 'dark'
              ? 'bg-secondary/40 border-white/5 hover:border-primary/40'
              : 'bg-card border-border/60 hover:border-primary/20 hover:shadow-card-hover'
          )}
        >
          {/* Haptic Glow Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(212, 255, 0, 0.1), transparent 80%)`
              ),
            }}
          />

          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.02] p-8">
            <img
              src={product.images[0]}
              alt={product.name[locale]}
              className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-3"
              loading="lazy"
            />
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
              {discount > 0 && (
                <span className="bg-electric text-black font-black uppercase text-[10px] tracking-[0.2em] px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                  -{discount}%
                </span>
              )}
              {product.stock <= 5 && product.stock > 0 && (
                <span className="bg-white/10 backdrop-blur-md text-white border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                  LTD STOCK
                </span>
              )}
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-electric transition-colors">
                  <ShieldCheck className="h-5 w-5" />
               </div>
            </div>

            {/* Price Tag Overlay (Floating) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <button
                onClick={handleAdd}
                className={cn(
                  "w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-xs transition-all uppercase tracking-widest",
                  added 
                    ? "bg-electric text-black shadow-[0_0_30px_rgba(212,255,0,0.5)]" 
                    : "bg-white text-black hover:bg-electric shadow-2xl"
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
                      <span>{locale === 'fr' ? 'DANS LE PANIER' : 'في السلة'}</span>
                      <CheckCircle className="h-4 w-4" />
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
                      <span>{t('addToCart')}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-8 pb-10 flex-1 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                 {product.brand}
               </p>
               <div className="flex items-center gap-1">
                 <Star className="h-2.5 w-2.5 fill-electric text-electric" />
                 <span className="text-[10px] font-black text-slate-400">{product.rating}</span>
               </div>
            </div>

            <h3 className={cn(
              "text-lg font-black uppercase tracking-tight leading-tight transition-colors duration-500",
              variant === 'obsidian' || variant === 'dark' ? 'text-white group-hover:text-electric' : 'text-foreground'
            )}>
              {product.name[locale]}
            </h3>
            
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                {product.price}<span className="text-[10px] font-bold ml-1 opacity-60 italic">DH</span>
              </span>
              {product.originalPrice && (
                <span className="text-xs font-bold text-slate-600 line-through decoration-electric/40">
                  {product.originalPrice} DH
                </span>
              )}
            </div>

            {/* Performance Tags */}
            <div className="flex items-center gap-3 pt-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
               <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5">
                  <Zap className="h-3 w-3 text-electric" />
                  <span className="text-[8px] font-black uppercase tracking-tighter text-white">High Purity</span>
               </div>
               <div className="h-1 w-1 rounded-full bg-slate-700" />
               <span className="text-[8px] font-black uppercase tracking-tighter text-slate-500">Fast Absorb</span>
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
