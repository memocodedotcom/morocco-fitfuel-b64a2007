import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="container flex min-h-[55vh] flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-display font-black tracking-tighter text-muted-foreground/40" aria-hidden>
          404
        </p>
        <h1 className="mt-2 text-title-lg font-bold tracking-tight text-foreground">{t('notFoundTitle')}</h1>
        <p className="mt-3 max-w-md text-base text-muted-foreground leading-relaxed">{t('notFoundBody')}</p>
        <Button className="mt-8 rounded-full px-8" asChild>
          <Link to="/">{t('notFoundCta')}</Link>
        </Button>
      </div>
    </AppLayout>
  );
};

export default NotFound;
