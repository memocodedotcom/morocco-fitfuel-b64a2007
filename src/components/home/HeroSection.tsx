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
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian text-white pt-24 md:pt-0 grain-overlay"
    >
      {/* Background Parallax Text - ULTIMATE PERFORMANCE */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none"
      >
        <span className="text-[30vw] font-black tracking-tighter leading-none italic text-electric">
          ELITE
        </span>
      </motion.div>

      {/* High-End Decorative Auras */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-electric/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Content side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-12"
          >
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-3 glass-primary px-5 py-2.5 rounded-full border-electric/30"
              >
                <div className="relative">
                   <div className="h-3 w-3 rounded-full bg-electric animate-ping absolute inset-0" />
                   <Activity className="h-4 w-4 text-electric relative z-10" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                   {locale === 'fr' ? 'L\'EXCELLENCE AU SOMMET' : 'القمة في التميز'}
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase italic">
                {locale === 'fr' ? 'DOMINEZ' : 'سيطر'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40 italic-not-really drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                   {locale === 'fr' ? 'MAROC.' : 'بالمغرب.'}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-lg font-medium leading-relaxed italic border-l-2 border-electric/40 pl-6">
                {locale === 'fr' 
                  ? "La nutrition de performance ultime pour les athlètes de haut niveau au Royaume."
                  : "تغذية الأداء القصوى للرياضيين رفيعي المستوى في المملكة."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Magnetic amount={0.2}>
                 <Button asChild size="lg" className="h-16 px-12 rounded-[2rem] bg-electric text-black hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(212,255,0,0.4)] group overflow-hidden">
                   <Link to="/products" className="flex items-center gap-4">
                     <span className="font-black tracking-[0.2em] text-xs uppercase">{t('heroCta')}</span>
                     <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                   </Link>
                 </Button>
              </Magnetic>

              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="flex flex-col gap-3"
              >
                 <div className="flex -space-x-3">
                   {[1, 2, 3, 4, 5].map((i) => (
                     <div key={i} className="h-12 w-12 rounded-full border-2 border-obsidian bg-slate-900 flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                       <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Athlete" className="opacity-70 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                     </div>
                   ))}
                 </div>
                 <div className="flex items-center gap-3">
                    <Star className="h-3 w-3 text-electric fill-electric" />
                    <span className="text-[10px] font-black tracking-widest text-white/60">REJOIGNEZ +15,000 ATHLÈTES CERTIFIÉS</span>
                 </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-white/5">
              {[
                { icon: ShieldCheck, text: t('marqueeAuthentic') },
                { icon: Truck, text: t('marqueeDelivery24h') },
                { icon: CreditCard, text: t('marqueeSecurePay') }
              ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.8 + idx * 0.1 }}
                   className="flex items-center gap-3 group cursor-default"
                 >
                   <item.icon className="h-5 w-5 text-electric transition-transform group-hover:scale-125" strokeWidth={1.5} />
                   <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 group-hover:text-white transition-colors">{item.text}</span>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="relative hidden lg:block"
          >
            {/* Main Image Glow */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[140%] w-full bg-electric/20 blur-[180px] rounded-full opacity-30 animate-pulse" />
            
            <div className="relative group">
               <img 
                 src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1000&q=90" 
                 alt="Performance Supplement" 
                 className="relative z-10 w-full max-w-[600px] mx-auto filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:scale-105"
               />
               
               {/* Technical Data Overlays */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-12 -right-8 glass-primary p-6 rounded-[2.5rem] border-electric/30 shadow-2xl z-20"
               >
                 <TrendingUp className="h-6 w-6 text-electric mb-3" />
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-display">Optimization</p>
                 <div className="text-3xl font-black italic">+82%</div>
                 <div className="text-[9px] font-bold text-electric">MAX OUTPUT</div>
               </motion.div>

               <motion.div 
                 animate={{ x: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-10 -left-12 glass-primary p-6 rounded-[2.5rem] border-electric/20 shadow-2xl z-20"
               >
                 <Zap className="h-6 w-6 text-electric mb-3 animate-pulse" />
                 <div className="space-y-2">
                    <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: "0%" }}
                         animate={{ width: "94%" }}
                         transition={{ duration: 2, delay: 1 }}
                         className="h-full bg-electric shadow-[0_0_15px_rgba(212,255,0,0.6)]" 
                       />
                    </div>
                    <p className="text-[9px] font-black text-white/60 tracking-widest uppercase">Pure Focus Flow</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
