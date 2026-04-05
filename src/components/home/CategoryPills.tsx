import { categories } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { Dumbbell, Zap, Pill, Flame, TrendingDown, Weight } from 'lucide-react';
import { PageSection } from '@/components/layout/PageSection';

const iconMap: Record<string, React.ElementType> = {
  dumbbell: Dumbbell,
  zap: Zap,
  pill: Pill,
  flame: Flame,
  'trending-down': TrendingDown,
  weight: Weight,
};

const colorMap: Record<string, string> = {
  protein: 'bg-primary/10 text-primary',
  creatine: 'bg-accent/10 text-accent',
  vitamins: 'bg-trust/10 text-trust',
  'pre-workout': 'bg-destructive/10 text-destructive',
  'weight-loss': 'bg-purple-100 text-purple-600',
  'mass-gainer': 'bg-amber-100 text-amber-600',
};

export function CategoryPills() {
  const { locale, t } = useLanguage();

  return (
    <PageSection sectionClassName="py-6">
      <h2 className="text-lg font-bold mb-4">{t('categories')}</h2>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Dumbbell;
          const colors = colorMap[cat.id] || 'bg-secondary text-foreground';
          return (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.id)}`}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${colors}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-center whitespace-nowrap">{cat.name[locale]}</span>
            </Link>
          );
        })}
      </div>
    </PageSection>
  );
}
