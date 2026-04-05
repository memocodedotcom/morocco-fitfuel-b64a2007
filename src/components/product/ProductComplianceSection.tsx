import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { POLICY_ROUTES } from '@/config/policies';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  product: Product;
}

export function ProductComplianceSection({ product }: Props) {
  const { locale, t } = useLanguage();

  const hasMeta =
    Boolean(product.manufacturerName) ||
    Boolean(product.countryOfOrigin) ||
    Boolean(product.extraVerificationNote) ||
    Boolean(product.coaUrl) ||
    Boolean(product.certificateOnRequest);

  return (
    <div className="space-y-4 mb-5">
      {product.stimulantWarning && (
        <Alert className="border-amber-600/50 bg-amber-50 text-amber-950 dark:bg-amber-950/25 dark:text-amber-50 dark:border-amber-700">
          <AlertTitle className="text-sm">{t('pdpStimulantWarningTitle')}</AlertTitle>
          <AlertDescription className="text-xs leading-relaxed">{t('pdpStimulantWarningBody')}</AlertDescription>
        </Alert>
      )}

      <div className="rounded-lg border p-4 space-y-3">
        <h3 className="text-sm font-semibold">{t('pdpComplianceTitle')}</h3>

        {hasMeta ? (
          <>
            <dl className="grid gap-2 text-sm">
              {product.manufacturerName && (
                <>
                  <dt className="text-muted-foreground">{t('pdpManufacturerLabel')}</dt>
                  <dd className="font-medium">{product.manufacturerName}</dd>
                </>
              )}
              {product.countryOfOrigin && (
                <>
                  <dt className="text-muted-foreground">{t('pdpCountryLabel')}</dt>
                  <dd className="font-medium">{product.countryOfOrigin[locale]}</dd>
                </>
              )}
              {product.extraVerificationNote && (
                <>
                  <dt className="text-muted-foreground">{t('pdpExtraVerificationTitle')}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{product.extraVerificationNote[locale]}</dd>
                </>
              )}
            </dl>

            {product.coaUrl && (
              <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto" asChild>
                <a href={product.coaUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  {t('pdpViewCoaPdf')}
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </Button>
            )}

            {!product.coaUrl && product.certificateOnRequest && (
              <p className="text-xs text-muted-foreground leading-relaxed">{t('pdpCertificateOnRequest')}</p>
            )}

            {!product.coaUrl && !product.certificateOnRequest && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t('pdpProofDefault')}{' '}
                <Link
                  to={POLICY_ROUTES.authenticity}
                  className="text-primary font-medium underline-offset-2 hover:underline"
                >
                  {t('pdpProofDefaultLink')}
                </Link>
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('pdpProofDefault')}{' '}
            <Link
              to={POLICY_ROUTES.authenticity}
              className="text-primary font-medium underline-offset-2 hover:underline"
            >
              {t('pdpProofDefaultLink')}
            </Link>
          </p>
        )}
      </div>

      {product.allergens && (
        <div className="rounded-lg border border-border bg-card p-4">
          <h3 className="text-sm font-semibold mb-1">{t('pdpAllergensTitle')}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.allergens[locale]}</p>
          <p className="text-[10px] text-muted-foreground mt-2">{t('pdpAllergensFootnote')}</p>
        </div>
      )}
    </div>
  );
}
