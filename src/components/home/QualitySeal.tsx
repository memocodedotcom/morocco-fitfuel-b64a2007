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
    <section className="py-32 bg-obsidian relative overflow-hidden">
      {/* Precision Structural Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-12 gap-24 items-center max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 space-y-16"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-electric" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-electric">PROTOCOLE DE QUALITÉ</span>
              </div>
              <h2 className="text-huge font-display font-extrabold uppercase tracking-tight text-white leading-[0.85]">
                L'OBSESSION <br />
                <span className="text-white/30">SCIENTIFIQUE.</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl font-normal leading-relaxed border-l border-white/10 pl-8">
                {locale === 'fr' 
                  ? "Chez NutriMaroc, chaque lot subit une analyse rigoureuse. Nous ne vendons pas seulement des compléments; nous certifions votre potentiel."
                  : "في نوتريماروك، تخضع كل دفعة لتحليل صارم. نحن لا نبيع المكملات الغذائية فحسب؛ نحن نصادق على إمكاناتك."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 pr-12">
              {values.map((v, idx) => (
                <motion.div 
                  key={idx} 
                  className="space-y-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-px w-4 bg-white/20 mt-3 group-hover:bg-electric transition-all group-hover:w-8" />
                    <div className="space-y-2">
                       <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white">{v.title}</h4>
                       <p className="text-sm font-normal text-slate-500 leading-relaxed opacity-80">{v.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/[0.05] group bg-white/[0.02]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90" 
                alt="Analytical Excellence" 
                className="w-full h-full object-cover opacity-60 grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Data Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest text-white/40">
                    <span>ANALYSE HPLC</span>
                    <span className="text-electric">PASS 99.8%</span>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                  <p className="text-[11px] font-normal text-slate-300 leading-relaxed opacity-80">
                    Contrôle systématique des impuretés et validation du dosage pour chaque unité produite.
                  </p>
                </div>
              </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 right-0 h-16 w-16 border-t border-r border-electric/20 translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-electric/20 -translate-x-4 translate-y-4" />
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
