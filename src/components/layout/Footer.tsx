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
    <footer className="relative bg-obsidian text-white overflow-hidden pt-32 pb-16 grain-organic border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-terracotta/[0.03] rounded-full blur-[140px] opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sage/[0.03] rounded-full blur-[120px] opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column - Larger Span */}
          <div className="lg:col-span-4 space-y-10">
            <LogoLink className="scale-125 origin-left" />
            <p className="text-lg text-slate-400 leading-relaxed font-medium italic max-w-sm">
              {locale === 'fr'
                ? "L’autorité suprême de la nutrition de performance au Maroc. Plus qu’une boutique, un standard d'élite."
                : "السلطة العليا للتغذية الرياضية في المغرب. أكثر من مجرد متجر، معيار للنخبة."}
            </p>
            <div className="flex gap-6">
              {showInstagram && (
                <Magnetic amount={0.2}>
                  <a href={socialUrls.instagram} className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Magnetic>
              )}
              {showFacebook && (
                <Magnetic amount={0.2}>
                  <a href={socialUrls.facebook} className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 shadow-2xl">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Magnetic>
              )}
              <Magnetic amount={0.2}>
                <a href={`https://wa.me/${whatsappE164}`} className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-electric hover:text-black transition-all duration-500 shadow-2xl">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Quick Links Group */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-terracotta">{t('categories')}</h4>
              <ul className="space-y-5">
                {categories.slice(0, 5).map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/products?category=${encodeURIComponent(cat.id)}`}
                      className="text-sm font-bold text-slate-400 hover:text-white transition-all flex items-center gap-3 group italic"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-electric transition-colors" />
                      {cat.name[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-sage">E-SERVICES</h4>
              <ul className="space-y-5">
                {[
                  { to: "/track-order", label: t('helpTrackTitle') },
                  { to: POLICY_ROUTES.authenticity, label: t('navAuthenticity') },
                  { to: "/faq", label: t('helpFaqTitle') },
                  { to: "/returns", label: t('helpReturnsTitle') },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.to} className="text-sm font-bold text-slate-400 hover:text-white transition-all flex items-center gap-3 group italic">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-electric transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legacy Seal Column */}
          <div className="lg:col-span-3">
            <div className="space-y-10 bg-white/[0.02] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-4xl backdrop-blur-3xl">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-1000">
                 <ShieldCheck className="h-32 w-32" />
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-terracotta/20 text-terracotta border border-terracotta/20">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase tracking-[0.2em] text-terracotta">ORIGINE CERTIFIÉE</p>
                     <p className="text-xs font-bold text-white italic">Import direct USA/Europe</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-sage/20 text-sage-light border border-sage/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-[9px] font-black uppercase tracking-[0.2em] text-sage">CONTRÔLE ÉLITE</p>
                     <p className="text-xs font-bold text-white italic">Sélection d'experts</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                   <a 
                     href="mailto:contact@nutrimaroc.ma" 
                     className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white hover:text-electric transition-colors group"
                   >
                     <Mail className="h-5 w-5" />
                     {locale === 'fr' ? 'SERVICE CONCIERGERIE' : 'خدمة العملاء'}
                     <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Strip */}
        <div className="border-t border-white/5 pt-16 mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <SupplementDisclaimer tone="onDark" className="text-left text-xs opacity-50 italic max-w-2xl" />
               <div className="flex items-center gap-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                    © 2026 NUTRIMAROC PERFORMANCE
                  </p>
                  <div className="h-[1px] w-20 bg-white/5" />
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10 italic">
                    CASABLANCA — MARRAKECH — AGADIR
                  </p>
               </div>
            </div>
            <div className="flex flex-col items-end gap-10">
               <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 origin-right">
                 <PaymentMethodLogos tone="on-dark" />
               </div>
               <nav className="flex gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
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
