import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, User, Quote } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface VideoTestimonial {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  username: string;
  role: string;
  rating: number;
}

const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: '1',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-training-at-the-gym-4416-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@karim_fit',
    role: 'Athlète Pro',
    rating: 5,
  },
  {
    id: '2',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-doing-box-jumps-at-the-gym-4302-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/3757334/pexels-photo-3757334.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@sarah_wellness',
    role: 'Coach Fitness',
    rating: 5,
  },
  {
    id: '3',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-running-on-the-beach-at-sunset-1002-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@mehdi_ocr',
    role: 'Crossfit Enthusiast',
    rating: 5,
  },
  {
    id: '4',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-boxer-hitting-a-punching-bag-4414-large.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/4761592/pexels-photo-4761592.jpeg?auto=compress&cs=tinysrgb&w=800',
    username: '@amine_boxing',
    role: 'Boxeur',
    rating: 5,
  },
];

export function PerformanceVideoFeed() {
  const { t, dir } = useLanguage();
  
  return (
    <section className="py-24 bg-[#020617] overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
            >
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase italic"
            >
              {t('videoSectionTitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-medium text-lg max-w-xl"
            >
              {t('videoSectionSubtitle')}
            </motion.p>
          </div>
        </div>

        {/* Desktop Grid / Mobile Marquee */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {TESTIMONIALS.map((testimonial, idx) => (
              <VideoCard key={testimonial.id} testimonial={testimonial} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ testimonial, index }: { testimonial: VideoTestimonial, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex-none w-[280px] md:w-full aspect-[9/16] rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 group cursor-pointer snap-center"
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play().catch(() => {});
        setIsPlaying(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
        setIsPlaying(false);
      }}
      onClick={handleInteraction}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={testimonial.videoUrl}
        poster={testimonial.thumbnailUrl}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* Ripple Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl animate-pulse" />
              <div className="relative h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                <Play className="h-6 w-6 text-primary-foreground fill-current ml-1" />
              </div>
              {/* Ripple Rings */}
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-ping-slow" />
              <div className="absolute -inset-8 border border-primary/10 rounded-full animate-ping-slow delay-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-black tracking-tight text-white">{testimonial.username}</p>
                <p className="text-[10px] text-white/60 font-bold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary pt-2 border-t border-white/5">
            <Play className="h-2.5 w-2.5 fill-current" />
            <span>{t('videoWatchNow')}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
