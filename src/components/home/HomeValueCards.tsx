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
    <section className="relative overflow-hidden py-24 bg-[#010410]">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 opacity-80">{t('homeValueEyebrow')}</p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.95] mb-6">
            {t('homeValueHeadline')}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <Link to={POLICY_ROUTES.authenticity} className="group block h-full">
              <div
                className={cn(
                  'h-full rounded-[2rem] border bg-white/[0.02] backdrop-blur-md p-10 transition-all duration-700',
                  'border-white/[0.05] hover:border-primary/40 hover:bg-white/[0.04]',
                )}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic tracking-tight italic-not-really leading-none">{t('homeValueAuthenticTitle')}</h3>
                <p className="text-white/60 leading-relaxed font-medium mb-8 text-sm md:text-base">{t('homeValueAuthenticDesc')}</p>
                <span className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-5 transition-all">
                  {t('homeValueAuthenticCta')}
                  <ArrowRight className={cn('h-3 w-3 transition-transform', arrowClass)} />
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <div className="h-full rounded-[2rem] border border-white/[0.05] bg-white/[0.02] backdrop-blur-md p-10 transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.04] group">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <Truck className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic tracking-tight italic-not-really leading-none">{t('homeValueDeliveryTitle')}</h3>
              <p className="text-white/60 leading-relaxed font-medium text-sm md:text-base">{t('homeValueDeliveryDesc')}</p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div className="h-full rounded-[2rem] border border-white/[0.05] bg-white/[0.02] backdrop-blur-md p-10 transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.04] group">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <CreditCard className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase italic tracking-tight italic-not-really leading-none">{t('homeValuePaymentTitle')}</h3>
              <p className="text-white/60 leading-relaxed font-medium text-sm md:text-base">{t('homeValuePaymentDesc')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
