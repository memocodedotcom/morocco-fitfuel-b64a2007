import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheck, TestTube2, BadgeCheck, FileText, Globe2, Beaker } from 'lucide-react';

export function QualitySeal() {
  const { t, locale } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: locale === 'fr' ? '100% Authentique' : '100% أصلي',
      desc: locale === 'fr' ? 'Approvisionnement direct auprès des marques officielles.' : 'توريد مباشر من العلامات التجارية الرسمية.',
    },
    {
      icon: TestTube2,
      title: locale === 'fr' ? 'Laboratoire Indépendant' : 'مختبر مستقل',
      desc: locale === 'fr' ? 'Chaque lot est testé pour garantir la pureté et le dosage.' : 'يتم اختبار كل دفعة لضمان النقاء والجرعة.',
    },
    {
      icon: BadgeCheck,
      title: locale === 'fr' ? 'Certification ONSSA' : 'شهادة ONSSA',
      desc: locale === 'fr' ? 'Tous nos produits sont conformes aux normes sanitaires au Maroc.' : 'جميع منتجاتنا متوافقة مع المعايير الصحية في المغرب.',
    },
    {
      icon: FileText,
      title: locale === 'fr' ? 'Transparence Totale' : 'شفافية كاملة',
      desc: locale === 'fr' ? 'Consultez les COA (Certificats d’Analyse) sur simple demande.' : 'اطلع على شهادات التحليل عند الطلب.',
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      
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
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <Globe2 className="h-5 w-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 font-display">Science & Performance</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-[#020617] leading-[0.9]">
                LA QUALITÉ <br />
                <span className="text-primary italic">SANS COMPROMIS.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-lg">
                {locale === 'fr' 
                  ? "Chez NutriMaroc, nous croyons que la performance commence par la confiance. Nos protocoles de test sont les plus rigoureux du Royaume."
                  : "في نوتريماروك، نؤمن أن الأداء يبدأ بالثقة. بروتوكولات الاختبار لدينا هي الأكثر صرامة في المملكة."}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              {values.map((v, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-[#020617] text-white shadow-xl shadow-black/10">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-[#020617]">{v.title}</h4>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80" 
                alt="Laboratory testing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-blue-900/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2rem] shadow-2xl text-white">
                <div className="flex items-center gap-6">
                   <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                      <Beaker className="h-8 w-8 text-black" />
                   </div>
                   <div>
                      <h4 className="text-xl font-black uppercase tracking-tight mb-1">Certificats Accessibles</h4>
                      <p className="text-xs font-medium opacity-80 leading-relaxed max-w-[250px]">Récupérez les fiches techniques complètes de vos produits par lot.</p>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 h-32 w-32 bg-white rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl border-4 border-[#020617] z-20">
                <div className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Approuvé par</div>
                <div className="text-lg font-black text-[#020617] tracking-tight leading-none mb-1">MAROC EXPORT</div>
                <div className="h-1 w-8 bg-primary mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
