import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, Plus, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProduct } from '@/data/products';
import { Magnetic } from '@/components/ui/magnetic';

export function SuccessStories() {
  const { t, locale } = useLanguage();

  const stories = [
    {
      id: 'marrakech-elite',
      name: 'Salma k.',
      location: 'Marrakech - High Atlas Training',
      goal: locale === 'fr' ? 'Énergie & Endurance' : 'طاقة وتحمل',
      quote: locale === 'fr' 
        ? "NutriMaroc a redéfini mes limites. Ma récupération est 2x plus rapide."
        : "نيوترالماروك أعاد تعريف حدودي. تعافي جسمي أصبح أسرع بمرتين.",
      image: '/stories/transformation_marrakech.png',
      stack: ['nm-2', '8'],
      stats: [
        { label: 'Endurance', value: '+45%' },
        { label: 'Fatigue', value: '-30%' },
      ],
      size: 'large'
    },
    {
      id: 'agadir-power',
      name: 'Yassine B.',
      location: 'Agadir - Atlantic Power',
      goal: locale === 'fr' ? 'Masse Musculaire' : 'كتلة عضلية',
      quote: locale === 'fr' 
        ? "+8kg de muscle sec. La science ne ment pas."
        : "+8 كغ من العضلات الصافية. العلم لا يكذب.",
      image: '/stories/transformation_agadir.png',
      stack: ['nm-1'],
      stats: [
        { label: 'Strength', value: '+25%' },
      ],
      size: 'small'
    },
    {
      id: 'casablanca-perf',
      name: 'Omar T.',
      location: 'Casablanca - Palmier Club',
      goal: locale === 'fr' ? 'Perte de Poids' : 'فقدان الوزن',
      quote: locale === 'fr' 
        ? "Transformation radicale en 12 semaines."
        : "تحول جذري في 12 أسبوعاً.",
      image: 'https://images.unsplash.com/photo-1571019623129-fbf8a2f18d2e?w=800&q=80',
      stack: ['nm-3'],
      stats: [
        { label: 'Bodyfat', value: '-12%' },
      ],
      size: 'small'
    }
  ];

  return (
    <section className="py-40 bg-obsidian relative overflow-hidden grain-organic">
      {/* Background Gradients - Light Leaks */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-electric/5 rounded-full blur-[200px] translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-terracotta/5 rounded-full blur-[160px] -translate-x-1/2 translate-y-1/2 opacity-30" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[140px] opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-5xl mx-auto mb-24 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-8 py-3 rounded-full glass-sage border-sage/20"
          >
            <TrendingUp className="h-5 w-5 text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/90">Impact Réel. Résultats Certifiés.</span>
          </motion.div>
          <h2 className="text-huge font-display font-black uppercase tracking-tighter leading-[0.75] text-white italic">
            L'ÉLITE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric/40 drop-shadow-[0_0_20px_rgba(212,255,0,0.2)]">NUTRI</span>MAROC.
          </h2>
          <p className="text-slate-400 text-xl font-medium max-w-3xl mx-auto italic border-l-2 border-terracotta/30 pl-8 text-left">
            {locale === 'fr' 
              ? "Plus qu'une simple boutique, une communauté d'athlètes qui repoussent leurs limites chaque jour dans tout le Royaume."
              : "أكثر من مجرد متجر، مجتمع من الرياضيين الذين يتجاوزون حدودهم كل يوم في جميع أنحاء المملكة."}
          </p>
        </div>

        {/* Community Wall Grid - More Dynamic Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "rounded-[4rem] border border-white/5 overflow-hidden group relative transition-all duration-1000 hover:border-white/20 shadow-3xl",
                idx === 0 ? "md:col-span-2 md:row-span-2" : 
                idx === 1 ? "md:col-span-2 md:row-span-1" :
                "md:col-span-2 md:row-span-1"
              )}
            >
              {/* Image & Depth Overlay */}
              <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-[2px]" />

              {/* Verified Badge - Redesigned */}
              <div className="absolute top-10 left-10 z-20">
                 <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-electric text-black font-black text-[9px] uppercase tracking-widest shadow-[0_0_30px_rgba(212,255,0,0.6)]">
                    <CheckCircle2 className="h-4 w-4" />
                    REAL IMPACT
                 </div>
              </div>

              {/* Content Overlay - Immersive */}
              <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 space-y-8 z-20 transform transition-transform duration-1000 group-hover:translate-y-[-10px]">
                <div className="flex items-center gap-4 text-white/50 mb-2">
                   <div className="h-10 w-10 rounded-full glass-sage flex items-center justify-center border border-sage/30">
                      <MapPin className="h-4 w-4 text-electric" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">{story.location}</span>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic leading-[0.8] group-hover:text-electric transition-colors duration-700">
                    {story.name}
                  </h3>
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-6 h-12 w-12 text-white/10" />
                    <p className="text-slate-200 text-xl md:text-2xl font-medium leading-relaxed italic max-w-3xl relative z-10">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                {/* Growth Stats & Stack - Modern Layout */}
                <div className="flex flex-wrap items-center justify-between gap-10 pt-10 border-t border-white/10">
                   <div className="flex gap-8">
                      {story.stats.map((stat, sIdx) => (
                         <div key={sIdx} className="space-y-1">
                            <div className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">{stat.label}</div>
                            <div className="text-3xl font-black text-white group-hover:text-electric transition-colors duration-700 font-display italic tracking-tighter">
                               {stat.value}
                               <TrendingUp className="inline-block ml-2 h-4 w-4 opacity-40" />
                            </div>
                         </div>
                      ))}
                   </div>
                   
                   <div className="flex -space-x-4">
                      {story.stack.map(pId => {
                         const product = getProduct(pId);
                         if (!product) return null;
                         return (
                            <div key={pId} className="h-16 w-16 rounded-[1.25rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-3 group/prod hover:z-30 hover:scale-125 transition-all duration-500 shadow-2xl relative">
                               <img src={product.images[0]} alt="product" className="w-full h-full object-contain filter drop-shadow-lg" />
                               <div className="absolute inset-0 rounded-[1.25rem] border border-white/10 pointer-events-none" />
                            </div>
                         );
                      })}
                      <div className="h-16 w-16 rounded-[1.25rem] glass-terracotta border border-terracotta/40 flex items-center justify-center text-terracotta shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                         <Plus className="h-6 w-6" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-24 flex justify-center"
        >
           <Magnetic amount={0.2}>
             <Button className="h-24 px-16 rounded-[3rem] bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black hover:scale-105 transition-all duration-700 shadow-4xl group relative overflow-hidden">
                <span className="relative z-10">REJOINDRE L'ÉLITE</span>
                <ArrowRight className="ml-6 h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
             </Button>
           </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
