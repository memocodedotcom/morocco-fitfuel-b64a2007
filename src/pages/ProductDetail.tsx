import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { getProductBySlug, getProduct } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ReviewSection } from '@/components/product/ReviewSection';
import { ProductComplianceSection } from '@/components/product/ProductComplianceSection';
import { ShoppingCart, Shield, Star, ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/components/ui/sonner';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <AppLayout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">{t('productNotFound')}</p>
          <Button asChild className="mt-4">
            <Link to="/products">{t('backToProducts')}</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  const crossSellProducts = (product.crossSellIds || []).map(id => getProduct(id)).filter(Boolean);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = () => {
    addItem(product.id, qty, product.flavors?.[selectedFlavor], product.sizes?.[selectedSize]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleAddBoth = () => {
    addItem(product.id, 1, product.flavors?.[selectedFlavor], product.sizes?.[selectedSize], {
      silent: true,
    });
    crossSellProducts.forEach((p) => p && addItem(p.id, 1, undefined, undefined, { silent: true }));
    toast.success(t('addedToCart'));
  };

  return (
    <AppLayout>
      <div className="container py-4 md:py-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
          {t('products')}
        </Link>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Gallery */}
          <div>
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary mb-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name[locale]}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </AnimatePresence>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-colors duration-200 ${
                      i === selectedImage ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
            <h1 className="text-2xl font-extrabold mb-2">{product.name[locale]}</h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}`} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} {t('reviews')})</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-extrabold text-primary">{product.price} MAD</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice} MAD</span>
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="flex items-center gap-1 bg-trust/10 text-trust text-xs font-medium px-3 py-1.5 rounded-full">
                <Shield className="h-3.5 w-3.5" />
                {t('verifiedAuthentic')}
              </span>
              {product.expirationDate && (
                <span className="flex items-center gap-1 bg-secondary text-xs font-medium px-3 py-1.5 rounded-full">
                  📅 {t('expiresOn')}: {product.expirationDate}
                </span>
              )}
              {product.stock <= 5 && product.stock > 0 && (
                <span className="flex items-center gap-1 bg-amber-500/15 text-amber-900 dark:text-amber-100 border border-amber-500/25 text-xs font-semibold px-3 py-1.5 rounded-full">
                  🔥 {t('onlyLeft', { n: String(product.stock) })}
                </span>
              )}
            </div>

            <ProductComplianceSection product={product} />

            {/* Flavors */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">{t('flavor')}</p>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((f, i) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFlavor(i)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        i === selectedFlavor
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-5">
                <p className="text-sm font-semibold mb-2">{t('size')}</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(i)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        i === selectedSize
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Qty + ATC */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border rounded-full">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-2.5 hover:bg-secondary rounded-s-full transition-colors">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-medium text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="p-2.5 hover:bg-secondary rounded-e-full transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button onClick={handleAdd} className="flex-1 rounded-full gap-2 h-11" disabled={added}>
                {added ? <><Check className="h-4 w-4" /> ✓</> : <><ShoppingCart className="h-4 w-4" /> {t('addToCart')}</>}
              </Button>
            </div>

            <p className="max-w-prose text-base text-muted-foreground mb-8 leading-relaxed">
              {product.description[locale]}
            </p>

            {/* Accordions */}
            <Accordion type="single" collapsible className="mb-6 divide-y rounded-xl border bg-card px-1">
              {product.ingredients && (
                <AccordionItem value="ingredients" className="border-0">
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline">
                    {t('ingredients')}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {product.ingredients[locale]}
                  </AccordionContent>
                </AccordionItem>
              )}
              {product.suggestedUse && (
                <AccordionItem value="use" className="border-0">
                  <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline">
                    {t('suggestedUse')}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {product.suggestedUse[locale]}
                  </AccordionContent>
                </AccordionItem>
              )}
              <AccordionItem value="shipping" className="border-0">
                <AccordionTrigger className="text-base font-semibold py-4 hover:no-underline">
                  {t('shippingGuarantee')}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {t('shippingAccordionBody')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Cross-sell */}
            {crossSellProducts.length > 0 && (
              <div className="border rounded-xl p-4">
                <h3 className="text-sm font-semibold mb-3">{t('frequentlyBought')}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <img src={product.images[0]} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  <span className="text-lg font-bold text-muted-foreground">+</span>
                  {crossSellProducts.map(cp => cp && (
                    <Link key={cp.id} to={`/products/${cp.slug}`}>
                      <img src={cp.images[0]} alt={cp.name[locale]} className="w-16 h-16 rounded-lg object-cover hover:ring-2 ring-primary transition-all" />
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">
                    {product.price + crossSellProducts.reduce((s, p) => s + (p?.price || 0), 0)} MAD
                  </span>
                  <Button variant="outline" size="sm" onClick={handleAddBoth} className="rounded-full">
                    {t('addBothToCart')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <ReviewSection product={product} />
      </div>

      {/* Sticky bottom CTA - mobile */}
      <div className="md:hidden fixed left-0 right-0 z-40 border-t bg-background/95 backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.12)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-3 bottom-[calc(4rem+env(safe-area-inset-bottom,0px))]">
        <div>
          <span className="text-lg font-extrabold text-primary">{product.price} MAD</span>
        </div>
        <Button onClick={handleAdd} className="flex-1 rounded-full gap-2" disabled={added}>
          {added ? <><Check className="h-4 w-4" /> ✓</> : <><ShoppingCart className="h-4 w-4" /> {t('addToCart')}</>}
        </Button>
      </div>
    </AppLayout>
  );
}
