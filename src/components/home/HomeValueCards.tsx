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
      accent: 'blue-500'
    },
    {
      icon: CreditCard,
      title: locale === 'fr' ? 'PAIEMENT SÉCURISÉ' : 'دفع آمن',
      desc: locale === 'fr' ? 'Payez à la livraison ou par carte avec un cryptage bancaire complet.' : 'ادفع عند الاستلام أو بالبطاقة مع تشفير بنكي كامل.',
      ctaText: locale === 'fr' ? 'Options de paiement' : 'خيارات الدفع',
      accent: 'purple-500'
    }
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-obsidian grain-overlay">
      {/* High-end background elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-electric/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
             <div className="h-px w-8 bg-electric/40" />
             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-electric">{locale === 'fr' ? 'L\'ÉLITE MAROCAINE' : 'النخبة المغربية'}</span>
             <div className="h-px w-8 bg-electric/40" />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-8">
             {locale === 'fr' ? 'VOTRE PERFORMANCE.' : 'أداءك.'} <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40">SANS LIMITES.</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
             <Target className="h-4 w-4 text-slate-500" />
             <div className="h-2 w-2 rounded-full bg-slate-800" />
             <Zap className="h-4 w-4 text-electric" />
             <div className="h-2 w-2 rounded-full bg-slate-800" />
             <Award className="h-4 w-4 text-slate-500" />
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
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
  
  return (
    <div
      className={cn(
        'h-full rounded-[2.5rem] border bg-white/[0.03] backdrop-blur-xl p-10 transition-all duration-700',
        'border-white/[0.08] hover:border-electric/40 hover:bg-white/[0.06] hover:translate-y-[-8px] relative overflow-hidden',
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className={cn(
          "flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/5 text-white mb-10 transition-all duration-700 group-hover:scale-110",
          card.accent === 'electric' ? "group-hover:bg-electric/20 group-hover:text-electric group-hover:shadow-[0_0_40px_rgba(212,255,0,0.2)]" : 
          card.accent === 'blue-500' ? "group-hover:bg-blue-500/20 group-hover:text-blue-400" :
          "group-hover:bg-purple-500/20 group-hover:text-purple-400"
        )}>
          <Icon className="h-10 w-10" strokeWidth={1} />
        </div>
        
        <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter leading-none group-hover:text-electric transition-colors duration-500">
          {card.title}
        </h3>
        <p className="text-slate-400 leading-relaxed font-medium mb-12 text-base md:text-[15px] italic">
          {card.desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-electric transition-all duration-500">
            {card.cta || card.ctaText}
            <ArrowRight className={cn('h-4 w-4 transition-transform group-hover:translate-x-2', arrowClass)} />
          </span>
          <div className="h-1 w-8 bg-white/10 rounded-full group-hover:w-12 group-hover:bg-electric/30 transition-all duration-700" />
        </div>
      </div>
    </div>
  );
}
