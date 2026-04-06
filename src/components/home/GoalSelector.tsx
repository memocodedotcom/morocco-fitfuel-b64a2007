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
      accent: 'terracotta',
      tag: locale === 'fr' ? 'Metabolism Boost' : 'تحفيز الأيض',
    },
    {
      id: 'energy',
      title: locale === 'fr' ? 'Énergie & Focus' : 'طاقة وتركيز',
      subtitle: locale === 'fr' ? 'Endurance & Mental' : 'تحمل وذهن',
      desc: locale === 'fr' ? 'Dominez vos entraînements avec une clarté mentale et une énergie infinie.' : 'سيطر على تمارينك بوضوح ذهني وطاقة لا نهائية.',
      icon: Zap,
      image: '/goals/energie_focus.png',
      accent: 'sage',
      tag: locale === 'fr' ? 'High Performance' : 'أداء عالي',
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-obsidian grain-organic">
      {/* Background Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[10%] left-[5%] w-px h-[80%] bg-gradient-to-b from-transparent via-terracotta/20 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center max-w-5xl mx-auto mb-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full glass-sage border-sage/20"
          >
            <Activity className="h-4 w-4 text-electric" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/90">Analyse de Performance NutriMaroc</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-huge font-display font-black uppercase tracking-tighter leading-[0.75] text-white italic">
               VOTRE <span className="text-electric">DESTIN</span> <br />
               COMMENCE ICI.
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto italic border-r-2 border-sage/40 pr-8">
              {locale === 'fr' 
                ? 'Une approche scientifique personnalisée pour libérer votre plein potentiel athlétique.'
                : 'نهج علمي مخصص لإطلاق كامل إمكاناتك الرياضية.'}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelectedGoal(goal.id)}
              className={cn(
                "group relative h-[700px] rounded-[4rem] overflow-hidden border-2 transition-all duration-1000 cursor-pointer shadow-3xl",
                selectedGoal === goal.id 
                  ? "border-electric ring-8 ring-electric/5 scale-[1.02]" 
                  : "border-white/5 hover:border-white/20"
              )}
            >
              {/* Background Image with Ken Burns Effect */}
              <img 
                src={goal.image} 
                alt={goal.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-[12s] ease-out grayscale-[0.5]",
                  selectedGoal === goal.id ? "scale-110 grayscale-0" : "group-hover:scale-110 group-hover:grayscale-0"
                )}
              />
              
              {/* Overlays - Refined Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-1000 opacity-20",
                goal.accent === 'electric' ? "bg-electric" : 
                goal.accent === 'terracotta' ? "bg-terracotta" : "bg-sage",
                selectedGoal === goal.id ? "opacity-40" : "group-hover:opacity-40"
              )} />
              
              {/* Selection Indicator - Physical Detail */}
              <div className={cn(
                "absolute top-12 right-12 flex items-center justify-center h-14 w-14 rounded-full border-2 border-white/20 backdrop-blur-3xl transition-all duration-700 shadow-2xl",
                selectedGoal === goal.id ? "bg-electric border-electric scale-110" : "bg-black/60"
              )}>
                 {selectedGoal === goal.id ? (
                   <CheckCircle2 className="h-7 w-7 text-black" />
                 ) : (
                   <div className="h-2 w-2 rounded-full bg-white/40" />
                 )}
              </div>

              {/* Tag - Subtle */}
              <div className="absolute top-12 left-12">
                 <div className="px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 text-[9px] font-black uppercase tracking-[0.3em] text-white/80">
                    {goal.tag}
                 </div>
              </div>

              {/* Content Box - Asymmetrical Padding */}
              <div className="absolute inset-x-0 bottom-0 p-14 space-y-10 transform transition-transform duration-1000 group-hover:translate-y-[-10px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "h-[2px] w-8 transition-all duration-1000",
                      selectedGoal === goal.id ? "w-16 bg-white" : "bg-white/40",
                      goal.accent === 'electric' ? "text-electric" : goal.accent === 'terracotta' ? "text-terracotta" : "text-sage-light"
                    )} />
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-1000",
                      selectedGoal === goal.id ? "text-white" : "text-white/40",
                    )}>
                       {goal.subtitle}
                    </span>
                  </div>
                  <h3 className="text-5xl font-display font-black uppercase tracking-tighter text-white leading-[0.8] italic">
                    {goal.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed font-medium italic opacity-70 group-hover:opacity-100 transition-opacity duration-1000">
                  {goal.desc}
                </p>

                <div className="pt-4">
                  <Button 
                    className={cn(
                      "w-full h-20 rounded-[2.5rem] px-10 font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-1000 group/btn border-2",
                      selectedGoal === goal.id 
                        ? "bg-electric text-black border-electric shadow-[0_0_50px_rgba(212,255,0,0.4)]" 
                        : "bg-white/5 backdrop-blur-2xl text-white border-white/10 hover:bg-white hover:text-black hover:border-white"
                    )}
                  >
                    {t('discoverMore')}
                    <div className="ml-4 h-10 w-10 rounded-full bg-current opacity-10 flex items-center justify-center group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all duration-500">
                      <ChevronRight className="h-5 w-5" />
                    </div>
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
             className="mt-20 flex justify-center"
           >
              <div className="flex flex-col items-center gap-8 p-12 rounded-[3.5rem] glass-sage border-sage/20 backdrop-blur-3xl shadow-4xl max-w-md w-full border-2">
                 <div className="p-4 rounded-3xl bg-electric/10 border border-electric/20 relative">
                   <Activity className="h-8 w-8 text-electric" />
                   <div className="absolute inset-0 rounded-3xl bg-electric/20 blur-xl animate-pulse" />
                 </div>
                 <div className="space-y-4 text-center">
                    <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">{t('analyzeProfile')}</p>
                    <p className="text-slate-400 text-xs italic font-medium opacity-80">{t('protocolGeneration')}</p>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="h-full bg-electric shadow-[0_0_20px_rgba(212,255,0,0.6)]"
                    />
                 </div>
              </div>
           </motion.div>
        )}
      </div>
    </section>
  );
}
