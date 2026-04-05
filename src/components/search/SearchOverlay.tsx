import { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { searchProducts, type Product } from '@/data/products';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onClose: () => void;
}

export function SearchOverlay({ onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { locale, t } = useLanguage();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-sm"
    >
      <div className="container max-w-2xl pt-4 md:pt-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <div className="flex-1 flex items-center gap-2 bg-secondary rounded-full px-4 py-3 border border-border/60 shadow-card">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="flex-1 bg-transparent outline-none text-sm min-w-0"
              aria-describedby="search-min-chars-hint"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2.5 text-foreground hover:bg-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={t('close')}
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
        <p id="search-min-chars-hint" className="text-xs text-muted-foreground mb-4 px-1">
          {t('searchTypeMore')}
        </p>

        {query.length >= 2 && results.length === 0 && (
          <p className="text-center text-muted-foreground py-8 text-sm">
            {t('noResultsSuggestion', { term: query })}
          </p>
        )}

        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:bg-secondary hover:border-border/60 transition-colors duration-200"
            >
              <img
                src={product.images[0]}
                alt={product.name[locale]}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{product.name[locale]}</p>
                <p className="text-primary font-bold text-sm">{product.price} MAD</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
