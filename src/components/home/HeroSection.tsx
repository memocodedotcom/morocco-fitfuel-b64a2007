import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, CreditCard, Sparkles, Activity, Zap, TrendingUp, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Magnetic } from '@/components/ui/magnetic';

export function HeroSection() {
  const { t, locale, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-black text-white pt-32 md:pt-0 atmospheric-depth"
    >
      {/* Background Parallax Identity - Sophisticated Layering */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[50vw] font-serif italic tracking-tighter leading-none text-white whitespace-nowrap">
          Elite
        </span>
      </motion.div>

      {/* Atmospheric Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/[0.02] rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Content side - Prestige focus */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center gap-6"
              >
                <div className="h-px w-12 bg-electric/40" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-electric/80">
                   {locale === 'fr' ? 'ÉLITE ATHLÉTIQUE DU MAROC' : 'نخبة الرياضيين بالمغرب'}
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-6xl md:text-huge font-display font-black leading-[0.85] tracking-tight uppercase">
                  {locale === 'fr' ? 'LA PERFORMANCE' : 'الأداء'}
                </h1>
                <h2 className="text-4xl md:text-7xl serif-display text-white/40 leading-none">
                  {locale === 'fr' ? 'définitive.' : 'النهائي.'}
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-base md:text-lg text-slate-400 max-w-xl font-normal leading-relaxed opacity-80"
              >
                {locale === 'fr' 
                  ? "Protocoles de nutrition de précision pour les athlètes exigeant une clarté et une puissance absolues dans leur quête de perfection."
                  : "بروتوكولات تغذية دقيقة للرياضيين الذين يطالبون بوضوح وقوة مطلقة في سعيهم نحو الكمال."}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-12 pt-8"
            >
              <Button asChild size="lg" className="h-16 px-12 rounded-sm bg-white text-black hover:bg-electric transition-all duration-500 border-none shadow-2xl group">
                <Link to="/products" className="flex items-center gap-6">
                  <span className="font-extrabold tracking-[0.2em] text-[10px] uppercase">{t('heroCta')}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              <div className="flex flex-col gap-3 items-start border-l border-white/5 pl-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-sm border-2 border-black bg-slate-900 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Athlete" className="grayscale opacity-50 hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <div className="text-[9px] font-extrabold tracking-widest text-white/20 uppercase">
                    PRO LEVEL SUPPORTS
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image side - Cinematic Depth */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/[0.03] bg-white/[0.01] group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1000&q=95" 
                alt="Elite Performance Supplement" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Floating Performance Data */}
              <div className="absolute bottom-8 left-8 right-8 p-10 glass border-white/5 rounded-sm">
                <div className="flex items-center justify-between">
                   <div className="space-y-1">
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.3em]">PHASE</p>
                      <p className="text-xl serif-display text-white italic">Elite 2.0</p>
                   </div>
                   <div className="h-10 w-px bg-white/10" />
                   <div className="space-y-1 text-right">
                      <p className="text-[9px] font-bold text-electric/40 uppercase tracking-[0.3em]">CERTIFIED</p>
                      <p className="text-sm font-black text-white">WADA READY</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Subliminal Accents */}
            <div className="absolute -top-12 -right-12 text-[15vw] serif-display text-white/[0.02] rotate-12 pointer-events-none select-none">
              Elite
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
