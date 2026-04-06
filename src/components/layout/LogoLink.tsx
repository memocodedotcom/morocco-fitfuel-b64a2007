import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn('flex items-center gap-3 font-display font-black text-2xl shrink-0 group', className)}
    >
      <div className="relative">
        <div className="bg-electric text-black rounded-xl h-10 w-10 flex items-center justify-center text-xl font-black shadow-[0_0_20px_rgba(212,255,0,0.3)] group-hover:scale-110 transition-transform duration-500">
          N
        </div>
        <div className="absolute inset-0 bg-electric blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white italic tracking-tighter uppercase">Nutri<span className="text-electric">Maroc</span></span>
        <span className="text-[7px] font-black tracking-[0.5em] text-white/30 uppercase pl-0.5">Performance Elite</span>
      </div>
    </Link>
  );
}
