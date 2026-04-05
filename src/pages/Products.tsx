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
      <div className="container py-8 md:py-10">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-1 snap-x snap-mandatory">
          <Link
            to="/products"
            className={`inline-flex shrink-0 snap-start items-center justify-center min-h-11 px-5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
              !categoryFilter ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            {t('allCategories')}
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.id)}`}
              className={`inline-flex shrink-0 snap-start items-center justify-center min-h-11 px-5 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                categoryFilter === cat.id ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {cat.icon} {cat.name[locale]}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap items-end gap-4 mb-5 rounded-xl border bg-muted/20 p-4">
          {filterFields}
          {hasExtraFilters && (
            <Button type="button" variant="ghost" size="sm" onClick={clearExtraFilters}>
              {t('clearFilters')}
            </Button>
          )}
        </div>

        <div className="flex md:hidden mb-5">
          <Sheet>
            <SheetTrigger asChild>
              <Button type="button" variant="outline" className="gap-2 min-h-11 rounded-full">
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

        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <p className="text-sm font-medium text-muted-foreground">
            {filtered.length} {t('products')}
          </p>
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[10.5rem] h-10 text-xs rounded-full border-border/80">
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
              className="h-10 w-10 hidden md:flex rounded-full border-border/80"
              onClick={() => setView((v) => (v === 'grid' ? 'list' : 'grid'))}
            >
              {view === 'grid' ? <List className="h-4 w-4" /> : <Grid3X3 className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/20 py-16 px-6 text-center">
            <p className="text-title font-semibold text-foreground mb-2">{t('emptyCatalogTitle')}</p>
            <p className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed">{t('emptyCatalogBody')}</p>
            <Button asChild className="rounded-full">
              <Link to="/products">{t('emptyCatalogReset')}</Link>
            </Button>
          </div>
        ) : (
          <div
            className={
              view === 'grid'
                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'
                : 'space-y-4'
            }
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
