import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, User, ShoppingBag, Activity, Instagram } from 'lucide-react';
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
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-electric" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">COMMUNAUTÉ EN ACTION</span>
            </div>
            <h2 className="text-huge font-display font-extrabold text-white uppercase tracking-tight leading-[0.85]">
              FLUX DE<br />
              <span className="text-white/30">PERFORMANCE.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-md font-normal leading-relaxed border-l border-white/10 pl-8">
            {locale === 'fr' 
              ? "Rejoignez l'élite sur Instagram. Visualisez les protocoles en conditions réelles."
              : "انضم إلى النخبة على إنستغرام. شاهد البروتوكولات في ظروف حقيقية."}
          </p>
        </div>

        {/* Video Reel - Geometric Alignment */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {TESTIMONIALS.map((testimonial, idx) => (
             <VideoCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 flex justify-center"
        >
           <Button variant="outline" className="h-14 px-10 rounded-sm border-white/10 text-white font-extrabold uppercase tracking-widest text-[9px] hover:bg-white hover:text-black transition-all duration-300">
              <Instagram className="mr-3 h-4 w-4" />
              SUIVRE @NUTRIMAROCELITE
           </Button>
        </motion.div>
      </div>
    </section>
  );
}

function VideoCard({ testimonial, index }: { testimonial: VideoTestimonial, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1 }}
      className="relative aspect-[9/16] rounded-sm group overflow-hidden border border-white/[0.05] bg-white/[0.02]"
    >
      <div 
         className="relative w-full h-full cursor-pointer"
         onClick={handleInteraction}
      >
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          poster={testimonial.thumbnailUrl}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Functional Meta Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-8 space-y-6">
           {/* Product Attachment */}
           <div className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-sm">
              <div className="flex items-center justify-between gap-4">
                 <div className="space-y-1">
                    <p className="text-[8px] font-extrabold uppercase text-electric tracking-widest">{testimonial.productName}</p>
                    <p className="text-xs font-extrabold text-white">{testimonial.productPrice}</p>
                 </div>
                 <div className="h-8 w-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <ShoppingBag className="h-4 w-4" />
                 </div>
              </div>
           </div>

           {/* User Meta */}
           <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <div className="h-8 w-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                 <User className="h-4 w-4 text-white/40" />
              </div>
              <div className="space-y-0.5">
                 <h4 className="text-[10px] font-extrabold text-white uppercase tracking-widest">{testimonial.username}</h4>
                 <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest">{testimonial.role}</p>
              </div>
           </div>
        </div>

        {/* Minimal Play Icon */}
        <AnimatePresence>
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                 <Play className="h-6 w-6 fill-current ml-1" />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
