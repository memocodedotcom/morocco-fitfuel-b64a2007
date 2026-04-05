import { Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <div className="container py-10 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-extrabold mb-3">{t('profileTitle')}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">{t('profileSubtitle')}</p>
        <Button asChild className="rounded-full">
          <Link to="/products">{t('profileCtaBrowse')}</Link>
        </Button>
      </div>
    </AppLayout>
  );
}
