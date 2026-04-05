import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Shield, Truck, CreditCard, MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      {/* Trust strip */}
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

      {/* Links */}
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-2">NutriMaroc</h3>
            <p className="text-xs text-background/60 leading-relaxed">
              {locale === 'fr'
                ? 'Votre boutique de suppléments premium au Maroc. Produits 100% authentiques, importés directement des fabricants.'
                : 'متجرك للمكملات الغذائية الفاخرة في المغرب. منتجات 100% أصلية، مستوردة مباشرة من الشركات المصنعة.'
              }
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold mb-3">{t('categories')}</h4>
            <ul className="space-y-2">
              {['protein', 'creatine', 'vitamins', 'preWorkout', 'weightLoss'].map(cat => (
                <li key={cat}>
                  <Link to="/products" className="text-xs text-background/60 hover:text-primary transition-colors">
                    {t(cat as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold mb-3">
              {locale === 'fr' ? 'Aide' : 'المساعدة'}
            </h4>
            <ul className="space-y-2">
              <li><span className="text-xs text-background/60">{locale === 'fr' ? 'Suivi de commande' : 'تتبع الطلب'}</span></li>
              <li><span className="text-xs text-background/60">{locale === 'fr' ? 'Politique de retour' : 'سياسة الإرجاع'}</span></li>
              <li><span className="text-xs text-background/60">{locale === 'fr' ? 'FAQ' : 'الأسئلة الشائعة'}</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">
              {locale === 'fr' ? 'Contact' : 'تواصل معنا'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/212600000000" className="flex items-center gap-1.5 text-xs text-background/60 hover:text-primary transition-colors">
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contact@nutrimaroc.ma" className="flex items-center gap-1.5 text-xs text-background/60 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                  contact@nutrimaroc.ma
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-background/40 hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-background/40 hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container py-4 flex items-center justify-between">
          <p className="text-[10px] text-background/40">
            © 2026 NutriMaroc. {locale === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}
          </p>
          <div className="flex gap-2">
            {['Visa', 'MC', 'CMI'].map(m => (
              <span key={m} className="text-[10px] bg-background/10 px-2 py-0.5 rounded">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
