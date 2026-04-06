export interface Product {
  id: string;
  slug: string;
  name: { fr: string; ar: string };
  description: { fr: string; ar: string };
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  stock: number;
  flavors?: string[];
  sizes?: string[];
  ingredients?: { fr: string; ar: string };
  suggestedUse?: { fr: string; ar: string };
  expirationDate?: string;
  tags?: string[];
  goalTags?: string[];
  crossSellIds?: string[];
  /** As printed on label */
  manufacturerName?: string;
  countryOfOrigin?: { fr: string; ar: string };
  allergens?: { fr: string; ar: string };
  extraVerificationNote?: { fr: string; ar: string };
  /** Public COA / spec sheet PDF URL when approved */
  coaUrl?: string;
  /** When true, show “certificate available on request” instead of a public PDF */
  certificateOnRequest?: boolean;
  /** High-caffeine / stimulant pre-workout — show age & health notice */
  stimulantWarning?: boolean;
}

export interface Category {
  id: string;
  name: { fr: string; ar: string };
  icon: string;
  slug: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  comment: { fr: string; ar: string };
  verified: boolean;
}

export const categories: Category[] = [
  { id: 'protein', name: { fr: 'Protéines', ar: 'بروتين' }, icon: 'dumbbell', slug: 'proteines' },
  { id: 'creatine', name: { fr: 'Créatine', ar: 'كرياتين' }, icon: 'zap', slug: 'creatine' },
  { id: 'vitamins', name: { fr: 'Vitamines', ar: 'فيتامينات' }, icon: 'pill', slug: 'vitamines' },
  { id: 'pre-workout', name: { fr: 'Pré-Workout', ar: 'بري ووركاوت' }, icon: 'flame', slug: 'pre-workout' },
  { id: 'weight-loss', name: { fr: 'Perte de Poids', ar: 'إنقاص الوزن' }, icon: 'trending-down', slug: 'perte-de-poids' },
  { id: 'mass-gainer', name: { fr: 'Mass Gainer', ar: 'ماس جينر' }, icon: 'weight', slug: 'mass-gainer' },
];

export const brands: Brand[] = [
  { id: 'on', name: 'Optimum Nutrition', logo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=120&h=60&fit=crop&auto=format' },
  { id: 'dymatize', name: 'Dymatize', logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&h=60&fit=crop&auto=format' },
  { id: 'muscletech', name: 'MuscleTech', logo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=120&h=60&fit=crop&auto=format' },
  { id: 'bsn', name: 'BSN', logo: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=120&h=60&fit=crop&auto=format' },
  { id: 'cellucor', name: 'Cellucor', logo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=120&h=60&fit=crop&auto=format' },
  { id: 'myprotein', name: 'MyProtein', logo: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=120&h=60&fit=crop&auto=format' },
  { id: 'nutrimaroc', name: 'NutriMaroc', logo: '/nutrimaroc_whey_isolate_1775454989201.png' },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'gold-standard-whey',
    name: { fr: 'Gold Standard 100% Whey', ar: 'جولد ستاندرد 100% واي' },
    description: {
      fr: 'La protéine whey la plus vendue au monde. 24g de protéines par dose, faible en sucre et en graisse. Idéale pour la récupération musculaire après l\'entraînement.',
      ar: 'بروتين الواي الأكثر مبيعاً في العالم. 24 غرام بروتين في كل جرعة، منخفض السكر والدهون. مثالي لاستشفاء العضلات بعد التمرين.'
    },
    price: 899,
    originalPrice: 1099,
    images: [
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1612532275185-6e2e5a2b4629?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'protein',
    brand: 'Optimum Nutrition',
    rating: 4.8,
    reviewCount: 234,
    stock: 12,
    flavors: ['Double Rich Chocolate', 'Vanilla Ice Cream', 'Strawberry Banana'],
    sizes: ['908g', '2.27kg', '4.54kg'],
    ingredients: {
      fr: 'Mélange protéique (isolat de protéine de lactosérum, concentré de protéine de lactosérum, peptides de lactosérum), cacao, lécithine, arôme naturel et artificiel.',
      ar: 'مزيج بروتيني (عزل بروتين مصل اللبن، مركز بروتين مصل اللبن، ببتيدات مصل اللبن)، كاكاو، ليسيثين، نكهة طبيعية واصطناعية.'
    },
    suggestedUse: {
      fr: 'Mélanger 1 dosette (30.4g) avec 180-240ml d\'eau froide ou de lait. Consommer 1-2 fois par jour.',
      ar: 'اخلط مغرفة واحدة (30.4 غ) مع 180-240 مل من الماء البارد أو الحليب. تناول 1-2 مرة يومياً.'
    },
    expirationDate: '2027-03-15',
    tags: ['best-seller', 'flash-sale'],
    goalTags: ['gain-muscle', 'lose-weight'],
    crossSellIds: ['5', '7'],
    manufacturerName: 'Optimum Nutrition, Inc.',
    countryOfOrigin: { fr: 'Fabriqué aux États-Unis', ar: 'صُنع في الولايات المتحدة' },
    allergens: {
      fr: 'Contient du lait (lactose). Peut contenir des traces de soja et de céréales contenant du gluten.',
      ar: 'يحتوي على الحليب (اللاكتوز). قد يحوي آثار فول الصويا والحبوب التي تحتوي على الغلوتين.',
    },
    extraVerificationNote: {
      fr: 'Traçabilité par numéro de lot sur l’étiquette. Analyses fournisseur disponibles sur demande pour les lots en stock.',
      ar: 'التتبع عبر رقم الدُفعة على الملصق. تقارير المورد متاحة عند الطلب للدُفعات المتوفرة.',
    },
    certificateOnRequest: true,
    coaUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '2',
    slug: 'creatine-monohydrate',
    name: { fr: 'Creatine Monohydrate 500g', ar: 'كرياتين مونوهيدرات 500 غ' },
    description: {
      fr: 'Créatine monohydrate pure micronisée. 5g par dose pour augmenter la force, la puissance et le volume musculaire.',
      ar: 'كرياتين مونوهيدرات نقي مطحون ناعماً. 5 غ لكل جرعة لزيادة القوة والطاقة وحجم العضلات.'
    },
    price: 349,
    images: [
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'creatine',
    brand: 'Optimum Nutrition',
    rating: 4.9,
    reviewCount: 178,
    stock: 25,
    sizes: ['300g', '500g', '1kg'],
    expirationDate: '2027-06-01',
    tags: ['best-seller'],
    goalTags: ['gain-muscle', 'energy'],
    crossSellIds: ['1', '4'],
    manufacturerName: 'Optimum Nutrition, Inc.',
    countryOfOrigin: { fr: 'Fabriqué aux États-Unis', ar: 'صُنع في الولايات المتحدة' },
    certificateOnRequest: true,
  },
  {
    id: '3',
    slug: 'c4-original-pre-workout',
    name: { fr: 'C4 Original Pré-Workout', ar: 'C4 أوريجينال بري ووركاوت' },
    description: {
      fr: 'Le pré-workout n°1 en Amérique. Énergie explosive, focus intense et performances améliorées.',
      ar: 'البري ووركاوت رقم 1 في أمريكا. طاقة متفجرة، تركيز مكثف وأداء محسّن.'
    },
    price: 449,
    originalPrice: 549,
    images: [
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'pre-workout',
    brand: 'Cellucor',
    rating: 4.6,
    reviewCount: 156,
    stock: 8,
    flavors: ['Fruit Punch', 'Icy Blue Razz', 'Watermelon', 'Cherry Limeade'],
    expirationDate: '2027-01-20',
    tags: ['flash-sale'],
    goalTags: ['energy', 'gain-muscle'],
    crossSellIds: ['1', '2'],
    manufacturerName: 'Cellucor (Nutrabolt)',
    countryOfOrigin: { fr: 'Fabriqué aux États-Unis', ar: 'صُنع في الولايات المتحدة' },
    stimulantWarning: true,
    certificateOnRequest: true,
    allergens: {
      fr: 'Contient de la caféine. Ne convient pas aux enfants, femmes enceintes ou allaitantes. Personnes sensibles à la caféine : demandez l’avis d’un professionnel de santé.',
      ar: 'يحتوي على الكافيين. غير مناسب للأطفال أو الحوامل أو المرضعات. يُنصح مرضى الحساسية للكافيين باستشارة أخصائي.',
    },
  },
  {
    id: '4',
    slug: 'iso100-hydrolyzed',
    name: { fr: 'ISO100 Hydrolyzed', ar: 'ISO100 هيدروليزد' },
    description: {
      fr: 'Protéine isolat hydrolysée ultra-rapide. 25g de protéines, 0g de sucre. Absorption rapide pour une récupération optimale.',
      ar: 'بروتين آيزوليت محلل مائياً فائق السرعة. 25 غ بروتين، 0 غ سكر. امتصاص سريع لاستشفاء مثالي.'
    },
    price: 999,
    images: [
      'https://images.unsplash.com/photo-1596357395217-80de13130e92?w=600&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1614859324110-86eec4f34bfe?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'protein',
    brand: 'Dymatize',
    rating: 4.7,
    reviewCount: 98,
    stock: 3,
    flavors: ['Gourmet Chocolate', 'Fudge Brownie', 'Cookies & Cream'],
    sizes: ['725g', '1.36kg', '2.27kg'],
    expirationDate: '2026-12-10',
    tags: ['trending'],
    goalTags: ['gain-muscle', 'lose-weight'],
    crossSellIds: ['2', '5'],
    manufacturerName: 'Dymatize Enterprises LLC',
    countryOfOrigin: { fr: 'Fabriqué aux États-Unis', ar: 'صُنع في الولايات المتحدة' },
    allergens: {
      fr: 'Contient du lait. Peut contenir des traces d’œuf, de soja et de noix.',
      ar: 'يحتوي على الحليب. قد يحوي آثار البيض وفول الصويا والمكسرات.',
    },
    certificateOnRequest: true,
  },
  {
    id: '5',
    slug: 'shaker-bottle-premium',
    name: { fr: 'Shaker Premium 700ml', ar: 'شيكر بريميوم 700 مل' },
    description: {
      fr: 'Shaker ergonomique anti-fuites avec boule mélangeuse en acier inoxydable. Capacité 700ml.',
      ar: 'شيكر مريح مانع للتسرب مع كرة خلط من الفولاذ المقاوم للصدأ. سعة 700 مل.'
    },
    price: 79,
    images: [
      'https://images.unsplash.com/photo-1594498653385-d5172c532c00?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'accessories',
    brand: 'Optimum Nutrition',
    rating: 4.5,
    reviewCount: 312,
    stock: 50,
    tags: ['upsell'],
    goalTags: [],
  },
  {
    id: '6',
    slug: 'omega-3-fish-oil',
    name: { fr: 'Omega-3 Fish Oil 120 caps', ar: 'أوميغا-3 زيت السمك 120 كبسولة' },
    description: {
      fr: 'Acides gras essentiels EPA & DHA pour la santé cardiovasculaire, articulaire et cérébrale.',
      ar: 'أحماض دهنية أساسية EPA و DHA لصحة القلب والمفاصل والدماغ.'
    },
    price: 199,
    images: [
      'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'vitamins',
    brand: 'Optimum Nutrition',
    rating: 4.4,
    reviewCount: 67,
    stock: 18,
    expirationDate: '2027-09-01',
    tags: [],
    goalTags: ['lose-weight', 'energy'],
    crossSellIds: ['8'],
  },
  {
    id: '7',
    slug: 'protein-bar-box',
    name: { fr: 'Barre Protéinée x12', ar: 'بار بروتين x12' },
    description: {
      fr: 'Boîte de 12 barres protéinées. 20g de protéines, goût cookie & cream.',
      ar: 'علبة 12 بار بروتين. 20 غ بروتين، بنكهة كوكيز أند كريم.'
    },
    price: 299,
    originalPrice: 359,
    images: [
      'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'protein',
    brand: 'BSN',
    rating: 4.3,
    reviewCount: 89,
    stock: 20,
    tags: ['upsell', 'flash-sale'],
    goalTags: ['gain-muscle'],
    crossSellIds: ['1'],
  },
  {
    id: '8',
    slug: 'multivitamin-daily',
    name: { fr: 'Multivitamines Daily 60 tabs', ar: 'ملتي فيتامين يومي 60 قرص' },
    description: {
      fr: 'Complexe multivitaminé complet. 23 vitamines et minéraux essentiels pour une santé optimale.',
      ar: 'مجمع فيتامينات متعدد كامل. 23 فيتامين ومعدن أساسي لصحة مثالية.'
    },
    price: 149,
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'vitamins',
    brand: 'Optimum Nutrition',
    rating: 4.6,
    reviewCount: 145,
    stock: 30,
    expirationDate: '2027-05-15',
    tags: ['trending'],
    goalTags: ['energy', 'lose-weight'],
    crossSellIds: ['6'],
  },
  {
    id: '9',
    slug: 'serious-mass-gainer',
    name: { fr: 'Serious Mass 2.7kg', ar: 'سيريوس ماس 2.7 كغ' },
    description: {
      fr: 'Gaineur haute calorie. 1250 calories et 50g de protéines par dose pour une prise de masse rapide.',
      ar: 'غينر عالي السعرات. 1250 سعرة حرارية و50 غ بروتين لكل جرعة لزيادة الوزن السريعة.'
    },
    price: 699,
    originalPrice: 849,
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'mass-gainer',
    brand: 'Optimum Nutrition',
    rating: 4.5,
    reviewCount: 112,
    stock: 6,
    flavors: ['Chocolate', 'Vanilla', 'Banana'],
    expirationDate: '2027-02-28',
    tags: ['flash-sale'],
    goalTags: ['gain-muscle'],
    crossSellIds: ['2', '1'],
  },
  {
    id: '10',
    slug: 'fat-burner-hydroxycut',
    name: { fr: 'Hydroxycut Hardcore Elite', ar: 'هيدروكسيكت هاردكور إيليت' },
    description: {
      fr: 'Brûleur de graisse thermogénique puissant. Augmente le métabolisme et l\'énergie.',
      ar: 'حارق دهون حراري قوي. يزيد الأيض والطاقة.'
    },
    price: 399,
    images: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop&auto=format',
    ],
    category: 'weight-loss',
    brand: 'MuscleTech',
    rating: 4.2,
    reviewCount: 78,
    stock: 15,
    expirationDate: '2027-04-10',
    tags: ['trending'],
    goalTags: ['lose-weight', 'energy'],
    crossSellIds: ['6', '8'],
  },
  {
    id: 'nm-1',
    slug: 'nutrimaroc-whey-isolate',
    name: { fr: 'NutriMaroc Whey Isolate', ar: 'واي نيوترالماروك آيزوليت' },
    description: {
      fr: 'La pureté absolue pour les athlètes marocains. Isolat ultra-filtré avec 27g de protéines, sans sucre ni graisses. Le standard d\'excellence pour la récupération.',
      ar: 'أقصى درجات النقاء للرياضيين المغاربة. آيزوليت مفلتر للغاية مع 27 غ بروتين، خالي من السكر والدهون. معيار التميز للأداء.'
    },
    price: 949,
    images: ['/nutrimaroc_whey_isolate_1775454989201.png'],
    category: 'protein',
    brand: 'NutriMaroc',
    rating: 5.0,
    reviewCount: 42,
    stock: 20,
    flavors: ['Chocolat Belge', 'Vanille Pure', 'Amlou (Édition Royale)'],
    sizes: ['1kg', '2kg'],
    tags: ['best-seller', 'trending'],
    goalTags: ['gain-muscle'],
    certificateOnRequest: true,
  },
  {
    id: 'nm-2',
    slug: 'nutrimaroc-pure-creatine',
    name: { fr: 'NutriMaroc Pure Creatine', ar: 'كرياتين نيوترالماروك نقي' },
    description: {
      fr: 'Créatine monohydrate micronisée 200 mesh. Puissance brute et force explosive testée en laboratoire.',
      ar: 'كرياتين مونوهيدرات نقي وميكرونيزد 200 ميش. طاقة خام وقوة متفجرة مختبرة معملياً.'
    },
    price: 389,
    images: ['/nutrimaroc_creatine_pure_1775455002495.png'],
    category: 'creatine',
    brand: 'NutriMaroc',
    rating: 4.9,
    reviewCount: 31,
    stock: 50,
    sizes: ['300g', '500g'],
    tags: ['best-seller'],
    goalTags: ['energy', 'gain-muscle'],
    certificateOnRequest: true,
  },
  {
    id: 'nm-3',
    slug: 'nutrimaroc-extreme-gainer',
    name: { fr: 'NutriMaroc Extreme Gainer', ar: 'نيوترالماروك إكستريم غينر' },
    description: {
      fr: 'Le gainer haute densité pour les "Hard Gainers" marocains. 1650 calories, 60g de protéines et glucides complexes.',
      ar: 'غينر عالي الكثافة لزيادة الوزن بسرعة للرياضيين. 1650 سعرة حرارية، 60 غ بروتين وكربوهيدرات معقدة.'
    },
    price: 749,
    images: ['/nutrimaroc_extreme_gainer_1775455019256.png'],
    category: 'mass-gainer',
    brand: 'NutriMaroc',
    rating: 4.8,
    reviewCount: 19,
    stock: 15,
    flavors: ['Fudge Chocolat', 'Crème Vanille'],
    tags: ['flash-sale'],
    goalTags: ['gain-muscle'],
    certificateOnRequest: true,
  },
];

export const reviews: Review[] = [
  { id: 'r1', productId: '1', author: 'Ahmed M.', rating: 5, date: '2026-03-20', comment: { fr: 'Excellente whey ! Goût incroyable et bonne dissolution. Je recommande vivement.', ar: 'واي ممتازة! طعم رائع وذوبان جيد. أنصح بها بشدة.' }, verified: true },
  { id: 'r2', productId: '1', author: 'Fatima Z.', rating: 4, date: '2026-03-15', comment: { fr: 'Bonne protéine, livraison rapide. Le goût vanille est un peu trop sucré.', ar: 'بروتين جيد، توصيل سريع. نكهة الفانيليا حلوة بعض الشيء.' }, verified: true },
  { id: 'r3', productId: '1', author: 'Youssef K.', rating: 5, date: '2026-02-28', comment: { fr: 'La meilleure whey que j\'ai essayée. Résultats visibles en 3 semaines !', ar: 'أفضل واي جربتها. نتائج ملحوظة في 3 أسابيع!' }, verified: true },
  { id: 'r4', productId: '2', author: 'Omar B.', rating: 5, date: '2026-03-18', comment: { fr: 'Créatine pure, excellente qualité. Prise de force notable.', ar: 'كرياتين نقي، جودة ممتازة. زيادة ملحوظة في القوة.' }, verified: true },
  { id: 'r5', productId: '3', author: 'Karim L.', rating: 4, date: '2026-03-10', comment: { fr: 'Bon pré-workout, donne un vrai boost. Attention au dosage pour les débutants.', ar: 'بري ووركاوت جيد، يعطي دفعة حقيقية. انتبه للجرعة إذا كنت مبتدئ.' }, verified: true },
  { id: 'r6', productId: '4', author: 'Nadia H.', rating: 5, date: '2026-03-05', comment: { fr: 'Protéine isolat de haute qualité. Se mélange parfaitement, pas de grumeaux.', ar: 'بروتين آيزوليت عالي الجودة. يختلط بشكل مثالي، بدون كتل.' }, verified: true },
  { id: 'r7', productId: '9', author: 'Hamza T.', rating: 4, date: '2026-02-20', comment: { fr: 'Parfait pour la prise de masse. Bon goût chocolat mais un peu lourd à digérer.', ar: 'مثالي لزيادة الوزن. طعم الشوكولاتة جيد لكنه ثقيل قليلاً على الهضم.' }, verified: true },
  { id: 'r8', productId: '10', author: 'Sara M.', rating: 4, date: '2026-03-01', comment: { fr: 'Efficace pour la perte de poids combiné avec du sport. Bon produit.', ar: 'فعال لإنقاص الوزن مع الرياضة. منتج جيد.' }, verified: true },
];

export const stackBundles = {
  'lose-weight': {
    name: { fr: 'Stack Perte de Poids', ar: 'ستاك إنقاص الوزن' },
    productIds: ['10', '6', '8'],
    discount: 15,
  },
  'gain-muscle': {
    name: { fr: 'Stack Prise de Masse', ar: 'ستاك بناء العضلات' },
    productIds: ['1', '2', '9'],
    discount: 12,
  },
  'energy': {
    name: { fr: 'Stack Énergie', ar: 'ستاك الطاقة' },
    productIds: ['3', '2', '8'],
    discount: 10,
  },
};

export function getProduct(id: string) {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId: string) {
  return products.filter(p => p.category === categoryId);
}

export function getFlashSaleProducts() {
  return products.filter(p => p.tags?.includes('flash-sale'));
}

export function getTrendingProducts() {
  return products.filter(p => p.tags?.includes('trending') || p.tags?.includes('best-seller'));
}

export function getUpsellProducts() {
  return products.filter(p => p.tags?.includes('upsell'));
}

export function getReviewsByProduct(productId: string) {
  return reviews.filter(r => r.productId === productId);
}

export function searchProducts(query: string) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.fr.toLowerCase().includes(q) ||
    p.name.ar.includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
