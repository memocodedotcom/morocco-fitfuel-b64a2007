import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight, Star, ShoppingBag, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProduct } from '@/data/products';

export function SuccessStories() {
  const { t, locale } = useLanguage();

  const stories = [
    {
      id: 'ahmed-m',
      name: 'Ahmed M.',
      role: 'Bodybuilder Amateur, Casablanca',
      goal: t('gainMuscle'),
      quote: locale === 'fr' 
        ? "Grâce au NutriMaroc Whey Isolate et une nutrition rigoureuse, j'ai gagné 5kg de muscle sec en seulement 3 mois. La qualité est incomparable."
        : "بفضل آيزوليت نيوترالماروك وتغذية دقيقة، اكتسبت 5 كغ من العضلات الصافية في 3 أشهر فقط. الجودة لا تضاهى.",
      image: '/nutrimaroc_athlete_lifestyle_gym_1775455036252.png',
      stack: ['nm-1', 'nm-2'],
      stats: [
        { label: locale === 'fr' ? 'Poids' : 'الوزن', value: '+5kg' },
        { label: 'Bodyfat', value: '-2%' },
      ]
    },
    {
      id: 'fatima-z',
      name: 'Fatima Z.',
      role: 'Crossfit Athlete, Marrakech',
      goal: t('energy'),
      quote: locale === 'fr' 
        ? "NutriMaroc Pure Creatine a radicalement changé ma capacité d'endurance pendant mes WODs. Je récupère beaucoup plus vite."
        : "كرياتين نيوترالماروك غيّر قدرتي على التحمل تماماً أثناء التمارين. أتعافى بشكل أسرع بكثير.",
      image: '/nutrimaroc_athlete_lifestyle_coast_1775455054654.png',
      stack: ['nm-2', '8'],
      stats: [
        { label: 'Endurance', value: '+30%' },
        { label: 'Recovery', value: 'Fast' },
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#050914] relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] opacity-20" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                <Star className="h-6 w-6 fill-primary" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Histoires de Succès</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white italic">
              ILS ONT <span className="text-primary tracking-widest">RELEVÉ LE DÉFI</span>
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Button variant="ghost" className="text-primary hover:bg-primary/10 font-bold uppercase tracking-widest text-xs gap-3 p-0">
              {locale === 'fr' ? 'VOIR TOUTES LES TRANSFORMATIONS' : 'مشاهدة جميع التحولات'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/20 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative group hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Photo & Goal */}
                <div className="w-full md:w-1/3 shrink-0 space-y-6">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-primary px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-white text-center">
                        {story.goal}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {story.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                        <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-1">{stat.label}</div>
                        <div className="text-lg font-black text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote & Stack */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Quote className="h-10 w-10 text-primary/20 mb-6" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-white mb-8">
                      "{story.quote}"
                    </p>
                    <div className="mb-10">
                      <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">{story.name}</h4>
                      <p className="text-xs font-medium text-muted-foreground">{story.role}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-5">LE SON STACK PERFORMANCE</h5>
                    <div className="flex flex-wrap gap-4">
                      {story.stack.map(pId => {
                        const product = getProduct(pId);
                        if (!product) return null;
                        return (
                          <div key={pId} className="flex items-center gap-3 bg-white/5 pr-4 py-2 pl-2 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group/item">
                             <div className="h-10 w-10 bg-white rounded-lg p-1 overflow-hidden shrink-0 shadow-lg">
                               <img src={product.images[0]} alt={product.name[locale]} className="w-full h-full object-contain" />
                             </div>
                             <span className="text-[10px] font-bold text-white uppercase tracking-tighter line-clamp-1">{product.name[locale]}</span>
                             <div className="h-5 w-5 bg-primary text-white rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                               <Plus className="h-3 w-3" />
                             </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
