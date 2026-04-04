import { brands } from '@/data/products';
import { Shield, Truck, CreditCard } from 'lucide-react';

export function BrandMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="py-6 border-b bg-secondary/30 overflow-hidden">
      <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
        {items.map((brand, i) => (
          <span key={i} className="text-muted-foreground font-bold text-sm tracking-wider uppercase shrink-0">
            {brand.name}
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <Shield className="h-3.5 w-3.5 text-primary" /> 100% Authentique
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <Truck className="h-3.5 w-3.5 text-primary" /> Livraison 24h
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground text-xs shrink-0">
          <CreditCard className="h-3.5 w-3.5 text-primary" /> Paiement Sécurisé
        </span>
        {items.map((brand, i) => (
          <span key={`d-${i}`} className="text-muted-foreground font-bold text-sm tracking-wider uppercase shrink-0">
            {brand.name}
          </span>
        ))}
      </div>
    </section>
  );
}
