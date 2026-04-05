import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, MessageCircle, Mail, Instagram, Facebook, Globe, Sparkles } from 'lucide-react';
import { categories } from '@/data/products';
import { socialUrls, whatsappE164 } from '@/config/site';
import { POLICY_ROUTES } from '@/config/policies';
import { PaymentMethodLogos } from '@/components/payment/PaymentMethodLogos';
import { SupplementDisclaimer } from '@/components/legal/SupplementDisclaimer';
import { LogoLink } from './LogoLink';
import { cn } from '@/lib/utils';

export function Footer() {
  const { locale, t, dir } = useLanguage();
  const showInstagram = Boolean(socialUrls.instagram);
  const showFacebook = Boolean(socialUrls.facebook);

  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <LogoLink className="scale-110 origin-left" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">
              {locale === 'fr'
                ? 'L’autorité suprême du fitness au Maroc. Nous ne vendons pas seulement des compléments, nous fournissons la performance.'
                : 'السلطة العليا للياقة البدنية في المغرب. نحن لا نبيع المكملات الغذائية فحسب، بل نوفر الأداء.'}
            </p>
            <div className="flex gap-4">
              {showInstagram && (
                <a href={socialUrls.instagram} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {showFacebook && (
                <a href={socialUrls.facebook} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              <a href={`https://wa.me/${whatsappE164}`} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">{t('categories')}</h4>
            <ul className="space-y-4">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.id)}`}
                    className="text-sm font-bold text-muted-foreground hover:text-white transition-all flex items-center gap-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {cat.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">EXPÉRIENCE</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/track-order" className="text-sm font-bold text-muted-foreground hover:text-white transition-all flex items-center gap-2 group">
                  <div className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {t('helpTrackTitle')}
                </Link>
              </li>
              <li>
                <Link to={POLICY_ROUTES.authenticity} className="text-sm font-bold text-muted-foreground hover:text-white transition-all flex items-center gap-2 group">
                  <div className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {t('navAuthenticity')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm font-bold text-muted-foreground hover:text-white transition-all flex items-center gap-2 group">
                  <div className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {t('helpFaqTitle')}
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm font-bold text-muted-foreground hover:text-white transition-all flex items-center gap-2 group">
                  <div className="h-1 w-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {t('helpReturnsTitle')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Seal */}
          <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <ShieldCheck className="h-20 w-20" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary">Import Officiel</p>
                   <p className="text-xs font-bold opacity-60">Logistique Cold-Chain</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-primary">Qualité Labo</p>
                   <p className="text-xs font-bold opacity-60">Testé & Approuvé</p>
                </div>
              </div>

              <div className="pt-4">
                 <a 
                   href="mailto:contact@nutrimaroc.ma" 
                   className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors"
                 >
                   <Mail className="h-4 w-4" />
                   {locale === 'fr' ? 'NOUS ÉCRIRE' : 'راسلنا'}
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="border-t border-white/5 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
               <SupplementDisclaimer tone="onDark" className="text-left" />
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-20">
                 © 2026 NUTRIMAROC PERFORMANCE RETAIL. ALL RIGHTS RESERVED.
               </p>
            </div>
            <div className="flex flex-col items-end gap-6">
               <div className="flex items-center gap-6 opacity-60 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-500">
                 <PaymentMethodLogos tone="on-dark" />
               </div>
               <nav className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                  <Link to={POLICY_ROUTES.privacy} className="hover:text-primary transition-colors">{t('navPrivacy')}</Link>
                  <Link to={POLICY_ROUTES.terms} className="hover:text-primary transition-colors">{locale === 'fr' ? 'CGV' : 'الشروط'}</Link>
               </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
