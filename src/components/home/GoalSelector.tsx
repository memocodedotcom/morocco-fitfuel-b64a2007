import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Zap, Target, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function GoalSelector() {
  const { t, locale } = useLanguage();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    {
      id: 'gain-muscle',
      title: locale === 'fr' ? 'Masse Musculaire' : 'كتلة عضلية',
      subtitle: locale === 'fr' ? 'Force & Volume' : 'قوة وضخامة',
      desc: locale === 'fr' ? 'Optimisez votre hypertrophie avec nos protocoles de nutrition avancés.' : 'حسن تضخم عضلاتك مع بروتوكولات التغذية المتقدمة لدينا.',
      image: '/goals/masse_musculaire.png',
      accent: 'electric',
      tag: locale === 'fr' ? 'Best for Strength' : 'الأفضل للقوة',
    },
    {
      id: 'lose-weight',
      title: locale === 'fr' ? 'Perte de Poids' : 'فقدان الوزن',
      subtitle: locale === 'fr' ? 'Définition & Santé' : 'تحديد وصحة',
      desc: locale === 'fr' ? 'Brûlez les graisses tout en préservant votre masse musculaire sèche.' : 'احرق الدهون مع الحفاظ على كتلة عضلاتك الصافية.',
      image: '/goals/perte_poids.png',
      accent: 'terracotta',
      tag: locale === 'fr' ? 'Metabolism Boost' : 'تحفيز الأيض',
    },
    {
      id: 'energy',
      title: locale === 'fr' ? 'Énergie & Focus' : 'طاقة وتركيز',
      subtitle: locale === 'fr' ? 'Endurance & Mental' : 'تحمل وذهن',
      desc: locale === 'fr' ? 'Dominez vos entraînements avec une clarté mentale et une énergie infinie.' : 'سيطر على تمارينك بوضوح ذهني وطاقة لا حصر لها.',
      image: '/goals/energie_focus.png',
      accent: 'teal',
      tag: locale === 'fr' ? 'Total Performance' : 'أداء كامل',
    }
  ];

  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-black atmospheric-depth">
      <div className="container relative z-10 px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 md:mb-48 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8 lg:max-w-2xl">
            <div className="flex items-center gap-6">
              <div className="h-px w-12 bg-electric/30" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-electric/60">VOTRE PROTOCOLE</span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tight text-white leading-none">
                VOTRE
              </h2>
              <h3 className="serif-display text-5xl md:text-9xl text-white/40 leading-none -mt-4 ml-6 md:ml-12">
                objectif.
              </h3>
            </motion.div>
          </div>
          
          <div className="lg:max-w-md">
            <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed opacity-70 border-l border-white/5 pl-8 md:pl-12 py-2">
              {locale === 'fr' 
                ? "Une analyse précise de vos besoins métaboliques pour une optimisation athlétique absolue et une maîtrise totale de votre performance."
                : "تحليل دقيق لاحتياجاتك الأيضية لتحقيق تحسين رياضي مطلق وسيطرة كاملة على أدائك."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedGoal(goal.id)}
              className={cn(
                "group relative aspect-[3/4.5] rounded-sm border transition-all duration-700 cursor-pointer overflow-hidden shadow-2xl",
                selectedGoal === goal.id 
                  ? "border-electric/40 bg-white/[0.03]" 
                  : "border-white/[0.05] hover:border-white/10 bg-white/[0.01]"
              )}
            >
              <img 
                src={goal.image} 
                alt={goal.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0",
                  selectedGoal === goal.id ? "scale-105 grayscale-0 opacity-40" : "opacity-30 group-hover:opacity-50"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                     <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-electric">
                       {goal.subtitle}
                     </span>
                     {selectedGoal === goal.id && (
                       <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_#D4FF00]" />
                     )}
                  </div>
                  <h3 className="serif-display text-4xl md:text-5xl text-white group-hover:text-electric transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal leading-relaxed opacity-60 line-clamp-2">
                    {goal.desc}
                  </p>
                </div>

                <div className="relative overflow-hidden">
                   <Button 
                    variant="outline"
                    className={cn(
                      "w-full h-14 rounded-sm font-extrabold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 shadow-none border-white/5",
                      selectedGoal === goal.id 
                        ? "bg-white text-black border-white" 
                        : "bg-transparent text-white hover:bg-white hover:text-black"
                    )}
                  >
                    {selectedGoal === goal.id ? (locale === 'fr' ? 'SÉLECTIONNÉ' : 'تم الاختيار') : (locale === 'fr' ? 'SÉLECTIONNER' : 'اختيار')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedGoal && (
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="mt-16 flex justify-center"
           >
              <div className="flex flex-col items-center gap-6 p-10 rounded-sm border border-white/[0.05] bg-white/[0.02] backdrop-blur-3xl max-w-md w-full">
                 <div className="p-3 rounded-sm bg-electric/10 border border-electric/20">
                   <Activity className="h-6 w-6 text-electric" />
                 </div>
                 <div className="space-y-2 text-center">
                    <p className="text-white font-extrabold uppercase tracking-widest text-[10px]">{t('analyzeProfile')}</p>
                    <p className="text-slate-500 text-[11px] font-normal">{t('protocolGeneration')}</p>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-none overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="h-full bg-electric"
                    />
                 </div>
              </div>
           </motion.div>
        )}
      </div>
    </section>
  );
}
