import { getReviewsByProduct, type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star, CheckCircle } from 'lucide-react';

interface Props {
  product: Product;
}

export function ReviewSection({ product }: Props) {
  const { locale, t } = useLanguage();
  const reviews = getReviewsByProduct(product.id);

  if (reviews.length === 0) return null;

  // Rating breakdown
  const breakdown = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
    pct: Math.round((reviews.filter(r => r.rating === star).length / reviews.length) * 100),
  }));

  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="text-lg font-bold mb-4">{t('reviews')} ({product.reviewCount})</h3>

      <div className="grid md:grid-cols-[200px_1fr] gap-6 mb-6">
        {/* Summary */}
        <div className="text-center md:text-start">
          <div className="text-4xl font-extrabold text-primary mb-1">{product.rating}</div>
          <div className="flex items-center justify-center md:justify-start gap-0.5 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}`} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{product.reviewCount} {t('reviews')}</p>
        </div>

        {/* Breakdown bars */}
        <div className="space-y-1.5">
          {breakdown.map(b => (
            <div key={b.star} className="flex items-center gap-2">
              <span className="text-xs font-medium w-4 text-end">{b.star}</span>
              <Star className="h-3 w-3 fill-gold text-gold" />
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${b.pct}%` }} />
              </div>
              <span className="text-xs text-muted-foreground w-8">{b.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <span className="text-sm font-semibold">{review.author}</span>
                  {review.verified && (
                    <span className="ms-1.5 inline-flex items-center gap-0.5 text-trust text-[10px]">
                      <CheckCircle className="h-3 w-3" />
                      {locale === 'fr' ? 'Vérifié' : 'موثق'}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-gold text-gold' : 'text-muted'}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{review.comment[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
