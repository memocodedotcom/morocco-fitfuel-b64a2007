import { useLanguage } from '@/i18n/LanguageContext';
import { Truck, Shield, CreditCard } from 'lucide-react';

export function PromoBar() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-foreground text-background text-xs py-2 text-center font-medium tracking-wide">
      <div className="container flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1">
          <Truck className="h-3 w-3" />
          Livraison gratuite à partir de 500 MAD
        </span>
        <span className="hidden sm:inline text-muted-foreground/50">|</span>
        <span className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          100% Authentique
        </span>
        <span className="hidden sm:inline text-muted-foreground/50">|</span>
        <span className="hidden sm:flex items-center gap-1">
          <CreditCard className="h-3 w-3" />
          Paiement Sécurisé
        </span>
      </div>
    </div>
  );
}
