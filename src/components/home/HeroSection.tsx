import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, CreditCard, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#020617] text-white pt-16 md:pt-0"
    >
      {/* Background Parallax Text */}
      <motion.div 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[25vw] font-black tracking-tighter leading-none">
          PERFORMANCE
        </span>
      </motion.div>

      {/* Decorative Aura */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground/90">
                  {t('heroPromoBadge')}
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter uppercase italic">
                {t('heroTitle')}
                <br />
                <span className="text-primary italic-not-really">{t('heroEmphasis')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-md font-medium leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button asChild size="lg" className="relative h-14 px-10 rounded-xl overflow-hidden group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                <Link to="/products" className="flex items-center gap-3">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-shimmer" />
                  <span className="relative font-black tracking-widest text-xs">{t('heroCta')}</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover/btn:translate-x-1 rtl:rotate-180" />
                </Link>
              </Button>

              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-[#020617] bg-secondary flex items-center justify-center text-[10px] font-bold border border-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" className="opacity-80 grayscale" />
                  </div>
                ))}
                <div className="h-10 px-4 rounded-full flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[10px] font-bold tracking-tight">+10K ATLHETES</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-white/5 opacity-60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('marqueeAuthentic')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('marqueeDelivery24h')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{t('marqueeSecurePay')}</span>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="relative hidden lg:block"
          >
            {/* Main Image Glow */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] w-full bg-primary/20 blur-[150px] rounded-full" />
            
            <img 
              src="/images/hero_bottle.png" 
              alt="Performance Supplement" 
              className="relative z-10 w-full max-w-[600px] mx-auto filter drop-shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
            />

            {/* Float Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
            >
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Pureté Vérifiée</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black">99.9</span>
                <span className="text-xs opacity-60 font-bold">%</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Live Performance</p>
              </div>
              <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
