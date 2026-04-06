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
      desc: locale === 'fr' ? 'Optimisez votre hypertrophie avec nos protocoles de nutrition avancés.' : 'حسّن تضخم عضلاتك مع بروتوكولات التغذية المتقدمة لدينا.',
      icon: Dumbbell,
      image: '/goals/masse_musculaire.png',
      accent: 'electric',
      tag: locale === 'fr' ? 'Best for Strength' : 'الأفضل للقوة',
    },
    {
      id: 'lose-weight',
      title: locale === 'fr' ? 'Perte de Poids' : 'فقدان الوزن',
      subtitle: locale === 'fr' ? 'Définition & Santé' : 'تحديد وصحة',
      desc: locale === 'fr' ? 'Brûlez les graisses tout en préservant votre masse musculaire sèche.' : 'احرق الدهون مع الحفاظ على كتلة عضلاتك الصافية.',
      icon: Target,
      image: '/goals/perte_poids.png',
      accent: 'blue-500',
      tag: locale === 'fr' ? 'Metabolism Boost' : 'تحفيز الأيض',
    },
    {
      id: 'energy',
      title: locale === 'fr' ? 'Énergie & Focus' : 'طاقة وتركيز',
      subtitle: locale === 'fr' ? 'Endurance & Mental' : 'تحمل وذهن',
      desc: locale === 'fr' ? 'Dominez vos entraînements avec une clarté mentale et une énergie infinie.' : 'سيطر على تمارينك بوضوح ذهني وطاقة لا نهائية.',
      icon: Zap,
      image: '/goals/energie_focus.png',
      accent: 'purple-500',
      tag: locale === 'fr' ? 'High Performance' : 'أداء عالي',
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-obsidian grain-overlay">
      {/* Background Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[10%] left-[5%] w-1px h-[80%] bg-gradient-to-b from-transparent via-electric/20 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <Activity className="h-4 w-4 text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Coach Virtuel NutriMaroc</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] text-white italic">
               VOTRE <span className="text-electric">DESTIN</span> <br />
               COMENCE ICI.
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl mx-auto italic">
              {locale === 'fr' 
                ? 'Une approche scientifique personnalisée. Sélectionnez votre objectif prioritaire.'
                : 'نهج علمي مخصص. اختر هدفك الرئيسي.'}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelectedGoal(goal.id)}
              className={cn(
                "group relative h-[650px] rounded-[3.5rem] overflow-hidden border-2 transition-all duration-700 cursor-pointer shadow-2xl",
                selectedGoal === goal.id 
                  ? "border-electric ring-4 ring-electric/20 scale-105" 
                  : "border-white/5 hover:border-white/20"
              )}
            >
              {/* Background Image with Ken Burns Effect on hover */}
              <img 
                src={goal.image} 
                alt={goal.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-[8s] ease-out",
                  selectedGoal === goal.id ? "scale-110" : "group-hover:scale-110"
                )}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-700 opacity-40",
                goal.accent === 'electric' ? "bg-electric/20" : 
                goal.accent === 'blue-500' ? "bg-blue-600/20" : "bg-purple-600/20",
                selectedGoal === goal.id ? "opacity-60" : "group-hover:opacity-60"
              )} />
              
              {/* Selection Indicator */}
              <div className={cn(
                "absolute top-10 right-10 flex items-center justify-center h-12 w-12 rounded-full border-2 border-white/20 backdrop-blur-xl transition-all duration-500",
                selectedGoal === goal.id ? "bg-electric border-electric scale-110" : "bg-black/40"
              )}>
                 {selectedGoal === goal.id && <CheckCircle2 className="h-6 w-6 text-black" />}
              </div>

              {/* Tag Selection */}
              <div className="absolute top-10 left-10">
                 <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                    {goal.tag}
                 </div>
              </div>

              {/* Content Box */}
              <div className="absolute inset-x-0 bottom-0 p-12 space-y-8 transform transition-transform duration-700 group-hover:translate-y-[-10px]">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "h-px w-6 bg-current opacity-40",
                      goal.accent === 'electric' ? "text-electric" : goal.accent === 'blue-500' ? "text-blue-400" : "text-purple-400"
                    )} />
                    <span className={cn(
                      "text-xs font-black uppercase tracking-widest",
                      goal.accent === 'electric' ? "text-electric" : goal.accent === 'blue-500' ? "text-blue-400" : "text-purple-400"
                    )}>
                       {goal.subtitle}
                    </span>
                  </div>
                  <h3 className="text-4xl font-display font-black uppercase tracking-tight text-white leading-none italic">
                    {goal.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-base leading-relaxed font-medium italic opacity-80">
                  {goal.desc}
                </p>

                <div className="pt-2">
                  <Button 
                    className={cn(
                      "w-full rounded-[2rem] px-8 py-8 font-black uppercase tracking-[0.2em] transition-all duration-500 group/btn",
                      selectedGoal === goal.id 
                        ? "bg-electric text-black shadow-[0_0_40px_rgba(212,255,0,0.4)]" 
                        : "bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black"
                    )}
                  >
                    {t('discoverMore')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedGoal && (
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mt-16 flex justify-center"
           >
              <div className="flex flex-col items-center gap-6 p-8 rounded-[2.5rem] bg-electric/10 border border-electric/20 backdrop-blur-xl">
                 <p className="text-white font-black uppercase tracking-widest text-xs">Analyse du profil en cours...</p>
                 <div className="h-1 w-64 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
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
