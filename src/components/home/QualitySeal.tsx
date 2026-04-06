import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheck, TestTube2, BadgeCheck, FileText, Globe2, Beaker, Zap, Activity, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function QualitySeal() {
  const { t, locale } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: locale === 'fr' ? '100% Authentique' : '100% أصلي',
      desc: locale === 'fr' ? 'Approvisionnement direct auprès des marques officielles.' : 'توريد مباشر من العلامات التجارية الرسمية.',
      detail: locale === 'fr' ? 'Nous travaillons uniquement avec des distributeurs agréés.' : 'نحن نعمل فقط مع الموزعين المعتمدين.',
      color: 'text-electric'
    },
    {
      icon: TestTube2,
      title: locale === 'fr' ? 'Laboratoire Indépendant' : 'مختبر مستقل',
      desc: locale === 'fr' ? 'Chaque lot est testé pour garantir la pureté et le dosage.' : 'يتم اختبار كل دفعة لضمان النقاء والجرعة.',
      detail: locale === 'fr' ? 'Analyses HPLC systématiques pour chaque batch.' : 'تحليلات HPLC منهجية لكل دفعة.',
      color: 'text-blue-400'
    },
    {
      icon: BadgeCheck,
      title: locale === 'fr' ? 'Certification ONSSA' : 'شهادة ONSSA',
      desc: locale === 'fr' ? 'Tous nos produits sont conformes aux normes sanitaires au Maroc.' : 'جميع منتجاتنا متوافقة مع المعايير الصحية في المغرب.',
      detail: locale === 'fr' ? 'Conformité stricte aux exigences de sécurité alimentaire.' : 'الامتثال الصارم لمتطلبات سلامة الأغذية.',
      color: 'text-green-400'
    },
    {
      icon: FileText,
      title: locale === 'fr' ? 'Transparence Totale' : 'شفافية كاملة',
      desc: locale === 'fr' ? 'Consultez les COA (Certificats d’Analyse) sur simple demande.' : 'اطلع على شهادات التحليل عند الطلب.',
      detail: locale === 'fr' ? 'Accès permanent à la base de données qualité.' : 'وصول دائم إلى قاعدة بيانات الجودة.',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden grain-overlay">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[140px] translate-x-1/4 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-electric/10 text-electric border border-electric/20 shadow-[0_0_15px_rgba(212,255,0,0.2)]">
                  <Activity className="h-5 w-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-electric font-display">Performance Laboratory</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white leading-[0.9]">
                LA QUALITÉ <br />
                <span className="text-electric italic drop-shadow-[0_0_10px_rgba(212,255,0,0.3)]">OBSESSIONNELLE.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
                {locale === 'fr' 
                  ? "Chez NutriMaroc, nous ne vendons pas seulement des compléments. Nous vendons une certitude scientifique pour l'élite athlétique marocaine."
                  : "في نوتريماروك، لا نبيع المكملات الغذائية فحسب. نحن نبيع اليقين العلمي لنخبة الرياضيين المغاربة."}
              </p>
            </div>

            <TooltipProvider>
              <div className="grid sm:grid-cols-2 gap-10">
                {values.map((v, idx) => (
                  <motion.div 
                    key={idx} 
                    className="space-y-4 group cursor-help"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start gap-4">
                          <div className={`h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 ${v.color} shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20`}>
                            <v.icon className="h-6 w-6" strokeWidth={1.5} />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-black uppercase tracking-tight text-white flex items-center gap-2">
                              {v.title}
                              <Info className="h-3 w-3 text-slate-500 group-hover:text-electric transition-colors" />
                            </h4>
                            <p className="text-xs font-medium text-slate-500 leading-relaxed italic">{v.desc}</p>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-900 border-slate-800 text-slate-200 p-3 max-w-[200px]">
                        <p className="text-xs font-semibold mb-1 text-electric uppercase tracking-wider">Détails Techniques</p>
                        <p className="text-[11px] leading-snug">{v.detail}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </TooltipProvider>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-auto md:h-[650px] rounded-[3.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90" 
                alt="Elite athlete training" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              
              {/* Lab Overlay UI */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="glass-primary px-6 py-2 rounded-full flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-electric animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Quality Control Check</span>
                  </div>
                </div>

                <div className="p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl text-white transform transition-all duration-700 hover:translate-y-[-5px] hover:bg-white/10">
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 bg-electric rounded-[2rem] flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.4)] shrink-0 group-hover:rotate-12 transition-transform duration-500">
                      <Zap className="h-10 w-10 text-black fill-black" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase tracking-tight mb-2 italic">Standard de l'Élite</h4>
                      <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-[300px]">Chaque gramme est vérifié. Chaque résultat est prouvé. La performance pure, certifiée par NutriMaroc.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-10 left-10 h-24 w-24 bg-electric rounded-full flex flex-col items-center justify-center text-center p-3 shadow-[0_0_40px_rgba(212,255,0,0.3)] z-20 rotate-[-10deg]">
                <div className="text-[8px] font-black uppercase tracking-tighter text-black/60">Maroc</div>
                <div className="text-sm font-black text-black tracking-tight leading-none mb-1 uppercase">Certifié</div>
                <div className="h-[2px] w-8 bg-black mx-auto" />
                <div className="text-[10px] font-black text-black mt-1">100% PURE</div>
              </div>
            </div>

            {/* Technical Detail Cards floating around */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -right-10 top-1/4 glass-primary p-4 rounded-2xl border-electric/30 hidden xl:block"
            >
              <div className="flex items-center gap-3">
                 <div className="h-8 w-8 bg-electric/20 rounded-lg flex items-center justify-center text-electric">
                    <CheckCircle className="h-4 w-4" />
                 </div>
                 <div className="text-[10px] font-bold text-white uppercase tracking-wider">Puretée ISO 9001</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
