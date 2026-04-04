export type Locale = 'fr' | 'ar';

export const translations = {
  fr: {
    // Nav
    home: 'Accueil',
    search: 'Rechercher',
    cart: 'Panier',
    profile: 'Profil',
    products: 'Produits',
    
    // Promo bar
    promoBar: '🚚 Livraison gratuite à partir de 500 MAD | 🛡️ 100% Authentique',
    
    // Search
    searchPlaceholder: 'Rechercher un produit...',
    noResults: 'Aucun résultat trouvé',
    noResultsSuggestion: 'Nous n\'avons pas "{term}", mais ces alternatives populaires vous donneront les mêmes résultats :',
    
    // Hero
    heroTitle: 'Suppléments Premium',
    heroSubtitle: 'Livraison rapide partout au Maroc',
    heroCta: 'Voir les offres',
    
    // Categories
    categories: 'Catégories',
    protein: 'Protéines',
    creatine: 'Créatine',
    vitamins: 'Vitamines',
    preWorkout: 'Pré-Workout',
    weightLoss: 'Perte de Poids',
    massGainer: 'Mass Gainer',
    
    // Flash sales
    flashSales: 'Ventes Flash',
    endsIn: 'Se termine dans',
    
    // Build stack
    buildStack: 'Construis ton Stack',
    buildStackDesc: 'Sélectionne ton objectif et découvre le stack parfait',
    loseWeight: 'Perdre du poids',
    gainMuscle: 'Gagner du muscle',
    energy: 'Énergie & Endurance',
    addBundle: 'Ajouter le bundle',
    
    // Products
    trending: 'Tendances',
    bestSellers: 'Meilleures Ventes',
    addToCart: 'Ajouter au panier',
    addBothToCart: 'Ajouter les 2',
    quickView: 'Aperçu rapide',
    filters: 'Filtres',
    sortBy: 'Trier par',
    popularity: 'Popularité',
    priceLowHigh: 'Prix croissant',
    priceHighLow: 'Prix décroissant',
    newest: 'Nouveautés',
    brand: 'Marque',
    priceRange: 'Fourchette de prix',
    goal: 'Objectif',
    allCategories: 'Toutes les catégories',
    
    // PDP
    verifiedAuthentic: 'Vérifié Authentique',
    expiresOn: 'Expire le',
    flavor: 'Saveur',
    size: 'Taille',
    ingredients: 'Ingrédients & Composition',
    suggestedUse: 'Utilisation suggérée',
    shippingGuarantee: 'Livraison & Garantie d\'authenticité',
    frequentlyBought: 'Fréquemment achetés ensemble',
    reviews: 'Avis',
    onlyLeft: 'Plus que {n} en stock — Commandez vite !',
    
    // Cart
    yourCart: 'Votre Panier',
    cartEmpty: 'Votre panier est vide',
    discoverBestSellers: 'Découvrez nos best-sellers',
    freeShippingBar: 'Plus que {amount} MAD pour la livraison gratuite !',
    freeShippingReached: 'Félicitations ! Livraison gratuite 🎉',
    youMightAlsoLike: 'Vous aimerez aussi',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    free: 'Gratuit',
    total: 'Total',
    orderWhatsApp: 'Commander via WhatsApp',
    secureCheckout: 'Paiement Sécurisé',
    
    // Checkout
    checkout: 'Paiement',
    fullName: 'Nom complet',
    phone: 'Téléphone',
    address: 'Adresse',
    city: 'Ville',
    placeOrder: 'Confirmer la commande',
    
    // Trust
    securePayment: 'Paiement Sécurisé',
    fastDelivery: 'Livraison 24h',
    authenticProducts: 'Produits Authentiques',
    
    // Misc
    mad: 'MAD',
    language: 'العربية',
  },
  ar: {
    home: 'الرئيسية',
    search: 'بحث',
    cart: 'السلة',
    profile: 'الملف',
    products: 'المنتجات',
    
    promoBar: '🚚 توصيل مجاني ابتداءً من 500 درهم | 🛡️ 100% أصلي',
    
    searchPlaceholder: 'ابحث عن منتج...',
    noResults: 'لا نتائج',
    noResultsSuggestion: 'لا يوجد لدينا "{term}"، لكن هذه البدائل الشائعة ستحقق لك نفس النتائج:',
    
    heroTitle: 'مكملات غذائية فاخرة',
    heroSubtitle: 'توصيل سريع في جميع أنحاء المغرب',
    heroCta: 'اكتشف العروض',
    
    categories: 'الفئات',
    protein: 'بروتين',
    creatine: 'كرياتين',
    vitamins: 'فيتامينات',
    preWorkout: 'بري ووركاوت',
    weightLoss: 'إنقاص الوزن',
    massGainer: 'ماس جينر',
    
    flashSales: 'عروض فلاش',
    endsIn: 'ينتهي في',
    
    buildStack: 'ابنِ ستاكك',
    buildStackDesc: 'اختر هدفك واكتشف الستاك المثالي',
    loseWeight: 'إنقاص الوزن',
    gainMuscle: 'بناء العضلات',
    energy: 'طاقة و تحمّل',
    addBundle: 'أضف الحزمة',
    
    trending: 'الأكثر رواجاً',
    bestSellers: 'الأكثر مبيعاً',
    addToCart: 'أضف للسلة',
    addBothToCart: 'أضف الاثنين',
    quickView: 'عرض سريع',
    filters: 'تصفية',
    sortBy: 'ترتيب حسب',
    popularity: 'الشعبية',
    priceLowHigh: 'السعر: من الأقل للأعلى',
    priceHighLow: 'السعر: من الأعلى للأقل',
    newest: 'الأحدث',
    brand: 'العلامة التجارية',
    priceRange: 'نطاق السعر',
    goal: 'الهدف',
    allCategories: 'جميع الفئات',
    
    verifiedAuthentic: 'أصلي ومضمون',
    expiresOn: 'ينتهي في',
    flavor: 'نكهة',
    size: 'حجم',
    ingredients: 'المكونات والتركيبة',
    suggestedUse: 'طريقة الاستخدام',
    shippingGuarantee: 'الشحن وضمان الأصالة',
    frequentlyBought: 'كثيراً ما يُشترى معاً',
    reviews: 'التقييمات',
    onlyLeft: 'بقي فقط {n} — اطلب بسرعة!',
    
    yourCart: 'سلتك',
    cartEmpty: 'سلتك فارغة',
    discoverBestSellers: 'اكتشف الأكثر مبيعاً',
    freeShippingBar: 'باقي {amount} درهم للتوصيل المجاني!',
    freeShippingReached: 'مبروك! التوصيل مجاني 🎉',
    youMightAlsoLike: 'قد يعجبك أيضاً',
    subtotal: 'المجموع الفرعي',
    shipping: 'التوصيل',
    free: 'مجاني',
    total: 'المجموع',
    orderWhatsApp: 'اطلب عبر واتساب',
    secureCheckout: 'دفع آمن',
    
    checkout: 'الدفع',
    fullName: 'الاسم الكامل',
    phone: 'الهاتف',
    address: 'العنوان',
    city: 'المدينة',
    placeOrder: 'تأكيد الطلب',
    
    securePayment: 'دفع آمن',
    fastDelivery: 'توصيل 24 ساعة',
    authenticProducts: 'منتجات أصلية',
    
    mad: 'درهم',
    language: 'Français',
  }
} as const;

export type TranslationKey = keyof typeof translations.fr;
