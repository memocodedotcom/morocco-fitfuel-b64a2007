import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function HeroSection() {
  const { t } = useLanguage();
  const reduceMotion = usePrefersReducedMotion();

  const content = (
    <>
      <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
        {t('heroPromoBadge')}
      </span>
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
        {t('heroTitle')}
        <br />
        <span className="text-primary">{t('heroEmphasis')}</span>
      </h1>
      <p className="text-background/70 text-base md:text-lg mb-6 max-w-md">{t('heroSubtitle')}</p>
      <Button asChild size="lg" className="gap-2 rounded-full text-sm font-semibold">
        <Link to="/products">
          {t('heroCta')}
          <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </Link>
      </Button>
    </>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative py-12 md:py-20">
        <div className="max-w-xl">
          {reduceMotion ? (
            <div>{content}</div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {content}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
