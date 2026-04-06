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
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Precision Background - Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-electric" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">COMMUNAUTÉ DE PERFORMANCE</span>
            </div>
            <h2 className="text-huge font-display font-extrabold uppercase tracking-tight leading-[0.85] text-white">
              RÉSULTATS<br />
              <span className="text-white/30">CERTIFIÉS.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-md font-normal leading-relaxed border-l border-white/10 pl-8">
            {locale === 'fr' 
              ? "Une analyse précise des transformations réelles au sein de l'élite athlétique NutriMaroc."
              : "تحليل دقيق للتحولات الحقيقية ضمن نخبة الرياضيين في نوتريماروك."}
          </p>
        </div>

        {/* Community Wall Grid - Geometric Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[3/4] rounded-sm border border-white/[0.05] overflow-hidden group relative bg-white/[0.02]"
            >
              {/* Image with Direct Neutral Overlay */}
              <img 
                src={story.image} 
                alt={story.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Data Badge */}
              <div className="absolute top-6 left-6 z-20">
                 <div className="px-3 py-1 bg-white/5 border border-white/10 text-[8px] font-extrabold uppercase tracking-widest text-white backdrop-blur-md">
                    VERIFIED CASE {idx + 1}
                 </div>
              </div>

              {/* Functional Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-8 z-20">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/30 text-[8px] font-extrabold uppercase tracking-widest">
                    <MapPin className="h-2.5 w-2.5" />
                    <span>{story.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-extrabold text-white uppercase tracking-tight">
                    {story.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-normal leading-relaxed opacity-60">
                    "{story.quote}"
                  </p>
                </div>

                {/* Analytical Stats Bar */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  {story.stats.map((stat, sIdx) => (
                     <div key={sIdx} className="space-y-1">
                        <div className="text-[8px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                        <div className="text-lg font-extrabold text-electric tracking-tight">
                           {stat.value}
                        </div>
                     </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 flex justify-center"
        >
           <Button variant="outline" className="h-14 px-10 rounded-sm border-white/10 text-white font-extrabold uppercase tracking-widest text-[9px] hover:bg-white hover:text-black transition-all duration-300 shadow-none">
              REJOINDRE LE RÉSEAU ÉLITE
              <ArrowRight className="ml-4 h-4 w-4" />
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
