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

export const categories: Category[] = [
  { id: 'protein', name: { fr: 'Protéines', ar: 'بروتين' }, icon: '💪', slug: 'proteines' },
  { id: 'creatine', name: { fr: 'Créatine', ar: 'كرياتين' }, icon: '⚡', slug: 'creatine' },
  { id: 'vitamins', name: { fr: 'Vitamines', ar: 'فيتامينات' }, icon: '🍊', slug: 'vitamines' },
  { id: 'pre-workout', name: { fr: 'Pré-Workout', ar: 'بري ووركاوت' }, icon: '🔥', slug: 'pre-workout' },
  { id: 'weight-loss', name: { fr: 'Perte de Poids', ar: 'إنقاص الوزن' }, icon: '🏃', slug: 'perte-de-poids' },
  { id: 'mass-gainer', name: { fr: 'Mass Gainer', ar: 'ماس جينر' }, icon: '🏋️', slug: 'mass-gainer' },
];

export const brands: Brand[] = [
  { id: 'on', name: 'Optimum Nutrition', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
  { id: 'dymatize', name: 'Dymatize', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
  { id: 'muscletech', name: 'MuscleTech', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
  { id: 'bsn', name: 'BSN', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
  { id: 'cellucor', name: 'Cellucor', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
  { id: 'myprotein', name: 'MyProtein', logo: 'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=120&h=60&fit=crop' },
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
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=600&h=600&fit=crop',
    ],
    category: 'protein',
    brand: 'on',
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
      'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop',
    ],
    category: 'creatine',
    brand: 'on',
    rating: 4.9,
    reviewCount: 178,
    stock: 25,
    sizes: ['300g', '500g', '1kg'],
    expirationDate: '2027-06-01',
    tags: ['best-seller'],
    goalTags: ['gain-muscle', 'energy'],
    crossSellIds: ['1', '4'],
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
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop',
    ],
    category: 'pre-workout',
    brand: 'cellucor',
    rating: 4.6,
    reviewCount: 156,
    stock: 8,
    flavors: ['Fruit Punch', 'Icy Blue Razz', 'Watermelon', 'Cherry Limeade'],
    expirationDate: '2027-01-20',
    tags: ['flash-sale'],
    goalTags: ['energy', 'gain-muscle'],
    crossSellIds: ['1', '2'],
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
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop',
    ],
    category: 'protein',
    brand: 'dymatize',
    rating: 4.7,
    reviewCount: 98,
    stock: 3,
    flavors: ['Gourmet Chocolate', 'Fudge Brownie', 'Cookies & Cream'],
    sizes: ['725g', '1.36kg', '2.27kg'],
    expirationDate: '2026-12-10',
    tags: ['trending'],
    goalTags: ['gain-muscle', 'lose-weight'],
    crossSellIds: ['2', '5'],
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
      'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=600&h=600&fit=crop',
    ],
    category: 'accessories' as any,
    brand: 'on',
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
      'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=600&h=600&fit=crop',
    ],
    category: 'vitamins',
    brand: 'on',
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
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop',
    ],
    category: 'protein',
    brand: 'bsn',
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
      'https://images.unsplash.com/photo-1594381898411-846e7d168826?w=600&h=600&fit=crop',
    ],
    category: 'vitamins',
    brand: 'on',
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
      'https://images.unsplash.com/photo-1593095948071-474c5cc2c2d8?w=600&h=600&fit=crop',
    ],
    category: 'mass-gainer',
    brand: 'on',
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
      'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600&h=600&fit=crop',
    ],
    category: 'weight-loss',
    brand: 'muscletech',
    rating: 4.2,
    reviewCount: 78,
    stock: 15,
    expirationDate: '2027-04-10',
    tags: ['trending'],
    goalTags: ['lose-weight', 'energy'],
    crossSellIds: ['6', '8'],
  },
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

export function searchProducts(query: string) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.fr.toLowerCase().includes(q) ||
    p.name.ar.includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}
