import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { products, categories } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ProductsPage() {
  const { locale, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';
  const [sortBy, setSortBy] = useState('popularity');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => {
    let list = [...products];
    if (categoryFilter) {
      list = list.filter(p => p.category === categoryFilter);
    }
    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'newest': list.reverse(); break;
      default: list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [categoryFilter, sortBy]);

  return (
    <AppLayout>
      <div className="container py-6">
        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-5 pb-1">
          <Link
            to="/products"
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoryFilter ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            {t('allCategories')}
          </Link>
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {cat.icon} {cat.name[locale]}
            </Link>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">{filtered.length} {t('products')}</p>
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 h-9 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">{t('popularity')}</SelectItem>
                <SelectItem value="price-asc">{t('priceLowHigh')}</SelectItem>
                <SelectItem value="price-desc">{t('priceHighLow')}</SelectItem>
                <SelectItem value="newest">{t('newest')}</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 hidden md:flex"
              onClick={() => setView(v => v === 'grid' ? 'list' : 'grid')}
            >
              {view === 'grid' ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div className={view === 'grid'
          ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'
          : 'space-y-3'
        }>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
