import { categories } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';

export function CategoryPills() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-lg font-bold mb-4">{t('categories')}</h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors group-hover:scale-105 transform duration-200">
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-center whitespace-nowrap">
                {cat.name[locale]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
