import { PromoBar } from './PromoBar';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { PageTransition } from './PageTransition';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBar />
      <MobileHeader className="sticky top-0 z-40" />
      <DesktopHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BottomNav />
      <CartDrawer />
    </div>
  );
}
