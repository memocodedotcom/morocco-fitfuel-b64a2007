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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const PRICE_ALL = 'all';
const PRICE_UNDER_500 = 'under500';
const PRICE_500_1000 = '500to1000';
const PRICE_OVER_1000 = 'over1000';

const brandList = [...new Set(products.map((p) => p.brand))].sort();

export default function ProductsPage() {
  const { locale, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || '';
  const brandFilter = searchParams.get('brand') || '';
  const priceTier = searchParams.get('price') || PRICE_ALL;

  const [sortBy, setSortBy] = useState('popularity');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const setBrand = (v: string) => {
    const next = new URLSearchParams(searchParams);
    if (v) next.set('brand', v);
    else next.delete('brand');
    setSearchParams(next, { replace: true });
  };

  const setPriceTier = (v: string) => {
    const next = new URLSearchParams(searchParams);
    if (v && v !== PRICE_ALL) next.set('price', v);
    else next.delete('price');
    setSearchParams(next, { replace: true });
  };

  const clearExtraFilters = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('brand');
    next.delete('price');
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (categoryFilter) {
      list = list.filter((p) => p.category === categoryFilter);
    }
    if (brandFilter) {
      list = list.filter((p) => p.brand === brandFilter);
    }
    if (priceTier === PRICE_UNDER_500) {
      list = list.filter((p) => p.price < 500);
    } else if (priceTier === PRICE_500_1000) {
      list = list.filter((p) => p.price >= 500 && p.price <= 1000);
    } else if (priceTier === PRICE_OVER_1000) {
      list = list.filter((p) => p.price > 1000);
    }
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        list.reverse();
        break;
      default:
        list.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return list;
  }, [categoryFilter, brandFilter, priceTier, sortBy]);

  const hasExtraFilters = Boolean(brandFilter) || (priceTier !== PRICE_ALL && priceTier !== '');

  const filterFields = (
    <div className="space-y-4 py-2">
      <div className="space-y-2">
        <p className="text-sm font-medium">{t('brand')}</p>
        <Select value={brandFilter || '__all__'} onValueChange={(v) => setBrand(v === '__all__' ? '' : v)}>
          <SelectTrigger>
            <SelectValue placeholder={t('allBrands')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="__all__">{t('allBrands')}</SelectItem>
            {brandList.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">{t('priceRange')}</p>
        <Select value={priceTier || PRICE_ALL} onValueChange={setPriceTier}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={PRICE_ALL}>{t('priceAll')}</SelectItem>
            <SelectItem value={PRICE_UNDER_500}>{t('priceUnder500')}</SelectItem>
            <SelectItem value={PRICE_500_1000}>{t('price500to1000')}</SelectItem>
            <SelectItem value={PRICE_OVER_1000}>{t('priceOver1000')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <AppLayout>
      <div className="container py-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-5 pb-1">
          <Link
            to="/products"
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoryFilter ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            {t('allCategories')}
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.id)}`}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {cat.icon} {cat.name[locale]}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap items-end gap-3 mb-4">
          {filterFields}
          {hasExtraFilters && (
            <Button type="button" variant="ghost" size="sm" onClick={clearExtraFilters}>
              {t('clearFilters')}
            </Button>
          )}
        </div>

        <div className="flex md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button type="button" variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                {t('filters')}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[auto] max-h-[85vh]">
              <SheetHeader>
                <SheetTitle>{t('filters')}</SheetTitle>
              </SheetHeader>
              {filterFields}
              <SheetFooter className="flex-row gap-2 sm:justify-between">
                <Button type="button" variant="outline" onClick={clearExtraFilters}>
                  {t('clearFilters')}
                </Button>
                <SheetClose asChild>
                  <Button type="button">{t('applyFilters')}</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filtered.length} {t('products')}
          </p>
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
              onClick={() => setView((v) => (v === 'grid' ? 'list' : 'grid'))}
            >
              {view === 'grid' ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div
          className={
            view === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3' : 'space-y-3'
          }
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
