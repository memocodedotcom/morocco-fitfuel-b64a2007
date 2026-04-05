import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Shield, Truck, CreditCard, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';
import { categories } from '@/data/products';
import { socialUrls, whatsappE164 } from '@/config/site';
import { POLICY_ROUTES } from '@/config/policies';
import { PaymentMethodLogos } from '@/components/payment/PaymentMethodLogos';
import { SupplementDisclaimer } from '@/components/legal/SupplementDisclaimer';

export function Footer() {
  const { locale, t } = useLanguage();
  const showInstagram = Boolean(socialUrls.instagram);
  const showFacebook = Boolean(socialUrls.facebook);

  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/10">
        <div className="container py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium">{t('authenticProducts')}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium">{t('fastDelivery')}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium">{t('securePayment')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-2">NutriMaroc</h3>
            <p className="text-xs text-background/60 leading-relaxed">
              {locale === 'fr'
                ? 'Votre boutique de suppléments premium au Maroc. Produits 100% authentiques, importés directement des fabricants.'
                : 'متجرك للمكملات الغذائية الفاخرة في المغرب. منتجات 100% أصلية، مستوردة مباشرة من الشركات المصنعة.'}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">{t('categories')}</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.id)}`}
                    className="text-xs text-background/60 hover:text-primary transition-colors"
                  >
                    {cat.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">
              {locale === 'fr' ? 'Aide' : 'المساعدة'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/track-order"
                  className="text-xs text-background/60 hover:text-primary transition-colors"
                >
                  {t('helpTrackTitle')}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-xs text-background/60 hover:text-primary transition-colors">
                  {t('helpReturnsTitle')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-xs text-background/60 hover:text-primary transition-colors">
                  {t('helpFaqTitle')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">
              {locale === 'fr' ? 'Contact' : 'تواصل معنا'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${whatsappE164}`}
                  className="flex items-center gap-1.5 text-xs text-background/60 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nutrimaroc.ma"
                  className="flex items-center gap-1.5 text-xs text-background/60 hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  contact@nutrimaroc.ma
                </a>
              </li>
            </ul>
            {(showInstagram || showFacebook) && (
              <div className="flex gap-3 mt-3">
                {showInstagram && (
                  <a
                    href={socialUrls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/40 hover:text-primary transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                )}
                {showFacebook && (
                  <a
                    href={socialUrls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/40 hover:text-primary transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-4 space-y-4">
          <SupplementDisclaimer tone="onDark" className="max-w-3xl mx-auto text-center sm:text-start sm:mx-0" />
          <nav
            className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-[11px]"
            aria-label="Legal"
          >
            <Link to={POLICY_ROUTES.authenticity} className="text-background/60 hover:text-primary transition-colors">
              {t('navAuthenticity')}
            </Link>
            <Link to={POLICY_ROUTES.privacy} className="text-background/60 hover:text-primary transition-colors">
              {t('navPrivacy')}
            </Link>
            <Link to={POLICY_ROUTES.returns} className="text-background/60 hover:text-primary transition-colors">
              {t('helpReturnsTitle')}
            </Link>
          </nav>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-background/10">
            <p className="text-[10px] text-background/40 text-center sm:text-start">
              © 2026 NutriMaroc. {locale === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}
            </p>
            <PaymentMethodLogos tone="on-dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}
