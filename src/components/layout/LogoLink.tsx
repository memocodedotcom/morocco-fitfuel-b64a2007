import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2 font-extrabold text-xl shrink-0', className)}
    >
      <span className="bg-primary text-primary-foreground rounded-lg px-2 py-1 text-sm">N</span>
      <span>NutriMaroc</span>
    </Link>
  );
}
