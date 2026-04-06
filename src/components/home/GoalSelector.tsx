import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell, Zap, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GoalSelector() {
  const { t, locale } = useLanguage();

  const goals = [
    {
      id: 'gain-muscle',
      title: t('gainMuscle'),
      desc: locale === 'fr' ? 'Prenez de la masse musculaire de qualité avec nos protéines et créatines' : 'ابنِ عضلاتك بجودة عالية مع البروتينات والكرياتين لدينا',
      icon: Dumbbell,
      image: '/nutrimaroc_athlete_lifestyle_gym_1775455036252.png',
      color: 'from-blue-600/20 to-blue-900/40',
      accent: 'text-blue-400',
    },
    {
      id: 'lose-weight',
      title: t('loseWeight'),
      desc: locale === 'fr' ? 'Brûlez les graisses et affinez votre silhouette' : 'احرق الدهون وحسّن مظهر جسمك',
      icon: Target,
      image: '/nutrimaroc_athlete_lifestyle_coast_1775455054654.png',
      color: 'from-purple-600/20 to-purple-900/40',
      accent: 'text-purple-400',
    },
    {
      id: 'energy',
      title: t('energy'),
      desc: locale === 'fr' ? 'Améliorez votre endurance et votre focus pendant l’entraînement' : 'حسّن قدرتك على التحمل وتركيزك أثناء التمرين',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      color: 'from-yellow-600/20 to-yellow-900/40',
      accent: 'text-yellow-400',
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter italic text-white">
              {locale === 'fr' ? 'Quel est votre ' : 'ما هو '}
              <span className="text-primary tracking-widest">{locale === 'fr' ? 'OBJECTIF ?' : 'هدفك؟'}</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              {locale === 'fr' 
                ? 'Sélectionnez votre parcours pour découvrir les produits adaptés à vos besoins spécifiques.'
                : 'اختر مسارك لاكتشاف المنتجات المناسبة لاحتياجاتك الخاصة.'}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl"
            >
              {/* Background Image */}
              <img 
                src={goal.image} 
                alt={goal.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={cn("absolute inset-0 bg-gradient-to-t via-black/40 to-transparent", goal.color)} />
              <div className="absolute inset-0 bg-black/60 opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end gap-6 items-start">
                <div className={cn("p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10", goal.accent)}>
                  <goal.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-display font-black uppercase tracking-tight text-white leading-none">
                    {goal.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-[250px] font-medium">
                    {goal.desc}
                  </p>
                </div>

                <Button 
                  className="mt-4 rounded-xl px-6 py-6 font-bold bg-white text-black hover:bg-primary hover:text-white transition-all group/btn"
                >
                  {locale === 'fr' ? 'Démarrer le parcours' : 'ابدأ المسار'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
