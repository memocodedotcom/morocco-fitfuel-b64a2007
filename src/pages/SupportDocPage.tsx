import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { useLanguage } from '@/i18n/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function SupportDocPage({
  titleKey,
  bodyKey,
}: {
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
}) {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <div className="container py-10 md:py-14 max-w-prose mx-auto">
        <Button variant="ghost" size="sm" className="mb-6 -ms-2 gap-1" asChild>
          <Link to="/products">
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            {t('products')}
          </Link>
        </Button>
        <article className="prose-policy">
          <h1 className="!mt-0 !mb-6 text-title-lg md:text-3xl font-extrabold text-foreground not-prose">
            {t(titleKey)}
          </h1>
          <p className="whitespace-pre-line text-base">{t(bodyKey)}</p>
        </article>
      </div>
    </AppLayout>
  );
}
