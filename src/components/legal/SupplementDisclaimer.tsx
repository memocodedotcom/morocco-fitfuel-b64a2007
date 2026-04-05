import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function SupplementDisclaimer({
  className,
  tone = 'default',
}: {
  className?: string;
  tone?: 'default' | 'muted' | 'onDark';
}) {
  const { t } = useLanguage();

  return (
    <p
      className={cn(
        'text-[10px] sm:text-xs leading-relaxed',
        tone === 'muted' && 'text-muted-foreground',
        tone === 'default' && 'text-foreground/80',
        tone === 'onDark' && 'text-background/75',
        className,
      )}
    >
      {t('supplementDisclaimerShort')}
    </p>
  );
}
