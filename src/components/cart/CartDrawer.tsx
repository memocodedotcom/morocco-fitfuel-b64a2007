import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Minus, Plus, Trash2, MessageCircle, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/i18n/LanguageContext';
import { getUpsellProducts } from '@/data/products';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappE164 } from '@/config/site';
import { ShoppingBag } from 'lucide-react';

const FREE_SHIPPING_THRESHOLD = 500;

export function CartDrawer() {
  const { isCartOpen, setCartOpen, getCartProducts, updateQuantity, removeItem, subtotal, itemCount, addItem } = useCart();
  const { locale, t } = useLanguage();
  const cartProducts = getCartProducts();
  const upsells = getUpsellProducts().slice(0, 3);
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 35;

  const generateWhatsAppMessage = () => {
    let msg = '🛒 *Commande NutriMaroc*\n\n';
    cartProducts.forEach(({ product, quantity }) => {
      msg += `• ${product.name.fr} x${quantity} — ${product.price * quantity} MAD\n`;
    });
    msg += `\n💰 *Total: ${subtotal + shippingCost} MAD*`;
    if (shippingCost === 0) msg += '\n🚚 Livraison gratuite!';
    return encodeURIComponent(msg);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="p-5 border-b bg-muted/20">
          <SheetTitle className="text-lg font-bold tracking-tight">
            {t('yourCart')} <span className="text-muted-foreground font-semibold">({itemCount})</span>
          </SheetTitle>
        </SheetHeader>

        {/* Free shipping bar */}
        {itemCount > 0 && (
          <div className="px-4 py-3 bg-secondary/50">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium">
                {amountToFreeShipping > 0
                  ? t('freeShippingBar', { amount: String(amountToFreeShipping) })
                  : t('freeShippingReached')
                }
              </span>
              <span className="text-primary font-bold">{Math.round(shippingProgress)}%</span>
            </div>
            <Progress value={shippingProgress} className="h-2" />
          </div>
        )}

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartProducts.length === 0 ? (
            <div className="flex flex-col items-center text-center py-14 px-4">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShoppingBag className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <p className="text-title font-semibold text-foreground mb-2">{t('cartEmpty')}</p>
              <p className="text-sm text-muted-foreground max-w-[260px] mb-6 leading-relaxed">
                {t('cartEmptyHint')}
              </p>
              <Button className="rounded-full px-8" asChild onClick={() => setCartOpen(false)}>
                <Link to="/products">{t('discoverBestSellers')}</Link>
              </Button>
            </div>
          ) : (
            <AnimatePresence>
              {cartProducts.map(({ productId, product, quantity }) => (
                <motion.div
                  key={productId}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-3 bg-card rounded-2xl p-3 border border-border/80 shadow-card"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name[locale]}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name[locale]}</p>
                    <p className="text-primary font-bold text-sm">{product.price} MAD</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(productId, quantity - 1)}
                        className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(productId, quantity + 1)}
                        className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(productId)}
                        className="ms-auto p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {/* Upsells */}
          {cartProducts.length > 0 && upsells.length > 0 && (
            <div className="pt-4 border-t">
              <p className="text-sm font-semibold mb-2">{t('youMightAlsoLike')}</p>
              <div className="space-y-2">
                {upsells.map((p) => (
                  <div key={p.id} className="flex items-center gap-2 bg-secondary/50 rounded-lg p-2">
                    <img src={p.images[0]} alt={p.name[locale]} className="w-10 h-10 rounded object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{p.name[locale]}</p>
                      <p className="text-xs text-primary font-bold">{p.price} MAD</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => addItem(p.id)}>
                      +
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartProducts.length > 0 && (
          <div className="border-t bg-muted/15 p-5 space-y-4 mt-auto">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('subtotal')}</span>
                <span className="font-medium">{subtotal} MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('shipping')}</span>
                <span className={`font-medium ${shippingCost === 0 ? 'text-primary' : ''}`}>
                  {shippingCost === 0 ? t('free') : `${shippingCost} MAD`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-1 border-t">
                <span>{t('total')}</span>
                <span>{subtotal + shippingCost} MAD</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappE164}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground rounded-xl py-3.5 font-semibold text-sm shadow-lift hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-4 w-4" />
              {t('orderWhatsApp')}
            </a>

            <Button
              variant="outline"
              className="w-full gap-2 rounded-xl h-11 border-border/80"
              asChild
              onClick={() => setCartOpen(false)}
            >
              <Link to="/checkout">
                <CreditCard className="h-4 w-4" />
                {t('secureCheckout')}
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
