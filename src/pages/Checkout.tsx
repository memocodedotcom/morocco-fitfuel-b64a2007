import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Shield } from 'lucide-react';

export default function CheckoutPage() {
  const { t, locale } = useLanguage();
  const { getCartProducts, subtotal, clearCart } = useCart();
  const cartProducts = getCartProducts();
  const shippingCost = subtotal >= 500 ? 0 : 35;
  const total = subtotal + shippingCost;

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Stripe integration will be enabled soon. For now, use WhatsApp checkout!');
  };

  return (
    <AppLayout>
      <div className="container py-6 max-w-2xl">
        <h1 className="text-2xl font-extrabold mb-6">{t('checkout')}</h1>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div>
              <Label htmlFor="name">{t('fullName')}</Label>
              <Input
                id="name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">{t('phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                placeholder="+212 6XX XXX XXX"
              />
            </div>
            <div>
              <Label htmlFor="address">{t('address')}</Label>
              <Input
                id="address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="city">{t('city')}</Label>
              <Input
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full gap-2 rounded-full h-12 text-sm font-semibold">
              <CreditCard className="h-4 w-4" />
              {t('placeOrder')} — {total} MAD
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5" />
              {t('securePayment')}
            </div>
          </form>

          {/* Summary */}
          <div className="md:col-span-2">
            <div className="bg-secondary/50 rounded-xl p-4 sticky top-20">
              <h3 className="font-semibold mb-3 text-sm">{t('yourCart')}</h3>
              <div className="space-y-2 mb-4">
                {cartProducts.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="truncate flex-1">{product.name[locale]} ×{quantity}</span>
                    <span className="font-medium ms-2">{product.price * quantity} MAD</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('subtotal')}</span>
                  <span>{subtotal} MAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('shipping')}</span>
                  <span className={shippingCost === 0 ? 'text-primary font-medium' : ''}>
                    {shippingCost === 0 ? t('free') : `${shippingCost} MAD`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-base pt-1 border-t">
                  <span>{t('total')}</span>
                  <span>{total} MAD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
