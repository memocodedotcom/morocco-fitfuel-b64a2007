import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Play, Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function PerformanceVideoFeed() {
  const { t } = useLanguage();
  
  const videos = [
    { 
       id: 1, 
       thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
       athlete: "@AthleteX",
       title: "Peak Performance Story"
    },
    { 
       id: 2, 
       thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c65b5a38?w=800&q=80",
       athlete: "@FitPro",
       title: "Training Elite" 
    },
    { 
       id: 3, 
       thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
       athlete: "@StrengthMaster",
       title: "Raw Power"
    },
    { 
       id: 4, 
       thumbnail: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
       athlete: "@ProCoach",
       title: "The Grind"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container relative z-10 px-4">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-12 max-w-7xl mx-auto border-l border-white/5 pl-8 md:pl-12">
          <div className="space-y-6">
            <div className="h-0.5 w-12 bg-electric" />
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-white leading-tight">
               L'ACTION<br/>
               <span className="serif-display text-white/30 italic">RÉELLE.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base md:text-lg font-normal mb-2 leading-relaxed">
             Des athlètes de haut niveau, une intensité maximale. Découvrez la performance NutriMaroc.
          </p>
        </div>

        {/* Video Horizontal Scroll / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[600px] md:h-[800px]">
           {videos.map((video, idx) => (
             <motion.div 
               key={video.id}
               initial={{ opacity: 0, scale: 1.05 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative overflow-hidden group h-full rounded-sm border border-white/5"
             >
                <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="h-16 w-16 flex items-center justify-center rounded-full bg-electric text-black scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <Play className="h-6 w-6 ml-1 fill-black" strokeWidth={3} />
                   </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="h-px w-6 bg-electric" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-electric">{video.athlete}</span>
                   </div>
                   <h3 className="text-xl font-display font-black uppercase tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500 ease-out">{video.title}</h3>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
