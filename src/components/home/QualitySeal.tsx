import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, FlaskConical } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function QualitySeal() {
  const { t, locale } = useLanguage();
  
  const seals = [
    { icon: ShieldCheck, label: t('promoAuthentic'), sub: "OFFICIAL IMPORT" },
    { icon: FlaskConical, label: "CERTIFIED PURE", sub: "LAB TESTED" },
    { icon: Award, label: "ELITE GRADE", sub: "PEAK PERFORMANCE" }
  ];

  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
       <div className="container relative z-10 px-4">
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32">
             {seals.map((seal, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-6 group"
                >
                   <div className="h-20 w-20 flex items-center justify-center rounded-full border border-white/10 group-hover:border-electric transition-colors duration-500 relative">
                      <seal.icon className="h-8 w-8 text-white/40 group-hover:text-electric transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-electric opacity-0 group-hover:opacity-5 transition-opacity blur-xl" />
                   </div>
                   <div className="flex flex-col items-center">
                      <span className="text-[10px] font-black uppercase tracking-[.4em] text-white/80">{seal.label}</span>
                      <span className="text-[8px] font-extrabold uppercase tracking-[.2em] text-slate-600 mt-1">{seal.sub}</span>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
