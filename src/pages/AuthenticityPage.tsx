import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { useLanguage } from '@/i18n/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const SECTIONS: { titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { titleKey: 'policyAuthIntroTitle', bodyKey: 'policyAuthIntroBody' },
  { titleKey: 'policyAuthSourcingTitle', bodyKey: 'policyAuthSourcingBody' },
  { titleKey: 'policyAuthVerifyTitle', bodyKey: 'policyAuthVerifyBody' },
  { titleKey: 'policyAuthWhatWeDontTitle', bodyKey: 'policyAuthWhatWeDontBody' },
  { titleKey: 'policyAuthSupportTitle', bodyKey: 'policyAuthSupportBody' },
];

export default function AuthenticityPage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <div className="container py-8 max-w-prose">
        <Button variant="ghost" size="sm" className="mb-4 -ms-2 gap-1" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t('home')}
          </Link>
        </Button>
        <h1 className="text-2xl font-extrabold mb-8">{t('policyAuthenticityTitle')}</h1>
        {SECTIONS.map((s) => (
          <section key={s.titleKey} className="mb-8">
            <h2 className="text-lg font-semibold mb-2">{t(s.titleKey)}</h2>
            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{t(s.bodyKey)}</p>
          </section>
        ))}
      </div>
    </AppLayout>
  );
}
