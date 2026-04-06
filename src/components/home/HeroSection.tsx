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
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian text-white pt-24 md:pt-0 grain-organic"
    >
      {/* Background Parallax Text - ULTIMATE PERFORMANCE */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <span className="text-[40vw] font-black tracking-tighter leading-none italic text-electric">
          FUEL
        </span>
      </motion.div>

      {/* Signature Light Leaks */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-electric/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-terracotta/10 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[140px]" />
      
      {/* Refined Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Content side - Spanning 7 columns */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-20 space-y-12"
          >
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-3 glass-sage px-6 py-2.5 rounded-full border-sage/30"
              >
                <div className="relative">
                   <div className="h-2 w-2 rounded-full bg-electric animate-ping absolute inset-0" />
                   <Activity className="h-4 w-4 text-electric relative z-10" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/90">
                   {locale === 'fr' ? 'L\'AUTHENTICITÉ MAROCAINE' : 'الأصالة المغربية'}
                </span>
              </motion.div>
              
              <div className="relative">
                <h1 className="text-huge font-display font-black leading-[0.75] tracking-tighter uppercase italic">
                  {locale === 'fr' ? 'DOMINEZ' : 'سيطر'}
                  <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40 drop-shadow-[0_0_30px_rgba(212,255,0,0.2)]">
                     {locale === 'fr' ? 'MAROC.' : 'بالمغرب.'}
                     {/* Decorative underline */}
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "100%" }}
                       transition={{ delay: 1, duration: 1.5 }}
                       className="absolute -bottom-2 left-0 h-2 bg-terracotta/40 blur-[2px] -rotate-1 rounded-full"
                     />
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed italic border-l-2 border-terracotta/30 pl-8">
                {locale === 'fr' 
                  ? "L'élite de la nutrition haute performance pour les athlètes qui exigent la perfection."
                  : "نخبة التغذية عالية الأداء للرياضيين الذين يطالبون بالكمال."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-10">
              <Magnetic amount={0.2}>
                 <Button asChild size="lg" className="h-20 px-14 rounded-[2.5rem] bg-electric text-black hover:bg-white transition-all duration-700 shadow-[0_0_60px_rgba(212,255,0,0.3)] group overflow-hidden border-2 border-electric/20">
                   <Link to="/products" className="flex items-center gap-6">
                     <span className="font-black tracking-[0.3em] text-[10px] uppercase">{t('heroCta')}</span>
                     <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                     </div>
                   </Link>
                 </Button>
              </Magnetic>

              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="flex flex-col gap-4"
              >
                 <div className="flex -space-x-4">
                   {[1, 2, 3, 4, 5].map((i) => (
                     <div key={i} className="h-14 w-14 rounded-[1.25rem] border-2 border-obsidian bg-slate-900 flex items-center justify-center overflow-hidden ring-1 ring-white/10 group cursor-pointer">
                       <img src={`https://i.pravatar.cc/150?u=${i+20}`} alt="Athlete" className="opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 scale-110" />
                     </div>
                   ))}
                   <div className="h-14 w-14 rounded-[1.25rem] bg-terracotta/20 border-2 border-terracotta/40 flex items-center justify-center text-terracotta font-black text-xs">
                     +15k
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3 w-3 text-electric fill-electric" />)}
                    </div>
                    <span className="text-[9px] font-black tracking-[0.3em] text-white/50 uppercase">ÉLITE CERTIFIÉE</span>
                 </div>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-x-16 gap-y-8 pt-16 border-t border-white/5">
              {[
                { icon: ShieldCheck, text: t('marqueeAuthentic'), color: 'text-electric' },
                { icon: Truck, text: t('marqueeDelivery24h'), color: 'text-terracotta' },
                { icon: CreditCard, text: t('marqueeSecurePay'), color: 'text-sage-light' }
              ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.8 + idx * 0.1 }}
                   className="flex items-center gap-4 group cursor-default"
                 >
                   <item.icon className={cn("h-6 w-6 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110", item.color)} strokeWidth={1} />
                   <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">{item.text}</span>
                 </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side - Spanning 5 columns with overlap */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="lg:col-span-5 relative hidden lg:block -ml-20"
          >
            {/* Main Image Depth Effects */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-electric/10 blur-[150px] rounded-full opacity-30 animate-pulse" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/20 blur-[100px] rounded-full" />
            
            <div className="relative group perspective-1000">
               <motion.div
                 whileHover={{ rotateY: -10, rotateX: 5 }}
                 transition={{ type: "spring", stiffness: 100 }}
                 className="relative z-10"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1000&q=90" 
                   alt="Performance Supplement" 
                   className="w-full max-w-[550px] mx-auto filter drop-shadow-[0_60px_100px_rgba(0,0,0,0.9)] rounded-[4rem]"
                 />
                 {/* Rim Light Effect */}
                 <div className="absolute inset-0 rounded-[4rem] border-t border-l border-white/20 pointer-events-none" />
               </motion.div>
               
               {/* Technical Data Overlays - Redesigned */}
               <motion.div 
                 animate={{ y: [0, -25, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-16 -right-12 glass-terracotta p-8 rounded-[3rem] border-terracotta/30 shadow-3xl z-20 backdrop-blur-2xl"
               >
                 <TrendingUp className="h-8 w-8 text-terracotta mb-4" />
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-display">Performance</p>
                 <div className="text-4xl font-black italic text-white tracking-tighter">+94%</div>
                 <div className="text-[9px] font-bold text-terracotta tracking-widest mt-1">POWER INDEX</div>
               </motion.div>

               <motion.div 
                 animate={{ x: [0, 20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-10 -left-16 glass-sage p-8 rounded-[3rem] border-sage/20 shadow-3xl z-20 backdrop-blur-2xl"
               >
                 <Zap className="h-8 w-8 text-electric mb-4 animate-pulse" />
                 <div className="space-y-3">
                    <div className="h-2 w-40 bg-white/5 rounded-full overflow-hidden border border-white/10">
                       <motion.div 
                         initial={{ width: "0%" }}
                         animate={{ width: "88%" }}
                         transition={{ duration: 2.5, delay: 1 }}
                         className="h-full bg-electric shadow-[0_0_20px_rgba(212,255,0,0.8)]" 
                       />
                    </div>
                    <p className="text-[9px] font-black text-white/70 tracking-[0.3em] uppercase">NEURAL FOCUS LOAD</p>
                 </div>
               </motion.div>

               {/* Stylized Floating Badge */}
               <motion.div
                 animate={{ rotate: [0, 360] }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 -right-24 h-32 w-32 rounded-full border border-white/10 flex items-center justify-center opacity-30 select-none hidden xl:flex"
               >
                  <span className="text-[8px] font-bold text-white tracking-[0.5em] uppercase text-center">MOROCCO • FITFUEL • ELITE •</span>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
