import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SuccessStories() {
  const { t, locale } = useLanguage();
  
  const stories = [
    {
      name: "Ahmed K.",
      role: "Athl├⌐te Pro",
      text: "NutriMaroc a litt├⌐ralement transform├⌐ ma pr├⌐paration. La qualit├⌐ des prot├⌐ines est in├⌐gal├⌐e au Maroc.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      results: "+5kg Muscle",
      rating: 5
    },
    {
      name: "Sara L.",
      role: "CrossFit Coach",
      text: "Enfin une marque locale qui respecte les standards internationaux. Ma r├⌐cup├⌐ration est 2x plus rapide.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?w=400&h=400&fit=crop",
      results: "Peak Performance",
      rating: 5
    },
    {
       name: "Yassine M.",
       role: "Bodybuilder",
       text: "La Whey Isolate NutriMaroc est ma favorite. Digestion parfaite et go├╗t exceptionnel.",
       image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
       results: "Elite Recovery",
       rating: 5
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff03_0%,transparent_70%)]" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="h-0.5 w-12 bg-electric" />
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-white leading-tight">
              HISTOIRES DE<br/>
              <span className="serif-display text-white/30 italic">SUCC├êS.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-base md:text-lg font-normal mb-2 leading-relaxed">
            {locale === 'fr' 
              ? "Rejoignez l'élite des athlètes marocains qui ont choisi l'excellence nutritionnelle."
              : "انضم إلى نخبة الرياضيين المغاربة الذين اختاروا التميز الغذائي."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 bg-white/[0.01] border border-white/5 p-10 rounded-sm transition-all duration-700 hover:bg-white/[0.03] hover:border-white/10">
                <Quote className="h-10 w-10 text-electric/20 mb-8 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                
                <p className="text-xl md:text-2xl text-white font-light italic leading-snug mb-10 group-hover:text-electric transition-colors duration-500">
                  "{story.text}"
                </p>

                <div className="flex items-center gap-6 border-t border-white/5 pt-10">
                  <div className="h-16 w-16 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden rounded-full border border-white/10">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-display font-black uppercase tracking-tighter text-white">{story.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-electric font-black">{story.results}</p>
                    <div className="flex gap-1">
                       {[...Array(story.rating)].map((_, i) => (
                         <Star key={i} className="h-2.5 w-2.5 fill-electric text-electric" />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Artistic Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
