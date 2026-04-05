import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

/** Simplified card-mark SVGs for trust strip; not official brand assets. */
export function PaymentMethodLogos({
  className,
  tone = 'on-dark',
}: {
  className?: string;
  /** `on-dark`: footer on `bg-foreground`. `on-light`: checkout slim footer. */
  tone?: 'on-dark' | 'on-light';
}) {
  const { t } = useLanguage();
  const chip =
    tone === 'on-dark' ? 'bg-background/10 text-background' : 'bg-muted text-foreground';

  return (
    <div
      className={cn('flex flex-wrap items-center gap-2', tone === 'on-light' && 'text-foreground', className)}
      role="list"
      aria-label={t('securePayment')}
    >
      <span role="listitem" className={cn('inline-flex rounded px-2 py-1', chip)} aria-label={t('paymentLogoVisa')}>
        <svg width="36" height="12" viewBox="0 0 48 16" className="fill-current" aria-hidden>
          <path d="M18 3h6c2 0 3.5 1.2 3.5 3.2 0 1.6-.9 2.7-2.2 3.1L28 13h-3l-1.8-3.2h-1.4V13H18V3zm5.2 4.8c.6 0 1-.4 1-.9 0-.6-.4-.9-1.1-.9h-1.6v1.8h1.7zM32 3h2.8l3.4 10H35l-.6-1.8h-3.4l-.6 1.8h-2.9L32 3zm.3 6.2h2.2L33.4 6l-.9 3.2zM8 3.2L5.2 13H2L4.8 3.2C5 2.5 5.6 2 6.4 2h3.6c.8 0 1.4.5 1.6 1.2z" />
        </svg>
      </span>
      <span role="listitem" className={cn('inline-flex rounded px-2 py-1', chip)} aria-label={t('paymentLogoMastercard')}>
        <svg width="28" height="16" viewBox="0 0 32 20" className="fill-current" aria-hidden>
          <circle cx="12" cy="10" r="7" opacity={0.9} />
          <circle cx="20" cy="10" r="7" opacity={0.55} />
        </svg>
      </span>
      <span
        role="listitem"
        className={cn('text-[10px] font-semibold tracking-wide px-2 py-1 rounded', chip)}
        aria-label={t('paymentLogoCmi')}
      >
        CMI
      </span>
    </div>
  );
}
