import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ArrowRight } from 'lucide-react';
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function HomeValueCards() {
  const { t, dir } = useLanguage();
  const arrowClass = dir === 'rtl' ? 'rtl:rotate-180' : '';

  return (
    <section className="relative border-b overflow-hidden py-16 md:py-24 bg-background">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">{t('homeValueEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">{t('homeValueHeadline')}</h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 md:gap-7"
        >
          <motion.div variants={item}>
            <Link to={POLICY_ROUTES.authenticity} className="group block h-full">
              <div
                className={cn(
                  'h-full rounded-2xl border bg-card/50 backdrop-blur-sm p-7 md:p-8 shadow-sm transition-all duration-500',
                  'border-white/[0.05] ring-1 ring-white/5',
                  'hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-2',
                )}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                  <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('homeValueAuthenticTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t('homeValueAuthenticDesc')}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  {t('homeValueAuthenticCta')}
                  <ArrowRight className={cn('h-4 w-4 transition-transform', arrowClass)} />
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <div className="h-full rounded-2xl border border-white/[0.05] bg-card/50 backdrop-blur-sm p-7 md:p-8 shadow-sm ring-1 ring-white/5 transition-all duration-500 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-2 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                <Truck className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('homeValueDeliveryTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('homeValueDeliveryDesc')}</p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="h-full rounded-2xl border border-white/[0.05] bg-card/50 backdrop-blur-sm p-7 md:p-8 shadow-sm ring-1 ring-white/5 transition-all duration-500 hover:shadow-card-hover hover:border-primary/30 hover:-translate-y-2 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('homeValuePaymentTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('homeValuePaymentDesc')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
