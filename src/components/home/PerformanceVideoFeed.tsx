import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, User, Quote, Heart, ShoppingBag, Plus, Activity, Instagram } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface VideoTestimonial {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  username: string;
  role: string;
  rating: number;
  productName?: string;
  productPrice?: string;
}

const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: '1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-4416-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@karim_fit',
    role: 'Athlète Pro',
    rating: 5,
    productName: 'NM-Whey-Isolate',
    productPrice: '599,00 DH'
  },
  {
    id: '2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-doing-box-jumps-at-the-gym-4302-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/3757334/pexels-photo-3757334.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@sarah_wellness',
    role: 'Coach Fitness',
    rating: 5,
    productName: 'NM-Pure-Creatine',
    productPrice: '299,00 DH'
  },
  {
    id: '4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-boxer-hitting-a-punching-bag-4414-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4761592/pexels-photo-4761592.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@amine_boxing',
    role: 'Boxeur',
    rating: 5,
    productName: 'NM-Pre-Workout',
    productPrice: '349,00 DH'
  },
];

export function PerformanceVideoFeed() {
  const { t, locale } = useLanguage();
  
  return (
    <section className="py-32 bg-obsidian overflow-hidden grain-overlay">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-primary"
            >
               <Activity className="h-4 w-4 text-electric animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Live Performance Feed</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase italic leading-[0.8] text-white"
            >
               PROUVEZ VOTRE <br />
               <span className="text-electric">PERFORMANCE.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 font-medium text-xl max-w-xl italic"
            >
               {locale === 'fr' 
                 ? 'Rejoignez la communauté NutriMaroc sur Instagram et identifiez-nous pour apparaitre.'
                 : 'انضم إلى مجتمع نيوترالماروك على إنستغرام وشاركنا تجربتك لتظهر هنا.'}
            </motion.p>
          </div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <Button className="rounded-full px-10 py-8 bg-electric text-black font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,255,0,0.3)]">
                <Instagram className="mr-3 h-5 w-5" />
                @NutriMarocElite
             </Button>
          </motion.div>
        </div>

        {/* Video Reel */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
             <VideoCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ testimonial, index }: { testimonial: VideoTestimonial, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const { t } = useLanguage();

  const handleInteraction = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleDoubleTap = (e: React.MouseEvent) => {
     setShowHeart(true);
     setIsLiked(true);
     setTimeout(() => setShowHeart(false), 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring', damping: 20 }}
      className="relative flex-none aspect-[9/19] rounded-[4rem] group"
    >
      {/* Phone Frame Decoration */}
      <div className="absolute -inset-4 border-[12px] border-white/5 rounded-[4.5rem] pointer-events-none group-hover:border-electric/10 transition-colors duration-700" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-obsidian rounded-b-3xl z-30" /> {/* Speaker/Sensors */}
      
      <div 
         className="relative w-full h-full rounded-[4rem] overflow-hidden bg-white/5 border-4 border-slate-800 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group-hover:shadow-electric/10 transition-all duration-700"
         onClick={handleInteraction}
         onDoubleClick={handleDoubleTap}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.thumbnailUrl}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-60" />

        {/* Double Tap Heart */}
        <AnimatePresence>
           {showHeart && (
              <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1.5, opacity: 1 }}
                 exit={{ scale: 2, opacity: 0 }}
                 className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
              >
                 <Heart className="h-24 w-24 text-electric fill-electric drop-shadow-[0_0_30px_rgba(212,255,0,0.8)]" />
              </motion.div>
           )}
        </AnimatePresence>

        {/* Interaction Prompts */}
        <div className="absolute inset-x-0 bottom-0 p-8 space-y-6">
           {/* Buy Now Widget */}
           <motion.div 
             initial={{ x: -20, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="glass-primary p-5 rounded-[2rem] border-white/20 transform transition-transform group-hover:translate-y-[-10px]"
           >
              <div className="flex items-center justify-between gap-4">
                 <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-lg pt-1">
                       <ShoppingBag className="h-6 w-6 text-black" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-electric">{testimonial.productName}</p>
                       <p className="text-sm font-black text-white">{testimonial.productPrice}</p>
                    </div>
                 </div>
                 <Button className="h-10 w-10 p-0 rounded-full bg-electric text-black hover:scale-110 transition-transform">
                    <Plus className="h-5 w-5" />
                 </Button>
              </div>
           </motion.div>

           {/* User Meta */}
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="h-10 w-10 rounded-full border-2 border-electric p-0.5">
                    <div className="h-full w-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
                       <User className="h-5 w-5 text-slate-400" />
                    </div>
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-white">{testimonial.username}</h4>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{testimonial.role}</p>
                 </div>
              </div>
              <div 
                 className={cn(
                    "flex flex-col items-center gap-1 transition-all",
                    isLiked ? "text-electric" : "text-white"
                 )}
                 onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
              >
                 <Heart className={cn("h-6 w-6 transition-all", isLiked && "fill-current scale-125")} />
                 <span className="text-[10px] font-black">2.4k</span>
              </div>
           </div>
        </div>

        {/* Play Icon if Not Playing */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none"
            >
              <div className="h-20 w-20 bg-electric/20 rounded-full border border-electric/40 flex items-center justify-center">
                 <Play className="h-10 w-10 text-electric fill-electric ml-2" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
