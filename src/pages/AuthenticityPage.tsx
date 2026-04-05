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
      <div className="container py-10 md:py-14 max-w-prose mx-auto">
        <Button variant="ghost" size="sm" className="mb-6 -ms-2 gap-1" asChild>
          <Link to="/">
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t('home')}
          </Link>
        </Button>
        <article className="prose-policy">
          <h1 className="!mt-0 !mb-10 text-title-lg md:text-3xl font-extrabold text-foreground not-prose">
            {t('policyAuthenticityTitle')}
          </h1>
          {SECTIONS.map((s) => (
            <section key={s.titleKey} className="mb-10 last:mb-0">
              <h2 className="text-title font-semibold text-foreground mb-3 not-prose">{t(s.titleKey)}</h2>
              <p className="whitespace-pre-line text-base leading-relaxed">{t(s.bodyKey)}</p>
            </section>
          ))}
        </article>
      </div>
    </AppLayout>
  );
}
