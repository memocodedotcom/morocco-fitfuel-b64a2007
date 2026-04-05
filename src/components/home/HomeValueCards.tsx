import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { POLICY_ROUTES } from '@/config/policies';
import { cn } from '@/lib/utils';

export function HomeValueCards() {
  const { t, dir } = useLanguage();
  const arrowClass = dir === 'rtl' ? 'rtl:rotate-180' : '';

  return (
    <section className="relative border-b bg-gradient-to-b from-muted/60 via-muted/30 to-background">
      <div className="container py-10 md:py-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{t('homeValueEyebrow')}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">{t('homeValueHeadline')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <Link to={POLICY_ROUTES.authenticity} className="group block h-full">
            <div
              className={cn(
                'h-full rounded-2xl border bg-card p-6 md:p-7 shadow-md transition-all duration-300',
                'ring-2 ring-primary/20 border-primary/30',
                'hover:shadow-xl hover:border-primary/40 hover:-translate-y-1',
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <ShieldCheck className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-2">{t('homeValueAuthenticTitle')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t('homeValueAuthenticDesc')}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t('homeValueAuthenticCta')}
                <ArrowRight className={cn('h-4 w-4 transition-transform group-hover:translate-x-0.5', arrowClass)} />
              </span>
            </div>
          </Link>

          <div className="h-full rounded-2xl border bg-card p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/25 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <Truck className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-bold mb-2">{t('homeValueDeliveryTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('homeValueDeliveryDesc')}</p>
          </div>

          <div className="h-full rounded-2xl border bg-card p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/25 hover:-translate-y-0.5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <CreditCard className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-bold mb-2">{t('homeValuePaymentTitle')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('homeValuePaymentDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
