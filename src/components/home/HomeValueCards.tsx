import { motion } from 'framer-motion';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function HomeValueCards() {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const cards = [
    {
      icon: ShieldCheck,
      title: t('homeValueAuthenticTitle'),
      desc: t('homeValueAuthenticDesc'),
      link: '/authenticity',
      cta: t('homeValueAuthenticCta'),
    },
    {
      icon: Truck,
      title: t('homeValueDeliveryTitle'),
      desc: t('homeValueDeliveryDesc'),
      link: '/shipping', // Assuming this route exist or will exist
      cta: t('shippingAccordionBody'), // Fallback label or custom
    },
    {
      icon: CreditCard,
      title: t('homeValuePaymentTitle'),
      desc: t('homeValuePaymentDesc'),
      link: '/payment', // Assuming this route exist or will exist
      cta: t('secureCheckout'),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-32 md:py-48 bg-black relative overflow-hidden">
      {/* Structural Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
           <div className="flex items-center justify-center gap-4">
             <div className="h-0.5 w-6 bg-electric" />
             <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric/60">
               {t('homeValueEyebrow')}
             </span>
             <div className="h-0.5 w-6 bg-electric" />
           </div>
           
           <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-white leading-none">
             {t('homeValueHeadline')}
           </h2>
        </div>

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

function ValueCardContent({ card, isRTL }: { card: any; isRTL: boolean }) {
  return (
    <div className="h-full bg-white/[0.02] border border-white/5 rounded-sm p-12 flex flex-col justify-between transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-2 group/card">
      <div className="space-y-8">
        <div className="h-16 w-16 flex items-center justify-center rounded-sm bg-electric/5 border border-electric/10 group-hover/card:bg-electric transition-colors group-hover/card:text-black text-electric">
          <card.icon className="h-8 w-8" strokeWidth={1} />
        </div>
        
        <div className="space-y-4">
           <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-white">
             {card.title}
           </h3>
           <p className="text-slate-500 font-normal leading-relaxed text-sm opacity-70 group-hover/card:opacity-100 transition-opacity">
             {card.desc}
           </p>
        </div>
      </div>
      
      <div className="pt-10 flex items-center gap-3 text-electric font-black uppercase tracking-[0.2em] text-[8px] transform translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
         <span>{card.cta || 'Savoir plus'}</span>
         <div className={isRTL ? "rotate-180" : ""}>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </div>
      </div>
    </div>
  );
}
