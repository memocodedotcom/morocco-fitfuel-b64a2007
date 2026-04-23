import { Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ShoppingCart, Star, Check, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  product: Product;
  variant?: 'default' | 'minimal' | 'obsidian';
}

export function ProductCard({ product, variant = 'default' }: Props) {
  const { t, locale } = useLanguage();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className={cn(
      "group relative flex flex-col h-full bg-white/[0.02] border transition-all duration-700",
      variant === 'obsidian' ? "bg-black border-white/5" : "border-white/5 hover:border-white/10"
    )}>
       {/* Product Image Holder */}
       <Link 
        to={`/products/${product.slug}`} 
        className="block aspect-square relative overflow-hidden p-8"
       >
          <img 
            src={product.images[0]} 
            alt={product.name[locale]}
            className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
             {product.isNew && (
                <div className="bg-electric text-black text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
                  {locale === 'fr' ? 'NOUVEAU' : '╪¼╪»┘è╪»'}
                </div>
             )}
             {product.discountPrice && (
                <div className="bg-white text-black text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
                   SALE
                </div>
             )}
          </div>

          {/* Quick Action Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             <Button 
               onClick={handleAdd}
               className={cn(
                 "w-full h-12 rounded-sm font-black uppercase tracking-widest text-[9px] transition-all duration-500",
                 added ? "bg-green-500 text-white" : "bg-white text-black hover:bg-electric"
               )}
             >
                <AnimatePresence mode="wait">
                   {added ? (
                      <motion.div 
                        key="added" 
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="flex items-center gap-2"
                      >
                         <Check className="h-3 w-3" />
                         <span>{t('addedToCart')}</span>
                      </motion.div>
                   ) : (
                      <motion.div 
                        key="add" 
                        initial={{ opacity: 0, y: -5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="flex items-center gap-2"
                      >
                         <ShoppingCart className="h-3 w-3" />
                         <span>{t('addToCart')}</span>
                      </motion.div>
                   )}
                </AnimatePresence>
             </Button>
          </div>
       </Link>

       {/* Info Section */}
       <div className="p-8 flex-1 flex flex-col justify-between border-t border-white/5 space-y-6">
          <div className="space-y-4">
             <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                   <p className="text-[10px] font-extrabold uppercase tracking-widest text-electric/60">{product.brand}</p>
                   <Link to={`/products/${product.slug}`} className="block">
                      <h3 className="text-sm md:text-base font-display font-black uppercase tracking-tight text-white group-hover:text-electric transition-colors line-clamp-1">{product.name[locale]}</h3>
                   </Link>
                </div>
                <div className="flex items-center gap-1 text-white">
                   <span className="text-[10px] font-black">{product.rating}</span>
                   <Star className="h-3 w-3 fill-electric text-electric" />
                </div>
             </div>
             
             <p className="text-slate-500 text-[11px] font-normal line-clamp-2 leading-relaxed opacity-60">
                {product.description[locale]}
             </p>
          </div>

          <div className="flex items-baseline justify-between pt-4 border-t border-white/5">
             <div className="flex items-baseline gap-3">
                <span className="text-xl font-display font-black text-white">{product.price} <span className="text-xs uppercase ml-1">MAD</span></span>
                {product.discountPrice && (
                   <span className="text-xs text-slate-600 line-through">{product.originalPrice} MAD</span>
                )}
             </div>
             
             <Link 
               to={`/products/${product.slug}`} 
               className="h-8 w-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
             >
                <ArrowUpRight className="h-4 w-4" />
             </Link>
          </div>
       </div>
    </div>
  );
}
