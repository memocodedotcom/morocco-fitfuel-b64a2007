import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { LogoLink } from './LogoLink';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { PaymentMethodLogos } from '@/components/payment/PaymentMethodLogos';
import { PageTransition } from './PageTransition';

export function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const { t, locale } = useLanguage();
  const { setCartOpen } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md">
        <div className="container flex items-center justify-between h-14 gap-3">
          <LogoLink className="text-lg min-w-0" />
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="sm" className="max-sm:px-2 max-sm:text-xs" asChild>
              <Link to="/products">{t('continueShopping')}</Link>
            </Button>
            <Button variant="outline" size="sm" onClick={() => setCartOpen(true)}>
              {t('viewCartDrawer')}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="border-t mt-auto py-4 bg-muted/20">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <PaymentMethodLogos tone="on-light" />
          <p className="text-[10px] text-muted-foreground text-center sm:text-end">
            © 2026 NutriMaroc. {locale === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}
          </p>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
