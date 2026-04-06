import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, Star, ShoppingBag, Plus, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProduct } from '@/data/products';

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
    <section className="py-32 bg-obsidian relative overflow-hidden grain-overlay">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-electric/5 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2 opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-primary"
          >
            <TrendingUp className="h-4 w-4 text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Impact Réel. Résultats Certifiés.</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] text-white italic">
            L'ÉLITE <span className="text-electric">NUTRI</span>MAROC.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            {locale === 'fr' 
              ? "Découvrez comment nos protocoles transforment les athlètes du Royaume, de Casablanca à Agadir."
              : "اكتشف كيف تحول بروتوكولاتنا الرياضيين في المملكة، من الدار البيضاء إلى أكادير."}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px] md:auto-rows-[300px]">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "rounded-[3rem] border border-white/5 overflow-hidden group relative transition-all duration-700 hover:border-electric/30",
                story.size === 'large' ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-2"
              )}
            >
              {/* Image & Overlay */}
              <img src={story.image} alt={story.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Watermark */}
              <div className="absolute top-8 left-8">
                 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-electric text-black font-black text-[9px] uppercase tracking-widest shadow-[0_0_20px_rgba(212,255,0,0.5)]">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified Transformation
                 </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 text-white/60 mb-2">
                   <MapPin className="h-3 w-3 text-electric" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">{story.location}</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-none group-hover:text-electric transition-colors duration-500">
                    {story.name}
                  </h3>
                  <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl">
                    "{story.quote}"
                  </p>
                </div>

                {/* Stats & Products */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-white/5">
                   <div className="flex gap-4">
                      {story.stats.map((stat, sIdx) => (
                         <div key={sIdx}>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-xl font-black text-electric">{stat.value}</div>
                         </div>
                      ))}
                   </div>
                   
                   <div className="flex gap-2">
                      {story.stack.map(pId => {
                         const product = getProduct(pId);
                         if (!product) return null;
                         return (
                            <div key={pId} className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-2 group/prod hover:scale-110 transition-transform">
                               <img src={product.images[0]} alt="product" className="w-full h-full object-contain" />
                               {/* Tooltip-like label on hover could go here */}
                            </div>
                         );
                      })}
                      <div className="h-12 w-12 rounded-xl bg-electric/20 border border-electric/40 flex items-center justify-center text-electric">
                         <Plus className="h-5 w-5" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex justify-center"
        >
           <Button className="rounded-full px-12 py-8 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
              Rejoindre l'élite <ArrowRight className="ml-4 h-5 w-5" />
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
