import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const { t, locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-black text-white pt-32 md:pt-0 atmospheric-depth"
    >
      {/* Cinematic Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-[20vw] font-black uppercase tracking-tighter opacity-[0.02] leading-none whitespace-nowrap">
          {locale === 'fr' ? 'UNLEASH' : '┘é┘ê╪⌐'}
        </span>
      </motion.div>

      <div className="container relative z-10 px-4 pt-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-electric" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-electric">
                  {t('heroPromoBadge')}
                </span>
              </div>

              <h1 className="flex flex-col gap-2">
                <span className="text-6xl md:text-[10rem] font-display font-black uppercase tracking-tight leading-[0.8] text-white">
                  {t('heroTitle')}
                </span>
                <span className="serif-display italic text-6xl md:text-[11rem] text-electric leading-[0.85] -ml-2 md:-ml-4 drop-shadow-[0_0_30px_rgba(212,255,0,0.3)]">
                  {t('heroEmphasis')}
                </span>
              </h1>

              <p className="max-w-xl text-slate-400 text-lg md:text-2xl font-light leading-relaxed border-l-2 border-white/5 pl-8 py-2">
                {t('heroSubtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/products">
                <Button 
                  size="huge" 
                  className="bg-electric text-black hover:bg-white transition-all duration-500 rounded-none font-black uppercase tracking-widest text-xs px-12 h-16 shadow-[0_0_40px_rgba(212,255,0,0.2)]"
                >
                  {t('heroCta')}
                  <ArrowRight className="ml-3 h-5 w-5" strokeWidth={3} />
                </Button>
              </Link>
              <Link to="/#goal-selector">
                <Button 
                  variant="outline" 
                  size="huge" 
                  className="border-white/10 hover:border-electric transition-all duration-500 rounded-none font-black uppercase tracking-widest text-xs px-12 h-16 bg-white/[0.02]"
                >
                  {t('buildStack')}
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-10 pt-10"
            >
              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 transition-colors group-hover:border-electric/30">
                  <ShieldCheck className="h-5 w-5 text-electric" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white">{t('promoAuthentic')}</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">IMPORT OFFICIEL</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 transition-colors group-hover:border-electric/30">
                  <Activity className="h-5 w-5 text-electric" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white">{t('fastDelivery')}</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">MAINTENANT DISPONIBLE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Graphic / Info (Optional) */}
          <div className="hidden lg:block lg:col-span-4 relative">
             {/* Decorative element */}
             <div className="aspect-[4/5] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 p-12 relative overflow-hidden backdrop-blur-3xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=800&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale" />
                <div className="relative z-10 h-full flex flex-col justify-end gap-6">
                  <Sparkles className="h-12 w-12 text-electric mb-4" />
                  <span className="text-4xl font-display font-black uppercase tracking-tighter leading-none">
                    Performance<br/>Elite.
                  </span>
                  <div className="h-1 w-20 bg-electric" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
