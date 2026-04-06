import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, Mail, Instagram, Facebook, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/products';
import { socialUrls, whatsappE164 } from '@/config/site';
import { POLICY_ROUTES } from '@/config/policies';
import { PaymentMethodLogos } from '@/components/payment/PaymentMethodLogos';
import { SupplementDisclaimer } from '@/components/legal/SupplementDisclaimer';
import { LogoLink } from './LogoLink';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/ui/magnetic';

export function Footer() {
  const { locale, t } = useLanguage();
  const showInstagram = Boolean(socialUrls.instagram);
  const showFacebook = Boolean(socialUrls.facebook);

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-32 pb-16 border-t border-white/5">
      {/* Precision Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-12">
            <LogoLink className="scale-110 origin-left" />
            <p className="text-base text-slate-500 leading-relaxed font-normal max-w-sm uppercase tracking-tight">
              {locale === 'fr'
                ? "L’autorité suprême de la nutrition de performance au Maroc. Un standard d'élite pour les athlètes de haut niveau."
                : "السلطة العليا للتغذية الرياضية في المغرب. معيار النخبة للرياضيين رفيعي المستوى."}
            </p>
            <div className="flex gap-4">
              {showInstagram && (
                <a href={socialUrls.instagram} className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/10 hover:bg-white hover:text-black transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {showFacebook && (
                <a href={socialUrls.facebook} className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/10 hover:bg-white hover:text-black transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              <a href={`https://wa.me/${whatsappE164}`} className="h-12 w-12 flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/10 hover:bg-electric hover:text-black transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-electric" />
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-electric">{t('categories')}</h4>
              </div>
              <ul className="space-y-6">
                {categories.slice(0, 5).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/products?category=${encodeURIComponent(cat.id)}`}
                      className="text-[10px] font-extrabold text-slate-500 hover:text-white transition-colors flex items-center gap-4 group uppercase tracking-widest"
                    >
                      <div className="h-px w-2 bg-white/10 group-hover:bg-electric group-hover:w-4 transition-all" />
                      {cat.name[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-electric" />
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white">E-SERVICES</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { to: "/track-order", label: t('helpTrackTitle') },
                  { to: POLICY_ROUTES.authenticity, label: t('navAuthenticity') },
                  { to: "/faq", label: t('helpFaqTitle') },
                  { to: "/returns", label: t('helpReturnsTitle') },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.to} className="text-[10px] font-extrabold text-slate-500 hover:text-white transition-colors flex items-center gap-4 group uppercase tracking-widest">
                      <div className="h-px w-2 bg-white/10 group-hover:bg-electric group-hover:w-4 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legacy Seal Column */}
          <div className="lg:col-span-3">
            <div className="space-y-10 bg-white/[0.02] p-10 rounded-sm border border-white/[0.05] relative overflow-hidden group">
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-white/5 text-white/40 group-hover:bg-electric group-hover:text-black transition-colors">
                    <Globe className="h-5 w-5" strokeWidth={1} />
                  </div>
                  <div>
                     <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">ORIGINE CERTIFIÉE</p>
                     <p className="text-[10px] font-extrabold text-white uppercase tracking-tight">Direct USA/Europe</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-white/5 text-white/40 group-hover:bg-electric group-hover:text-black transition-colors">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1} />
                  </div>
                  <div>
                     <p className="text-[9px] font-extrabold uppercase tracking-widest text-electric mb-1">LABORATOIRE PRO</p>
                     <p className="text-[10px] font-extrabold text-white uppercase tracking-tight">Contrôle Qualité NM</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                   <a 
                     href="mailto:contact@nutrimaroc.ma" 
                     className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-widest text-white hover:text-electric transition-colors group"
                   >
                     <Mail className="h-4 w-4" />
                     {locale === 'fr' ? 'SERVICE CONCIERGERIE' : 'خدمة العملاء'}
                     <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Strip */}
        <div className="border-t border-white/[0.05] pt-16 mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-8">
               <div className="flex flex-col gap-6">
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-700">
                    © 2026 NUTRIMAROC PERFORMANCE. TOUS DROITS RÉSERVÉS.
                  </p>
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-800">
                    CASABLANCA — MARRAKECH — AGADIR — TANGER
                  </p>
               </div>
            </div>
            <div className="flex flex-col items-end gap-12">
               <div className="flex items-center gap-8 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 h-6">
                 <PaymentMethodLogos tone="on-dark" />
               </div>
               <nav className="flex gap-10 text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
                  <Link to={POLICY_ROUTES.privacy} className="hover:text-white transition-colors">{t('navPrivacy')}</Link>
                  <Link to={POLICY_ROUTES.terms} className="hover:text-white transition-colors">{locale === 'fr' ? 'TERMES ET CONDITIONS' : 'الشروط والأحكام'}</Link>
                  <Link to={POLICY_ROUTES.authenticity} className="hover:text-white transition-colors">{locale === 'fr' ? 'CHARTE QUALITÉ' : 'ميثاق الجودة'}</Link>
               </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
