import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { type Product, getProduct } from '@/data/products';
import { toast } from '@/components/ui/sonner';
import { translations, type Locale } from '@/i18n/translations';

function localeFromStorage(): Locale {
  const raw = localStorage.getItem('locale');
  return raw === 'ar' ? 'ar' : 'fr';
}

export interface CartItem {
  productId: string;
  quantity: number;
  flavor?: string;
  size?: string;
}

export type AddItemOptions = { silent?: boolean };

interface CartContextType {
  items: CartItem[];
  addItem: (
    productId: string,
    qty?: number,
    flavor?: string,
    size?: string,
    options?: AddItemOptions,
  ) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  getCartProducts: () => (CartItem & { product: Product })[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = 'nutri-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback(
    (productId: string, qty = 1, flavor?: string, size?: string, options?: AddItemOptions) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        if (existing) {
          return prev.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + qty } : i,
          );
        }
        return [...prev, { productId, quantity: qty, flavor, size }];
      });
      setCartOpen(true);
      if (!options?.silent) {
        toast.success(translations[localeFromStorage()].addedToCart);
      }
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    setItems(prev => prev.filter(i => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      setItems(prev => prev.filter(i => i.productId !== productId));
    } else {
      setItems(prev => prev.map(i => i.productId === productId ? { ...i, quantity: qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const p = getProduct(item.productId);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);

  const getCartProducts = useCallback(() => {
    return items
      .map(item => {
        const product = getProduct(item.productId);
        return product ? { ...item, product } : null;
      })
      .filter(Boolean) as (CartItem & { product: Product })[];
  }, [items]);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      itemCount, subtotal, isCartOpen, setCartOpen, getCartProducts,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
