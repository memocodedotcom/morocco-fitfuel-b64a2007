import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ArrowRight, Zap, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { POLICY_ROUTES } from '@/config/policies';
import { cn } from '@/lib/utils';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function HomeValueCards() {
  const { t, dir, locale } = useLanguage();
  const isRTL = dir === 'rtl';
  const arrowClass = isRTL ? 'rotate-180' : '';

  const cards = [
    {
      icon: ShieldCheck,
      title: locale === 'fr' ? 'AUTHENTICITÉ CERTIFIÉE' : 'أصالة معتمدة',
      desc: locale === 'fr' ? 'Chaque produit est directement importé pour garantir une pureté totale.' : 'كل منتج يتم استيراده مباشرة لضمان النقاء التام.',
      link: POLICY_ROUTES.authenticity,
      cta: locale === 'fr' ? 'Vérifier l\'authenticité' : 'تحقق من الأصالة',
      accent: 'electric'
    },
    {
      icon: Truck,
      title: locale === 'fr' ? 'LIVRAISON EXPRESS 24H' : 'توصيل سريع 24 ساعة',
      desc: locale === 'fr' ? 'Partout au Maroc, recevez vos compléments en un temps record.' : 'في جميع أنحاء المغرب، استقبل مكملاتك في وقت قياسي.',
      ctaText: locale === 'fr' ? 'Suivi en direct' : 'تتبع مباشر',
      accent: 'terracotta'
    },
    {
      icon: CreditCard,
      title: locale === 'fr' ? 'PAIEMENT SÉCURISÉ' : 'دفع آمن',
      desc: locale === 'fr' ? 'Payez à la livraison ou par carte avec un cryptage bancaire complet.' : 'ادفع عند الاستلام أو بالبطاقة مع تشفير بنكي كامل.',
      ctaText: locale === 'fr' ? 'Options de paiement' : 'خيارات الدفع',
      accent: 'sage'
    }
  ];

  return (
    <section className="relative overflow-hidden py-40 bg-obsidian grain-organic">
      {/* High-end background elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sage/10 to-transparent" />
      
      <div className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] bg-terracotta/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sage/[0.03] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-24 space-y-8"
        >
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-terracotta/40" />
             <span className="text-[10px] font-black uppercase tracking-[0.8em] text-terracotta/80">{locale === 'fr' ? 'L\'ÉLITE MAROCAINE' : 'النخبة المغربية'}</span>
             <div className="h-[1px] w-12 bg-terracotta/40" />
          </div>
          <h2 className="text-huge font-display font-black text-white italic uppercase tracking-tighter leading-[0.75] mb-12">
             {locale === 'fr' ? 'VOTRE PERFORMANCE.' : 'أداءك.'} <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40 drop-shadow-[0_0_20px_rgba(212,255,0,0.2)]">SANS LIMITES.</span>
          </h2>
          <div className="flex items-center justify-center gap-6">
             <Target className="h-5 w-5 text-terracotta/40" />
             <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
             <Zap className="h-6 w-6 text-electric animate-pulse" />
             <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
             <Award className="h-5 w-5 text-sage/40" />
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {cards.map((card, idx) => (
            <motion.div variants={item} key={idx} className="group h-full">
              {card.link ? (
                <Link to={card.link} className="block h-full">
                  <ValueCardContent card={card} isRTL={isRTL} />
                </Link>
              ) : (
                <div className="h-full">
                  <ValueCardContent card={card} isRTL={isRTL} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ValueCardContent({ card, isRTL }: { card: any, isRTL: boolean }) {
  const Icon = card.icon;
  const arrowClass = isRTL ? 'rotate-180' : '';
  const accentColor = card.accent === 'electric' ? 'text-electric' : card.accent === 'terracotta' ? 'text-terracotta' : 'text-sage-light';
  const accentBg = card.accent === 'electric' ? 'electric' : card.accent === 'terracotta' ? 'terracotta' : 'sage';
  
  return (
    <div
      className={cn(
        'h-full rounded-[3.5rem] border backdrop-blur-3xl p-12 transition-all duration-1000 relative overflow-hidden',
        'bg-white/[0.02] border-white/[0.05] hover:border-white/[0.15] hover:translate-y-[-12px]',
        'shadow-[inset_0_0_80px_rgba(255,255,255,0.01)]'
      )}
    >
      {/* Physical Lighting Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000",
        card.accent === 'electric' ? "to-electric/10" : card.accent === 'terracotta' ? "to-terracotta/10" : "to-sage/10"
      )} />
      
      {/* Interior Glow for 'Object' feel */}
      <div className="absolute inset-0 border border-white/5 rounded-[3.5rem] pointer-events-none" />
      <div className="absolute inset-[1px] border border-black/20 rounded-[3.4rem] pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className={cn(
          "flex h-24 w-24 items-center justify-center rounded-[2.25rem] bg-white/[0.03] text-white/40 mb-12 transition-all duration-1000 group-hover:scale-110 border border-white/5",
          card.accent === 'electric' ? "group-hover:bg-electric group-hover:text-black group-hover:shadow-[0_0_50px_rgba(212,255,0,0.3)]" : 
          card.accent === 'terracotta' ? "group-hover:bg-terracotta group-hover:text-white group-hover:shadow-[0_0_50px_rgba(139,69,19,0.3)]" :
          "group-hover:bg-sage group-hover:text-white group-hover:shadow-[0_0_50px_rgba(58,77,57,0.3)]"
        )}>
          <Icon className="h-10 w-10" strokeWidth={0.75} />
        </div>
        
        <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic tracking-tighter leading-[0.9] group-hover:text-white transition-colors duration-500">
          {card.title}
        </h3>
        <p className="text-slate-400 leading-relaxed font-medium mb-12 text-lg italic opacity-80 group-hover:opacity-100 transition-opacity">
          {card.desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.03]">
          <span className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-all duration-500">
            {card.cta || card.ctaText}
            <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
               <ArrowRight className={cn('h-4 w-4 transform transition-transform group-hover:translate-x-1', arrowClass)} />
            </div>
          </span>
          <div className={cn(
            "h-[2px] w-12 bg-white/5 rounded-full transition-all duration-1000 group-hover:w-20",
            card.accent === 'electric' ? "group-hover:bg-electric" : card.accent === 'terracotta' ? "group-hover:bg-terracotta" : "group-hover:bg-sage"
          )} />
        </div>
      </div>
    </div>
  );
}
