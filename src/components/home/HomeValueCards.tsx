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
    <section className="relative overflow-hidden py-32 bg-obsidian">
      {/* Structural Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      
      <div className="container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-24 space-y-8"
        >
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-8 bg-electric" />
             <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">L'ENGAGEMENT NUTRIMAROC</span>
          </div>
          <h2 className="text-5xl md:text-huge font-display font-extrabold text-white uppercase tracking-tight leading-[0.9] mb-12">
             LA PERFORMANCE.<br />
             <span className="text-white/30">CERTIFIÉE.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
        'h-full rounded-sm border p-10 transition-all duration-300 relative overflow-hidden',
        'bg-white/[0.02] border-white/[0.05] hover:border-white/10'
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-white/[0.04] text-white/40 mb-10 border border-white/5 transition-colors group-hover:bg-electric group-hover:text-black">
          <Icon className="h-8 w-8" strokeWidth={1} />
        </div>
        
        <h3 className="text-xl font-display font-extrabold text-white mb-6 uppercase tracking-tight leading-none group-hover:text-electric transition-colors">
          {card.title}
        </h3>
        <p className="text-slate-400 leading-relaxed font-normal mb-10 text-sm opacity-60">
          {card.desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/[0.05]">
          <span className="inline-flex items-center gap-4 text-[9px] font-extrabold uppercase tracking-widest text-white/40 group-hover:text-white transition-all duration-300">
            {card.cta || card.ctaText}
            <ArrowRight className={cn('h-4 w-4 transform transition-transform group-hover:translate-x-1', arrowClass)} />
          </span>
          <div className="h-px w-8 bg-white/10 group-hover:bg-electric transition-all group-hover:w-12" />
        </div>
      </div>
    </div>
  );
}
