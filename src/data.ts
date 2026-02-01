export interface MenuItem {
  nameEn: string;
  nameAr: string;
}

export interface MenuCategory {
  titleEn: string;
  titleAr: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    titleEn: "HOT DRINKS",
    titleAr: "مشروبات ساخنة",
    items: [
      { nameEn: "ESPRESSO STEAM", nameAr: "اسبريسو ستيم" },
      { nameEn: "ESPRESSO CARAMEL", nameAr: "اسبريسو كراميل" },
      { nameEn: "ESPRESSO VANILLA", nameAr: "اسبريسو فانيلا" },
      { nameEn: "ESPRESSO HAZELNUT", nameAr: "اسبريسو بندق" },
      { nameEn: "TURKISH COFFEE", nameAr: "قهوة تركي" },
      { nameEn: "AMERICANO", nameAr: "امريكانو" },
      { nameEn: "NESCAFE BLACK", nameAr: "نسكافيه بلاك" },
      { nameEn: "NESCAFE", nameAr: "نسكافيه" },
      { nameEn: "TEA", nameAr: "شاي" },
      { nameEn: "TEA LATTE", nameAr: "شاي لاتيه" },
      { nameEn: "VANILLA TEA LATTE", nameAr: "شاي لاتيه - فانيلا" },
      { nameEn: "HAZELNUT TEA LATTE", nameAr: "شاي لاتيه - بندق" },
      { nameEn: "LATTE", nameAr: "لاتيه" },
      { nameEn: "SPANISH LATTE", nameAr: "سبانيش لاتيه" },
      { nameEn: "HAZELNUT LATTE", nameAr: "لاتيه بندق" },
      { nameEn: "SNICKERS LATTE", nameAr: "لاتيه سنيكرز" },
      { nameEn: "PISTACHIO LATTE", nameAr: "لاتيه بستاشيو" },
      { nameEn: "MOCHA LATTE", nameAr: "لاتيه موكا" },
      { nameEn: "MACCHIATO CARAMEL", nameAr: "مكياتو كراميل" },
      { nameEn: "MACCHIATO CHOCOLATE", nameAr: "مكياتو شوكولا" },
      { nameEn: "CAPPUCCINO", nameAr: "كابتشينو" },
      { nameEn: "ULTRA CAPPUCCINO", nameAr: "الترا كابتشينو" },
      { nameEn: "HOT CHOCOLATE - NESQUICK", nameAr: "هوت شوكلت - نسكويك" },
      { nameEn: "HOT CHOCOLATE - SNICKERS", nameAr: "هوت شوكلت - سنكرز" },
      { nameEn: "HOT CHOCOLATE - GALAXY", nameAr: "هوت شوكلت - جالكسي" },
    ],
  },
  {
    titleEn: "COLD DRINKS",
    titleAr: "مشروبات باردة",
    items: [
      { nameEn: "ICE LATTE", nameAr: "ايس لاتيه" },
      { nameEn: "ICE SPANISH LATTE", nameAr: "ايس سبانيش لاتيه" },
      { nameEn: "ICE HAZELNUT LATTE", nameAr: "ايس لاتيه بندق" },
      { nameEn: "ICE SNICKERS LATTE", nameAr: "ايس لاتيه سنيكرز" },
      { nameEn: "ICE PISTACHIO LATTE", nameAr: "ايس لاتيه بستاشيو" },
      { nameEn: "ICE MOCHA LATTE", nameAr: "ايس لاتيه موكا" },
      { nameEn: "ICE CARAMEL MACCHIATO", nameAr: "ايس كراميل ماكياتو" },
      { nameEn: "ICE AMERICANO", nameAr: "ايس امريكانو" },
      { nameEn: "ICE COFFEE", nameAr: "ايس كوفي" },
      { nameEn: "ICE CHOCOLATE", nameAr: "ايس شوكلت" },
      { nameEn: "STEAM VIP", nameAr: "ستيم VIP" },
    ],
  },
  {
    titleEn: "SUGAR FREE",
    titleAr: "بدون سكر",
    items: [
      { nameEn: "ICE VANILLA LATTE", nameAr: "ايس لاتيه فانيلا" },
      { nameEn: "ICE HAZELNUT LATTE", nameAr: "ايس لاتيه بندق" },
      { nameEn: "ICE CARAMEL LATTE", nameAr: "ايس لاتيه كراميل" },
      { nameEn: "ICE MOCHA LATTE", nameAr: "ايس لاتيه موكا" },
      { nameEn: "VANILLA LATTE", nameAr: "لاتيه فانيلا" },
      { nameEn: "HAZELNUT LATTE", nameAr: "لاتيه بندق" },
      { nameEn: "CARAMEL LATTE", nameAr: "لاتيه كراميل" },
      { nameEn: "MOCHA LATTE", nameAr: "لاتيه موكا" },
    ],
  },
  {
    titleEn: "MILK SHAKES",
    titleAr: "ميلك شيك",
    items: [
      { nameEn: "VANILLA MILKSHAKE", nameAr: "ميلك شيك فانيلا" },
      { nameEn: "CHOCOLATE MILKSHAKE", nameAr: "ميلك شيك شوكولا" },
      { nameEn: "CARAMEL MILKSHAKE", nameAr: "ميلك شيك كراميل" },
      { nameEn: "STRAWBERRY MILKSHAKE", nameAr: "ميلك شيك فريز" },
      { nameEn: "BERRIES MILKSHAKE", nameAr: "ميلك شيك توت" },
      { nameEn: "CHEESECAKE MILKSHAKE", nameAr: "ميلك شيك تشيز كيك" },
      { nameEn: "STEAM SWEET MILKSHAKE", nameAr: "ستيم ميلك شيك سويت" },
      { nameEn: "STEAM DARK MILKSHAKE", nameAr: "ستيم ميلك شيك دارك" },
      { nameEn: "STEAM WHITE MILKSHAKE", nameAr: "ستيم ميلك شيك وايت" },
      { nameEn: "PISTACHIO MILKSHAKE", nameAr: "ميلك شيك بستاشيو" },
      { nameEn: "NUTELLA MILKSHAKE", nameAr: "ميلك شيك نوتيلا" },
      { nameEn: "LOTUS MILKSHAKE", nameAr: "ميلك شيك لوتس" },
      { nameEn: "BROWNIES MILKSHAKE", nameAr: "ميلك شيك براونيز" },
      { nameEn: "OREO MILKSHAKE", nameAr: "ميلك شيك اوريو" },
      { nameEn: "SNICKERS MILKSHAKE", nameAr: "ميلك شيك سنكرز" },
      { nameEn: "MARS MILKSHAKE", nameAr: "ميلك شيك مارس" },
      { nameEn: "GALAXY MILKSHAKE", nameAr: "ميلك شيك جالكسي" },
      { nameEn: "TWIX MILKSHAKE", nameAr: "ميلك شيك تويكس" },
    ],
  },
  {
    titleEn: "ICE TEA",
    titleAr: "ايس تي",
    items: [
      { nameEn: "ICE TEA STRAWBERRY", nameAr: "ايس تي فريز" },
      { nameEn: "ICE TEA PASSIONFRUIT", nameAr: "ايس تي باشن فروت" },
      { nameEn: "ICE TEA WATERMELON", nameAr: "ايس تي بطيخ" },
      { nameEn: "ICE TEA RASPBERRY", nameAr: "ايس تي رازبيري" },
      { nameEn: "ICE TEA MIXED BERRIES", nameAr: "ايس تي ميكس بيري" },
      { nameEn: "ICE TEA PEACH", nameAr: "ايس تي دراق" },
      { nameEn: "ICE TEA RED", nameAr: "ايس تي ريد" },
      { nameEn: "ICE TEA GREEN", nameAr: "ايس تي غرين" },
      { nameEn: "ICE TEA BLACK", nameAr: "ايس تي بلاك" },
    ],
  },
  {
    titleEn: "FRAPPE",
    titleAr: "فراب",
    items: [
      { nameEn: "CARAMEL FRAPPE", nameAr: "فراب كراميل" },
      { nameEn: "VANILLA FRAPPE", nameAr: "فراب فانيلا" },
      { nameEn: "MOCHA FRAPPE", nameAr: "فراب موكا" },
      { nameEn: "STRAWBERRY FRAPPE", nameAr: "فراب فريز" },
      { nameEn: "STEAM FRAPPE", nameAr: "فراب ستيم" },
      { nameEn: "TIRAMISU VIP", nameAr: "تيراميسو" },
    ],
  },
  {
    titleEn: "SLASH",
    titleAr: "سلاش",
    items: [
      { nameEn: "STRAWBERRY SLASH", nameAr: "سلاش فريز" },
      { nameEn: "BERRIES SLASH", nameAr: "سلاش توت" },
      { nameEn: "STRAWBERRY - BERRY SLASH", nameAr: "سلاش فريز و توت" },
    ],
  },
  {
    titleEn: "MOJITO",
    titleAr: "موهيتو",
    items: [
      { nameEn: "ORIGINAL MOJITO", nameAr: "موهيتو اورجينال" },
      { nameEn: "MOJITO BLUE", nameAr: "موهيتو بلو" },
      { nameEn: "STEAM MOJITO", nameAr: "موهيتو ستيم" },
      { nameEn: "MOJITO MIX", nameAr: "موهيتو ميكس" },
      { nameEn: "TROPICAL MOJITO", nameAr: "موهيتو تروبيكال" },
    ],
  },
];
