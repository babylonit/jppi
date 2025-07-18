export interface Product {
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  shortDescription: string;
  images: string[];
  specifications: {
    size?: string;
    material?: string;
    capacity?: string;
    printingOptions?: string[];
    moq?: string; // Minimum Order Quantity
    leadTime?: string;
    weight?: string;
    temperature?: string;
    coating?: string;
    colors?: string[];
    dimensions?: string;
  };
  features: string[];
  relatedProducts: string[]; // slugs of related products
  seoTitle?: string;
  seoDescription?: string;
  price?: {
    currency: string;
    range: string;
    note?: string;
  };
}

export const products: Product[] = [
  // ========================================
  // PAPER CUPS CATEGORY - DISPOSABLE CUPS
  // ========================================
  {
    slug: "50ml-paper-cup",
    name: "50ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Ultra-small biodegradable paper cup perfect for espresso shots and taste testing.",
    description: "Our 50ml disposable paper cups are specifically designed for espresso shots, sample servings, and taste testing applications. Made with FDA-approved materials and featuring our QC-100 certified leak-proof technology, these ultra-small cups provide the perfect solution for cafes, restaurants, and tasting events. The compact 35mm bottom size ensures optimal espresso crema retention while the eco-friendly construction supports your sustainability goals.",
    images: [
      "/images/Disposable Paper Cups/50ml.png",
      "/images/Disposable Paper Cups/50ml-1.png",
      "/images/Disposable Paper Cups/50ml-2.png"
    ],
    specifications: {
      capacity: "50ml",
      size: "35mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "10,000 pieces",
      leadTime: "15-20 business days",
      weight: "1.8 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Perfect espresso crema retention",
      "Custom printing available",
      "Compact and stackable design",
      "Heat-resistant up to 90°C",
      "2-year shelf life guarantee"
    ],
    relatedProducts: ["60ml-paper-cup", "80ml-paper-cup", "100ml-paper-cup", "coffee-sleeves"],
    seoTitle: "50ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 50ml disposable paper cups perfect for espresso and samples. QC-100 certified, FDA-approved, biodegradable. Custom printing available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.80 - 1.20 per piece",
      note: "Bulk pricing available"
    }
  },
  {
    slug: "60ml-paper-cup",
    name: "60ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Compact biodegradable paper cup ideal for espresso and small beverage servings.",
    description: "Our 60ml disposable paper cups offer the perfect balance between size and functionality for small beverage servings. Featuring a 38mm bottom diameter, these cups are ideal for single espresso shots, small tea servings, and sample portions. Manufactured with QC-100 certified leak-proof technology and FDA-approved materials, they provide reliable performance while maintaining our commitment to environmental sustainability.",
    images: [
      "/images/Disposable Paper Cups/6o ml.png",
      "/images/Disposable Paper Cups/60ml-2.png",
      "/images/Disposable Paper Cups/60ml.png"
    ],
    specifications: {
      capacity: "60ml",
      size: "38mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "8,000 pieces",
      leadTime: "15-20 business days",
      weight: "2.0 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Optimal for single espresso shots",
      "Custom printing available",
      "Compact storage and transport",
      "Heat-resistant construction",
      "Eco-friendly manufacturing"
    ],
    relatedProducts: ["50ml-paper-cup", "80ml-paper-cup", "100ml-paper-cup", "coffee-sleeves"],
    seoTitle: "60ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 60ml disposable paper cups for espresso and small beverages. QC-100 certified, eco-friendly, custom printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.85 - 1.25 per piece",
      note: "Volume discounts available"
    }
  },
  {
    slug: "80ml-paper-cup",
    name: "80ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Small biodegradable paper cup perfect for single-shot espresso and sample servings.",
    description: "Our 80ml disposable paper cups are designed for single-shot espresso, tea samples, and small beverage portions. With a 40mm bottom diameter, these cups provide excellent stability while maintaining the perfect size for premium coffee service. Made with QC-100 certified materials and featuring leak-proof technology, they deliver reliable performance for cafes, restaurants, and events.",
    images: [
      ""
    ],
    specifications: {
      capacity: "80ml",
      size: "40mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "6,000 pieces",
      leadTime: "15-20 business days",
      weight: "2.2 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Perfect for single espresso shots",
      "Enhanced stability design",
      "Custom branding options",
      "Temperature resistant",
      "Stackable for easy storage"
    ],
    relatedProducts: ["60ml-paper-cup", "100ml-paper-cup", "120ml-paper-cup", "coffee-sleeves"],
    seoTitle: "80ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 80ml disposable paper cups for espresso and small servings. QC-100 certified, leak-proof, biodegradable. Custom printing available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.90 - 1.30 per piece",
      note: "Custom printing additional cost"
    }
  },
  {
    slug: "100ml-paper-cup",
    name: "100ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Versatile biodegradable paper cup perfect for espresso, tea, and small hot beverages.",
    description: "Our 100ml disposable paper cups are the perfect choice for espresso, tea, and small hot beverage servings. Featuring a 40mm bottom diameter and QC-100 certified construction, these cups offer excellent functionality for cafes, offices, and events. Made with FDA-approved materials and leak-proof technology, they provide reliable performance while supporting environmental sustainability goals.",
    images: [
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7683083/pexels-photo-7683083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "100ml",
      size: "40mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "5,000 pieces",
      leadTime: "12-18 business days",
      weight: "2.5 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Versatile serving size",
      "Professional appearance",
      "Custom printing available",
      "Heat-resistant construction",
      "2-year shelf life guarantee"
    ],
    relatedProducts: ["80ml-paper-cup", "120ml-paper-cup", "150ml-paper-cup", "coffee-sleeves"],
    seoTitle: "100ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 100ml disposable paper cups for espresso and tea. QC-100 certified, FDA-approved, biodegradable. Custom printing available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.95 - 1.35 per piece",
      note: "MOQ: 5,000 pieces"
    }
  },
  {
    slug: "120ml-paper-cup",
    name: "120ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Popular biodegradable paper cup ideal for tea, coffee, and regular hot beverages.",
    description: "Our 120ml disposable paper cups are among our most popular sizes, perfect for tea, coffee, and regular hot beverage servings. With a 46mm bottom diameter, these cups provide excellent stability and comfort for daily use. Manufactured with QC-100 certified materials and featuring advanced leak-proof technology, they're trusted by cafes, restaurants, and offices across Bangladesh.",
    images: [
      "https://images.pexels.com/photos/7683083/pexels-photo-7683083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6103973/pexels-photo-6103973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "120ml",
      size: "46mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "3,000 pieces",
      leadTime: "10-15 business days",
      weight: "2.8 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Most popular serving size",
      "Enhanced grip comfort",
      "Professional branding options",
      "Temperature resistant",
      "Efficient storage design"
    ],
    relatedProducts: ["100ml-paper-cup", "150ml-paper-cup", "200ml-paper-cup", "coffee-sleeves"],
    seoTitle: "120ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 120ml disposable paper cups for tea and coffee. QC-100 certified, leak-proof, eco-friendly. Custom printing available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.00 - 1.40 per piece",
      note: "Popular size with fast delivery"
    }
  },
  {
    slug: "150ml-paper-cup",
    name: "150ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Medium-sized biodegradable paper cup perfect for coffee, tea, and soft drinks.",
    description: "Our 150ml disposable paper cups offer the perfect medium size for regular coffee, tea, and soft drink servings. Available with both 46mm and 52mm bottom diameter options, these cups provide flexibility for different serving preferences. Made with QC-100 certified materials and featuring leak-proof technology, they're ideal for restaurants, cafes, and office environments.",
    images: [
      "https://images.pexels.com/photos/6103973/pexels-photo-6103973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7474341/pexels-photo-7474341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "150ml",
      size: "46mm or 52mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "2,500 pieces",
      leadTime: "10-15 business days",
      weight: "3.2 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Multi-purpose serving size",
      "Two diameter options available",
      "Professional custom printing",
      "Excellent temperature retention",
      "Convenient handling design"
    ],
    relatedProducts: ["120ml-paper-cup", "200ml-paper-cup", "250ml-paper-cup", "coffee-sleeves"],
    seoTitle: "150ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 150ml disposable paper cups for coffee and soft drinks. QC-100 certified, two diameter options, biodegradable. Custom printing in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.10 - 1.50 per piece",
      note: "Two diameter options available"
    }
  },
  {
    slug: "200ml-paper-cup",
    name: "200ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Medium-large biodegradable paper cup perfect for coffee, tea, and soft drinks.",
    description: "Our 200ml disposable paper cups provide the ideal serving size for regular coffee, tea, and soft drinks. With a 52mm bottom diameter, these cups offer excellent stability and a comfortable drinking experience. Manufactured with QC-100 certified materials and advanced leak-proof technology, they're perfect for cafes, restaurants, and catering services.",
    images: [
      "https://images.pexels.com/photos/7474341/pexels-photo-7474341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/9180753/pexels-photo-9180753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "200ml",
      size: "52mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "2,200 pieces",
      leadTime: "10-15 business days",
      weight: "3.6 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Comfortable drinking experience",
      "Enhanced stability design",
      "Professional appearance",
      "Heat-resistant construction",
      "Suitable for hot and cold beverages"
    ],
    relatedProducts: ["150ml-paper-cup", "250ml-paper-cup", "350ml-paper-cup", "coffee-sleeves"],
    seoTitle: "200ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 200ml disposable paper cups for coffee and beverages. QC-100 certified, 52mm diameter, biodegradable. Custom printing available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.20 - 1.60 per piece",
      note: "Excellent stability design"
    }
  },
  {
    slug: "250ml-paper-cup",
    name: "250ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Large biodegradable paper cup perfect for premium coffee drinks and cold beverages.",
    description: "Our 250ml disposable paper cups are ideal for large coffee drinks, cold beverages, and premium servings. With a 52mm bottom diameter, these cups provide excellent capacity while maintaining stability and comfort. Made with QC-100 certified materials and featuring advanced leak-proof technology, they're perfect for specialty coffee shops, restaurants, and events.",
    images: [
      "https://images.pexels.com/photos/9180753/pexels-photo-9180753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3215283/pexels-photo-3215283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "250ml",
      size: "52mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "2,000 pieces",
      leadTime: "10-15 business days",
      weight: "4.0 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Large serving capacity",
      "Premium appearance",
      "Excellent for specialty drinks",
      "Temperature resistant",
      "Professional branding options"
    ],
    relatedProducts: ["200ml-paper-cup", "350ml-paper-cup", "400ml-paper-cup", "coffee-sleeves"],
    seoTitle: "250ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 250ml disposable paper cups for large coffee and cold drinks. QC-100 certified, leak-proof, biodegradable. Custom printing in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.30 - 1.70 per piece",
      note: "Perfect for specialty drinks"
    }
  },
  {
    slug: "350ml-paper-cup",
    name: "350ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Extra-large biodegradable paper cup perfect for specialty drinks, smoothies, and large beverages.",
    description: "Our 350ml disposable paper cups are designed for specialty drinks, smoothies, and large beverage servings. With a 60mm bottom diameter, these cups provide exceptional stability and capacity for premium offerings. Manufactured with QC-100 certified materials and advanced leak-proof technology, they're ideal for juice bars, smoothie shops, and premium beverage services.",
    images: [
      "https://images.pexels.com/photos/3215283/pexels-photo-3215283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "350ml",
      size: "60mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "2,000 pieces",
      leadTime: "12-18 business days",
      weight: "4.5 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Extra-large serving capacity",
      "Superior stability design",
      "Perfect for specialty beverages",
      "Temperature resistant",
      "Premium branding opportunities"
    ],
    relatedProducts: ["250ml-paper-cup", "400ml-paper-cup", "custom-size-paper-cups", "coffee-sleeves"],
    seoTitle: "350ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 350ml disposable paper cups for specialty drinks and smoothies. QC-100 certified, 60mm diameter, biodegradable. Custom printing in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.50 - 1.90 per piece",
      note: "Ideal for premium beverages"
    }
  },
  {
    slug: "400ml-paper-cup",
    name: "400ml Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Maximum size biodegradable paper cup perfect for large drinks, milkshakes, and specialty beverages.",
    description: "Our 400ml disposable paper cups represent our largest standard size, perfect for large drinks, milkshakes, and specialty beverages. With a 65mm bottom diameter, these cups provide maximum capacity while maintaining structural integrity. Made with QC-100 certified materials and featuring advanced leak-proof technology, they're ideal for ice cream parlors, shake shops, and premium beverage establishments.",
    images: [
      "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "400ml",
      size: "65mm bottom diameter",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement"],
      moq: "2,000 pieces",
      leadTime: "15-20 business days",
      weight: "5.0 grams",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Maximum serving capacity",
      "Reinforced construction",
      "Perfect for milkshakes and smoothies",
      "Temperature resistant",
      "Eye-catching branding space"
    ],
    relatedProducts: ["350ml-paper-cup", "custom-size-paper-cups", "ice-cream-cups", "coffee-sleeves"],
    seoTitle: "400ml Paper Cup Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium 400ml disposable paper cups for large beverages and milkshakes. QC-100 certified, 65mm diameter, biodegradable. Custom printing in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.70 - 2.10 per piece",
      note: "Maximum standard size available"
    }
  },
  {
    slug: "custom-size-paper-cups",
    name: "Custom-Size Paper Cups",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Bespoke biodegradable paper cups designed specifically for your unique beverage requirements.",
    description: "Our custom-size paper cups are designed specifically for unique beverage requirements that standard sizes cannot accommodate. Whether you need ultra-small tasting cups, oversized specialty drink containers, or specific dimensions for branded beverage programs, we can manufacture cups to your exact specifications. All custom cups maintain our QC-100 certification and leak-proof technology standards.",
    images: [
      "/images/Disposable Paper Cups/custom-size-paper-cup.png"
    ],
    specifications: {
      capacity: "Any size from 30ml to 500ml",
      size: "Custom diameter and height",
      material: "Food-grade paper board with PE/PLA coating",
      printingOptions: ["CMYK offset printing", "Pantone color matching", "Custom logo placement", "Special finishes"],
      moq: "Contact for custom MOQ",
      leadTime: "25-30 business days",
      weight: "Varies by size",
      temperature: "Safe up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "QC-100 certified leak-proof technology",
      "FDA-approved food-safe materials",
      "Biodegradable and compostable",
      "Completely customizable dimensions",
      "Unique shape options available",
      "Specialized printing capabilities",
      "Enhanced branding opportunities",
      "Professional design consultation"
    ],
    relatedProducts: ["400ml-paper-cup", "350ml-paper-cup", "double-wall-cups", "coffee-sleeves"],
    seoTitle: "Custom Size Paper Cups Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Bespoke custom-size disposable paper cups for unique requirements. QC-100 certified, any size 30ml-500ml, custom printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "Contact for quote",
      note: "Pricing varies by specifications"
    }
  },

  // ========================================
  // PAPER CUPS CATEGORY - OTHER CUPS
  // ========================================
  {
    slug: "double-wall-cups",
    name: "Double Wall Cups",
    category: "paper-cups",
    subcategory: "specialty-cups",
    shortDescription: "Insulated double-wall paper cups with superior heat protection and professional appearance.",
    description: "Our double wall cups feature innovative air-insulated design that provides superior heat protection while maintaining structural integrity. The double-layer construction eliminates the need for additional sleeves while providing excellent grip comfort. Available in multiple sizes and perfect for premium coffee service, these cups combine functionality with professional appearance.",
    images: [
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7683083/pexels-photo-7683083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "150ml, 200ml, 250ml, 350ml",
      size: "Various diameters available",
      material: "Double-layer food-grade paper board",
      printingOptions: ["CMYK offset printing", "Premium finishes", "Custom branding"],
      moq: "3,000 pieces",
      leadTime: "18-25 business days",
      weight: "4.5-7.0 grams depending on size",
      temperature: "Superior heat protection up to 95°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "Double-wall insulation technology",
      "Superior heat protection",
      "No sleeve required",
      "Professional appearance",
      "Enhanced grip comfort",
      "Premium branding surface",
      "Biodegradable construction",
      "Multiple size options"
    ],
    relatedProducts: ["ripple-wall-cups", "coffee-sleeves", "250ml-paper-cup", "350ml-paper-cup"],
    seoTitle: "Double Wall Paper Cups Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium double wall insulated paper cups with superior heat protection. No sleeve needed, professional appearance. Custom printing available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.50 - 4.00 per piece",
      note: "Premium pricing for premium product"
    }
  },
  {
    slug: "ripple-wall-cups",
    name: "Ripple Wall Cups",
    category: "paper-cups",
    subcategory: "specialty-cups",
    shortDescription: "Textured ripple wall paper cups providing extra insulation and enhanced grip.",
    description: "Our ripple wall cups feature a distinctive textured exterior that not only provides excellent grip but also adds extra insulation for hot beverages. The unique ripple design creates air pockets that enhance thermal protection while giving a premium aesthetic to your beverage presentation. Perfect for specialty coffee shops and premium beverage services.",
    images: [
      "https://images.pexels.com/photos/7683083/pexels-photo-7683083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6103973/pexels-photo-6103973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "120ml, 150ml, 200ml, 250ml",
      size: "Standard diameters with ripple texture",
      material: "Food-grade paper board with ripple design",
      printingOptions: ["CMYK offset printing", "Custom logo placement", "Special finishes"],
      moq: "2,500 pieces",
      leadTime: "15-20 business days",
      weight: "3.5-5.0 grams depending on size",
      temperature: "Enhanced heat protection up to 90°C",
      coating: "PE/PLA biodegradable coating"
    },
    features: [
      "Distinctive ripple texture design",
      "Enhanced thermal insulation",
      "Superior grip comfort",
      "Premium visual appeal",
      "No sleeve required",
      "Excellent branding surface",
      "Biodegradable materials",
      "Professional appearance"
    ],
    relatedProducts: ["double-wall-cups", "coffee-sleeves", "200ml-paper-cup", "250ml-paper-cup"],
    seoTitle: "Ripple Wall Paper Cups Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium ripple wall textured paper cups with enhanced insulation and grip. Perfect for specialty coffee. Custom printing available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.80 - 2.80 per piece",
      note: "Premium textured design"
    }
  },
  {
    slug: "coffee-sleeves",
    name: "Coffee Sleeves",
    category: "paper-cups",
    subcategory: "accessories",
    shortDescription: "Protective paper sleeves providing additional insulation and branding space for hot beverages.",
    description: "Our coffee sleeves are designed to provide additional thermal protection and comfort for hot beverage cups while offering excellent branding opportunities. Made from corrugated paper for superior insulation, these sleeves fit standard cup sizes and can be fully customized with your brand design. Perfect for cafes, coffee shops, and branded beverage services.",
    images: [
      "https://images.pexels.com/photos/6103973/pexels-photo-6103973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7474341/pexels-photo-7474341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "Fits 120ml-350ml cups",
      size: "Standard sleeve dimensions",
      material: "Corrugated paper for insulation",
      printingOptions: ["Full-color CMYK printing", "Logo placement", "Custom designs"],
      moq: "5,000 pieces",
      leadTime: "10-15 business days",
      weight: "2.0 grams",
      temperature: "Heat protection up to 95°C",
      coating: "Optional water-resistant coating"
    },
    features: [
      "Superior thermal protection",
      "Comfortable grip enhancement",
      "Excellent branding surface",
      "Corrugated insulation design",
      "Fits multiple cup sizes",
      "Cost-effective solution",
      "Recyclable materials",
      "Easy application"
    ],
    relatedProducts: ["120ml-paper-cup", "150ml-paper-cup", "200ml-paper-cup", "250ml-paper-cup"],
    seoTitle: "Coffee Sleeves Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Custom printed coffee sleeves for thermal protection and branding. Corrugated design, fits multiple cup sizes. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.30 - 0.60 per piece",
      note: "Cost-effective branding solution"
    }
  },
  {
    slug: "ice-cream-cups",
    name: "Ice-cream Cups",
    category: "paper-cups",
    subcategory: "specialty-cups",
    shortDescription: "Specially designed paper cups with food-safe coating perfect for ice cream and frozen desserts.",
    description: "Our ice-cream cups are specially designed for frozen desserts with enhanced food-safe coating that prevents moisture absorption and maintains structural integrity even with frozen products. Available in various sizes perfect for single servings to family portions, these cups feature attractive designs and excellent branding opportunities for ice cream parlors and dessert shops.",
    images: [
      "https://images.pexels.com/photos/7474341/pexels-photo-7474341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/9180753/pexels-photo-9180753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      capacity: "100ml, 150ml, 200ml, 250ml, 350ml",
      size: "Various diameters for different servings",
      material: "Food-grade paper board with enhanced coating",
      printingOptions: ["Full-color CMYK printing", "Fun designs", "Custom branding"],
      moq: "3,000 pieces",
      leadTime: "12-18 business days",
      weight: "3.0-5.5 grams depending on size",
      temperature: "Freezer safe, moisture resistant",
      coating: "Enhanced PE/PLA coating for frozen products"
    },
    features: [
      "Specially designed for frozen desserts",
      "Enhanced moisture resistance",
      "Freezer-safe construction",
      "Attractive design options",
      "Multiple serving sizes",
      "Excellent branding opportunities",
      "Food-safe materials",
      "Sturdy construction"
    ],
    relatedProducts: ["200ml-paper-cup", "250ml-paper-cup", "350ml-paper-cup", "custom-size-paper-cups"],
    seoTitle: "Ice Cream Cups Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized paper cups for ice cream and frozen desserts. Moisture-resistant, freezer-safe, multiple sizes. Custom printing available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.20 - 2.50 per piece",
      note: "Specialized coating for frozen products"
    }
  },

  // ========================================
  // FOOD PACKAGING CATEGORY
  // ========================================
  {
    slug: "pizza-box",
    name: "Pizza Box",
    category: "food-packaging",
    subcategory: "takeaway-boxes",
    shortDescription: "Premium corrugated pizza boxes with custom printing, perfect for restaurants and delivery services.",
    description: "Our premium pizza boxes are manufactured using high-quality corrugated cardboard that maintains food temperature while preventing grease absorption. Available in multiple sizes from 8-inch to 18-inch, these boxes feature secure interlocking design and optional custom printing to showcase your brand. Perfect for restaurants, pizzerias, and food delivery services across Bangladesh.",
    images: [
      "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5946144/pexels-photo-5946144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "8\", 10\", 12\", 14\", 16\", 18\" available",
      material: "250-350 GSM corrugated cardboard",
      printingOptions: ["Full-color CMYK printing", "Logo placement", "Custom designs"],
      moq: "2,000 pieces",
      leadTime: "10-15 business days",
      coating: "Grease-resistant interior coating",
      colors: ["Natural kraft", "White", "Custom colors available"]
    },
    features: [
      "Grease and moisture resistant",
      "Temperature retention technology",
      "Secure interlocking closure",
      "Stackable design for storage",
      "Custom printing available",
      "Food-safe materials",
      "Recyclable and biodegradable",
      "Ventilation holes option"
    ],
    relatedProducts: ["burger-boxes", "lunch-boxes", "food-containers", "sandwich-boxes"],
    seoTitle: "Pizza Box Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Custom printed pizza boxes, grease-resistant, temperature retaining. Multiple sizes available. Food-safe corrugated cardboard. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "8.00 - 25.00 per piece",
      note: "Varies by size and customization"
    }
  },
  {
    slug: "burger-boxes",
    name: "Burger Boxes",
    category: "food-packaging",
    subcategory: "takeaway-boxes",
    shortDescription: "Grease-resistant burger boxes designed for takeaway and delivery services.",
    description: "Our burger boxes are specifically designed for hamburgers, sandwiches, and similar foods with grease-resistant coating and secure closure system. Available in various sizes to accommodate different burger types, these boxes maintain food freshness while providing excellent presentation for your brand. Perfect for fast-food restaurants, burger joints, and delivery services.",
    images: [
      "https://images.pexels.com/photos/5946144/pexels-photo-5946144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Small, Medium, Large, Extra Large",
      material: "250-300 GSM food-grade cardboard",
      printingOptions: ["CMYK printing", "Logo placement", "Custom branding"],
      moq: "3,000 pieces",
      leadTime: "8-12 business days",
      coating: "Grease-resistant interior",
      colors: ["White", "Kraft", "Custom colors"]
    },
    features: [
      "Grease-resistant coating",
      "Secure closure mechanism",
      "Multiple size options",
      "Custom printing available",
      "Food-safe materials",
      "Maintains food temperature",
      "Easy assembly design",
      "Stackable for storage"
    ],
    relatedProducts: ["pizza-box", "sandwich-boxes", "food-containers", "lunch-boxes"],
    seoTitle: "Burger Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Grease-resistant burger boxes for takeaway and delivery. Multiple sizes, custom printing available. Food-safe materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.50 - 8.00 per piece",
      note: "Size-dependent pricing"
    }
  },
  {
    slug: "food-containers",
    name: "Food Containers",
    category: "food-packaging",
    subcategory: "takeaway-boxes",
    shortDescription: "Multi-compartment paper containers perfect for various food items and meal packaging.",
    description: "Our food containers feature multi-compartment design perfect for complete meal packaging. Made with food-grade materials and grease-resistant coating, these containers are ideal for rice dishes, curries, and combination meals. Available in various configurations to suit different food service needs while maintaining food quality and presentation.",
    images: [
      "https://images.pexels.com/photos/5942599/pexels-photo-5942599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Single, 2-compartment, 3-compartment, 4-compartment",
      material: "Food-grade paper board with coating",
      printingOptions: ["Custom printing", "Logo placement", "Branding options"],
      moq: "2,500 pieces",
      leadTime: "10-15 business days",
      coating: "Grease and moisture resistant",
      colors: ["White", "Natural", "Custom colors"]
    },
    features: [
      "Multi-compartment design",
      "Grease and moisture resistant",
      "Secure lid system",
      "Food-safe materials",
      "Microwave-safe options",
      "Custom printing available",
      "Various size configurations",
      "Eco-friendly construction"
    ],
    relatedProducts: ["lunch-boxes", "burger-boxes", "pizza-box", "sandwich-boxes"],
    seoTitle: "Food Containers Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Multi-compartment food containers for takeaway meals. Grease-resistant, secure lids, custom printing. Food-safe materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "5.00 - 15.00 per piece",
      note: "Varies by compartment configuration"
    }
  },
  {
    slug: "lunch-boxes",
    name: "Lunch Boxes",
    category: "food-packaging",
    subcategory: "takeaway-boxes",
    shortDescription: "Eco-friendly lunch boxes ideal for restaurants and catering services.",
    description: "Our eco-friendly lunch boxes are perfect for restaurants, catering services, and corporate meal programs. Made with biodegradable materials and featuring grease-resistant coating, these boxes maintain food quality while supporting environmental sustainability. Available in various sizes to accommodate different meal portions and food types.",
    images: [
      "https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5942599/pexels-photo-5942599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Small (500ml), Medium (750ml), Large (1000ml)",
      material: "Biodegradable paper board with eco-coating",
      printingOptions: ["Eco-friendly inks", "Custom designs", "Logo placement"],
      moq: "2,000 pieces",
      leadTime: "8-12 business days",
      coating: "Biodegradable grease-resistant coating",
      colors: ["Natural kraft", "White", "Custom eco-colors"]
    },
    features: [
      "100% biodegradable materials",
      "Grease-resistant coating",
      "Secure closure system",
      "Multiple size options",
      "Eco-friendly printing inks",
      "Custom branding available",
      "Microwave-safe",
      "Compostable construction"
    ],
    relatedProducts: ["food-containers", "burger-boxes", "sandwich-boxes", "pizza-box"],
    seoTitle: "Lunch Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Eco-friendly biodegradable lunch boxes for restaurants and catering. Grease-resistant, multiple sizes, custom printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "4.00 - 12.00 per piece",
      note: "Eco-friendly premium pricing"
    }
  },
  {
    slug: "sandwich-boxes",
    name: "Sandwich Boxes",
    category: "food-packaging",
    subcategory: "takeaway-boxes",
    shortDescription: "Compact and secure packaging for sandwiches and wraps.",
    description: "Our sandwich boxes are designed specifically for sandwiches, wraps, and similar handheld foods. Featuring compact design and secure closure, these boxes prevent spillage while maintaining food freshness. Perfect for delis, cafes, and sandwich shops looking for professional packaging that keeps food intact during transport.",
    images: [
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4393464/pexels-photo-4393464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Regular, Large, Extra Large",
      material: "250 GSM food-grade cardboard",
      printingOptions: ["CMYK printing", "Logo placement", "Custom designs"],
      moq: "3,000 pieces",
      leadTime: "7-10 business days",
      coating: "Grease-resistant interior",
      colors: ["White", "Kraft", "Custom colors"]
    },
    features: [
      "Compact design for sandwiches",
      "Secure closure mechanism",
      "Grease-resistant coating",
      "Multiple size options",
      "Easy handling design",
      "Custom printing available",
      "Food-safe materials",
      "Cost-effective solution"
    ],
    relatedProducts: ["burger-boxes", "lunch-boxes", "food-containers", "pizza-box"],
    seoTitle: "Sandwich Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Compact sandwich boxes with secure closure and grease-resistant coating. Multiple sizes, custom printing available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.50 - 6.00 per piece",
      note: "Compact and cost-effective"
    }
  },
  {
    slug: "cake-boxes",
    name: "Cake Boxes",
    category: "food-packaging",
    subcategory: "bakery-boxes",
    shortDescription: "Premium cake boxes with secure closures for bakery products.",
    description: "Our premium cake boxes are designed specifically for cakes, pastries, and delicate bakery items. Featuring secure closure systems and food-safe materials, these boxes protect bakery products while providing excellent presentation. Available in various sizes and heights to accommodate different cake types, from cupcakes to multi-tier cakes.",
    images: [
      "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4869312/pexels-photo-4869312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "6\", 8\", 10\", 12\", 14\" square and round options",
      material: "300 GSM food-grade cardboard",
      printingOptions: ["Premium printing", "Window options", "Custom designs"],
      moq: "1,500 pieces",
      leadTime: "12-18 business days",
      coating: "Food-safe interior coating",
      colors: ["White", "Pastels", "Custom colors"]
    },
    features: [
      "Secure closure for delicate items",
      "Multiple size and height options",
      "Food-safe materials",
      "Window options available",
      "Premium appearance",
      "Custom printing capabilities",
      "Grease-resistant coating",
      "Professional presentation"
    ],
    relatedProducts: ["lunch-boxes", "food-containers", "sandwich-boxes", "custom-packaging"],
    seoTitle: "Cake Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium cake boxes for bakeries with secure closures and window options. Multiple sizes, custom printing available. Food-safe materials in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "8.00 - 25.00 per piece",
      note: "Premium pricing for bakery quality"
    }
  },

  // ========================================
  // RETAIL PACKAGING CATEGORY
  // ========================================
  {
    slug: "shopping-bags",
    name: "Shopping Bags",
    category: "retail-packaging",
    subcategory: "paper-bags",
    shortDescription: "Eco-friendly paper shopping bags with sturdy handles for retail stores.",
    description: "Our eco-friendly paper shopping bags are perfect for retail stores, boutiques, and branded shopping experiences. Made with high-quality kraft paper and featuring sturdy handles, these bags provide durability while maintaining an eco-conscious image. Available in various sizes and with custom printing options to showcase your brand effectively.",
    images: [
      "https://images.pexels.com/photos/5625030/pexels-photo-5625030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7319199/pexels-photo-7319199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Small, Medium, Large, Extra Large",
      material: "120-200 GSM kraft paper",
      printingOptions: ["CMYK printing", "Logo placement", "Custom designs", "Foil stamping"],
      moq: "2,000 pieces",
      leadTime: "8-12 business days",
      coating: "Optional water-resistant coating",
      colors: ["Natural kraft", "White", "Black", "Custom colors"]
    },
    features: [
      "Sturdy rope or twisted handles",
      "Eco-friendly kraft paper",
      "Custom printing available",
      "Multiple size options",
      "Reinforced bottom design",
      "Professional appearance",
      "Recyclable materials",
      "Bulk pricing available"
    ],
    relatedProducts: ["courier-bags", "product-labels", "custom-packaging", "business-cards"],
    seoTitle: "Shopping Bags Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Eco-friendly paper shopping bags with sturdy handles and custom printing. Multiple sizes for retail stores. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "5.00 - 18.00 per piece",
      note: "Handle type affects pricing"
    }
  },
  {
    slug: "courier-bags",
    name: "Courier Bags",
    category: "retail-packaging",
    subcategory: "shipping-bags",
    shortDescription: "Secure and durable bags for e-commerce and shipping applications.",
    description: "Our courier bags are specifically designed for e-commerce and shipping applications, providing secure packaging for products during transit. Made with durable materials and featuring tamper-evident closures, these bags protect contents while providing professional presentation for your delivery service.",
    images: [
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5625030/pexels-photo-5625030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various sizes from 6\"x9\" to 12\"x16\"",
      material: "High-strength kraft paper with reinforcement",
      printingOptions: ["Branding", "Address labels", "Custom designs"],
      moq: "3,000 pieces",
      leadTime: "10-15 business days",
      coating: "Water-resistant coating",
      colors: ["Brown kraft", "White", "Custom colors"]
    },
    features: [
      "Tamper-evident closure",
      "Tear-resistant construction",
      "Address label area",
      "Secure sealing mechanism",
      "Professional appearance",
      "Custom branding options",
      "Multiple size range",
      "Cost-effective shipping solution"
    ],
    relatedProducts: ["shopping-bags", "product-labels", "custom-packaging", "envelopes"],
    seoTitle: "Courier Bags Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Secure courier bags for e-commerce shipping with tamper-evident closures. Multiple sizes, custom branding available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.00 - 12.00 per piece",
      note: "Size and security features affect pricing"
    }
  },
  {
    slug: "product-labels",
    name: "Product Labels",
    category: "retail-packaging",
    subcategory: "labels-stickers",
    shortDescription: "High-quality adhesive labels for product identification and branding.",
    description: "Our product labels provide high-quality adhesive solutions for product identification, branding, and regulatory compliance. Available in various materials and adhesive strengths, these labels are perfect for product packaging, inventory management, and brand promotion across multiple industries.",
    images: [
      "https://images.pexels.com/photos/5945694/pexels-photo-5945694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7125005/pexels-photo-7125005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various standard and custom sizes",
      material: "Paper, vinyl, polyester options",
      printingOptions: ["Full-color CMYK", "Barcodes", "Variable data", "Special finishes"],
      moq: "5,000 pieces",
      leadTime: "5-10 business days",
      coating: "Gloss, matte, or clear options",
      colors: ["Full color spectrum available"]
    },
    features: [
      "High-quality adhesive",
      "Fade-resistant printing",
      "Multiple material options",
      "Barcode compatibility",
      "Custom shapes available",
      "Waterproof options",
      "Easy application",
      "Professional appearance"
    ],
    relatedProducts: ["custom-packaging", "shopping-bags", "business-cards", "stickers"],
    seoTitle: "Product Labels Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "High-quality adhesive product labels with custom printing, barcodes, and multiple materials. Fade-resistant printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.20 - 2.00 per piece",
      note: "Material and complexity affect pricing"
    }
  },
  {
    slug: "custom-packaging",
    name: "Custom Packaging",
    category: "retail-packaging",
    subcategory: "bespoke-solutions",
    shortDescription: "Bespoke packaging solutions tailored to your specific product needs.",
    description: "Our custom packaging solutions are designed specifically for your unique product requirements. From concept to production, we work with you to create packaging that perfectly fits your products while showcasing your brand. Ideal for special products, limited editions, or unique branding requirements.",
    images: [
      "https://images.pexels.com/photos/7319199/pexels-photo-7319199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5872298/pexels-photo-5872298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Completely customizable dimensions",
      material: "Various materials based on requirements",
      printingOptions: ["Full customization", "Special finishes", "Unique designs"],
      moq: "Contact for custom MOQ",
      leadTime: "20-30 business days",
      coating: "As per requirements",
      colors: ["Unlimited color options"]
    },
    features: [
      "Completely bespoke design",
      "Perfect product fit",
      "Unique branding opportunities",
      "Professional design consultation",
      "Multiple material options",
      "Special finishing techniques",
      "Prototype development",
      "Scalable production"
    ],
    relatedProducts: ["shopping-bags", "product-labels", "courier-bags", "cake-boxes"],
    seoTitle: "Custom Packaging Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Bespoke custom packaging solutions designed for your specific products. Professional consultation, unique designs, multiple materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "Contact for quote",
      note: "Pricing varies by specifications"
    }
  },

  // ========================================
  // MEDICAL PACKAGING CATEGORY
  // ========================================
  {
    slug: "medicine-packaging",
    name: "Medicine Packaging",
    category: "medical-packaging",
    subcategory: "pharmaceutical",
    shortDescription: "Tamper-proof and child-resistant packaging for pharmaceutical products.",
    description: "Our medicine packaging solutions are designed specifically for pharmaceutical products with tamper-proof and child-resistant features. Meeting all regulatory requirements and safety standards, these packages ensure product integrity while providing clear labeling space for essential medical information. Perfect for pharmaceutical companies, hospitals, and medical distributors.",
    images: [
      "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various sizes for different medications",
      material: "Pharmaceutical-grade cardboard",
      printingOptions: ["Medical-grade inks", "Regulatory compliance printing", "Barcodes"],
      moq: "5,000 pieces",
      leadTime: "15-20 business days",
      coating: "Moisture-resistant coating",
      colors: ["White", "Medical blue", "Custom colors"]
    },
    features: [
      "Tamper-evident design",
      "Child-resistant mechanisms",
      "Regulatory compliance",
      "Moisture protection",
      "Clear labeling space",
      "Barcode compatibility",
      "FDA-approved materials",
      "Professional medical appearance"
    ],
    relatedProducts: ["patient-files", "x-ray-envelopes", "business-cards", "product-labels"],
    seoTitle: "Medicine Packaging Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Tamper-proof medicine packaging with child-resistant features. Regulatory compliant, FDA-approved materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.00 - 15.00 per piece",
      note: "Regulatory compliance affects pricing"
    }
  },
  {
    slug: "patient-files",
    name: "Patient Files",
    category: "medical-packaging",
    subcategory: "medical-records",
    shortDescription: "Secure and organized filing solutions for patient records and documents.",
    description: "Our patient files are designed for secure storage and organization of medical records and patient documents. Made with durable materials and featuring clear labeling systems, these files help healthcare providers maintain organized, accessible, and confidential patient information in compliance with medical record-keeping requirements.",
    images: [
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4, Legal, Letter sizes available",
      material: "High-quality manila cardboard",
      printingOptions: ["Patient information sections", "Color coding", "Custom forms"],
      moq: "3,000 pieces",
      leadTime: "10-15 business days",
      coating: "Durable finish",
      colors: ["Manila", "Color-coded options", "Custom colors"]
    },
    features: [
      "Secure document storage",
      "Clear labeling systems",
      "Durable construction",
      "Color coding options",
      "Privacy protection",
      "Easy organization",
      "Multiple size options",
      "Professional appearance"
    ],
    relatedProducts: ["medicine-packaging", "x-ray-envelopes", "envelopes", "business-cards"],
    seoTitle: "Patient Files Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Secure patient file folders for medical records with clear labeling systems. Durable construction, color coding options. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.50 - 5.00 per piece",
      note: "Size and features affect pricing"
    }
  },
  {
    slug: "x-ray-envelopes",
    name: "X-Ray Envelopes",
    category: "medical-packaging",
    subcategory: "medical-imaging",
    shortDescription: "Protective envelopes designed specifically for X-ray and medical imaging storage.",
    description: "Our X-ray envelopes are specifically designed for storing and protecting X-ray films and medical imaging documents. Made with protective materials that prevent damage and deterioration, these envelopes feature clear labeling areas for patient information and imaging details, ensuring proper organization and easy retrieval.",
    images: [
      "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Standard X-ray sizes: 8\"x10\", 10\"x12\", 14\"x17\"",
      material: "Protective kraft paper with liner",
      printingOptions: ["Patient information fields", "Date fields", "Custom forms"],
      moq: "2,000 pieces",
      leadTime: "8-12 business days",
      coating: "Protective inner lining",
      colors: ["Brown kraft", "White", "Custom colors"]
    },
    features: [
      "X-ray film protection",
      "Damage prevention design",
      "Clear labeling areas",
      "Multiple standard sizes",
      "Protective inner lining",
      "Easy handling",
      "Professional organization",
      "Moisture resistance"
    ],
    relatedProducts: ["patient-files", "medicine-packaging", "envelopes", "custom-packaging"],
    seoTitle: "X-Ray Envelopes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Protective X-ray envelopes for medical imaging storage with damage prevention design. Multiple standard sizes, clear labeling. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.00 - 8.00 per piece",
      note: "Size and protection level affect pricing"
    }
  },

  // ========================================
  // OFFICE STATIONERY CATEGORY
  // ========================================
  {
    slug: "business-cards",
    name: "Business Cards",
    category: "office-stationery",
    subcategory: "corporate-printing",
    shortDescription: "Professional business cards with premium finishes and custom designs.",
    description: "Make a lasting first impression with our premium business cards. Printed on high-quality paper stock ranging from 250-350 GSM, our business cards feature sharp CMYK printing and various finishing options including matte, glossy, and UV coating. Perfect for professionals, entrepreneurs, and businesses looking to establish a strong brand presence.",
    images: [
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "89mm x 54mm (standard), Custom sizes available",
      material: "250-350 GSM art paper",
      printingOptions: ["CMYK full-color printing", "Pantone spot colors", "Embossing", "Foil stamping"],
      moq: "500 pieces",
      leadTime: "3-5 business days",
      coating: "Matte, Glossy, UV, or Uncoated"
    },
    features: [
      "High-resolution CMYK printing",
      "Multiple paper weight options",
      "Professional finishing options",
      "Quick 3-day turnaround",
      "Custom design service available",
      "Rounded corner option",
      "Single or double-sided printing",
      "Bulk discount pricing"
    ],
    relatedProducts: ["letterheads", "envelopes", "brochures", "flyers"],
    seoTitle: "Business Cards Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Professional business card printing with premium finishes. CMYK printing, multiple paper options, quick turnaround. Custom designs available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.50 - 2.00 per piece",
      note: "Depends on quantity and finishing"
    }
  },
  {
    slug: "letterheads",
    name: "Letterheads",
    category: "office-stationery",
    subcategory: "corporate-printing",
    shortDescription: "Corporate letterheads that enhance your business communication.",
    description: "Our professional letterheads add authority and credibility to your business correspondence. Printed on high-quality paper with precise color matching and professional layouts, these letterheads are perfect for official documents, proposals, and corporate communications. Available in various paper weights and with custom design options.",
    images: [
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4 (210mm x 297mm), Letter size available",
      material: "80-120 GSM bond paper",
      printingOptions: ["CMYK printing", "Pantone colors", "Watermarks", "Embossing"],
      moq: "1,000 pieces",
      leadTime: "5-7 business days",
      coating: "Optional coating available"
    },
    features: [
      "Professional letterhead design",
      "High-quality paper stock",
      "Precise color matching",
      "Custom design service",
      "Multiple paper weight options",
      "Watermark options available",
      "Fast turnaround time",
      "Bulk pricing available"
    ],
    relatedProducts: ["business-cards", "envelopes", "invoices", "brochures"],
    seoTitle: "Letterheads Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Professional letterhead printing with custom designs and high-quality paper. CMYK printing, watermark options available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.00 - 3.00 per piece",
      note: "Paper quality affects pricing"
    }
  },
  {
    slug: "invoices",
    name: "Invoices",
    category: "office-stationery",
    subcategory: "business-forms",
    shortDescription: "Custom invoice books and forms for your business transactions.",
    description: "Our custom invoice forms and books are designed for professional business transactions. Available in multiple copy formats (duplicate, triplicate) with carbon or carbonless options, these invoices help you maintain accurate records while presenting a professional image to your clients.",
    images: [
      "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4, A5, Custom sizes available",
      material: "80-100 GSM paper with carbon copies",
      printingOptions: ["Custom layout", "Logo placement", "Sequential numbering"],
      moq: "500 pieces",
      leadTime: "7-10 business days",
      coating: "Standard business form finish"
    },
    features: [
      "Multiple copy options",
      "Sequential numbering",
      "Custom layout design",
      "Professional appearance",
      "Carbon or carbonless options",
      "Perforated for easy removal",
      "Business logo integration",
      "Various binding options"
    ],
    relatedProducts: ["letterheads", "business-cards", "envelopes", "patient-files"],
    seoTitle: "Invoice Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Custom invoice books and forms with multiple copies, sequential numbering, and professional layouts. Carbon/carbonless options available in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.00 - 8.00 per piece",
      note: "Copy quantity affects pricing"
    }
  },
  {
    slug: "envelopes",
    name: "Envelopes",
    category: "office-stationery",
    subcategory: "mailing-supplies",
    shortDescription: "Professional envelopes in various sizes with custom branding options.",
    description: "Our professional envelopes are available in various standard sizes with custom branding options. Made with high-quality paper and featuring secure sealing mechanisms, these envelopes are perfect for business correspondence, marketing materials, and official documents.",
    images: [
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "DL, C4, C5, A4, Custom sizes",
      material: "80-120 GSM envelope paper",
      printingOptions: ["Return address printing", "Logo placement", "Color printing"],
      moq: "1,000 pieces",
      leadTime: "5-7 business days",
      coating: "Standard envelope finish"
    },
    features: [
      "Multiple standard sizes",
      "Window options available",
      "Secure sealing mechanisms",
      "Custom printing options",
      "Professional appearance",
      "Return address printing",
      "Bulk pricing available",
      "Various closure types"
    ],
    relatedProducts: ["letterheads", "business-cards", "invoices", "x-ray-envelopes"],
    seoTitle: "Envelopes Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Professional envelopes with custom printing, multiple sizes, window options. Secure sealing mechanisms, return address printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.50 - 3.00 per piece",
      note: "Size and features affect pricing"
    }
  },

  // ========================================
  // MARKETING MATERIALS CATEGORY
  // ========================================
  {
    slug: "brochures",
    name: "Brochures",
    category: "marketing-materials",
    subcategory: "promotional-print",
    shortDescription: "Professional tri-fold and bi-fold brochures for effective marketing communication.",
    description: "Our professional brochures are perfect for marketing your products and services with high-impact visual design. Available in various folding options including tri-fold, bi-fold, and z-fold formats, these brochures feature high-quality printing and professional finishes that make your marketing message stand out.",
    images: [
      "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4, A5, DL, Custom sizes",
      material: "130-300 GSM art paper",
      printingOptions: ["Full-color CMYK", "Pantone colors", "Special finishes"],
      moq: "500 pieces",
      leadTime: "5-8 business days",
      coating: "Gloss, Matte, UV coating options"
    },
    features: [
      "Multiple folding options",
      "High-resolution printing",
      "Professional design layouts",
      "Various paper weights",
      "Premium finishing options",
      "Custom design service",
      "Fast turnaround",
      "Competitive pricing"
    ],
    relatedProducts: ["flyers", "business-cards", "catalogs", "banners"],
    seoTitle: "Brochures Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Professional brochure printing with tri-fold, bi-fold options. High-quality CMYK printing, premium finishes available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.00 - 12.00 per piece",
      note: "Paper weight and finishing affect pricing"
    }
  },
  {
    slug: "flyers",
    name: "Flyers",
    category: "marketing-materials",
    subcategory: "promotional-print",
    shortDescription: "Eye-catching single-page promotional materials for events and campaigns.",
    description: "Our eye-catching flyers are perfect for promoting events, sales, and marketing campaigns. Printed on high-quality paper with vibrant colors and sharp graphics, these single-page promotional materials effectively communicate your message and drive customer action. Ideal for retail promotions, event marketing, and brand awareness campaigns.",
    images: [
      "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4, A5, A6, Custom sizes",
      material: "130-250 GSM art paper",
      printingOptions: ["Full-color CMYK", "Single/Double sided", "Special finishes"],
      moq: "500 pieces",
      leadTime: "3-5 business days",
      coating: "Gloss, Matte, or Uncoated"
    },
    features: [
      "High-impact visual design",
      "Vibrant color printing",
      "Quick turnaround time",
      "Various paper options",
      "Single or double-sided",
      "Cost-effective marketing",
      "Custom design service",
      "Bulk pricing available"
    ],
    relatedProducts: ["brochures", "banners", "business-cards", "stickers"],
    seoTitle: "Flyers Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Eye-catching flyer printing for events and promotions. High-quality CMYK printing, quick turnaround, various sizes available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.50 - 5.00 per piece",
      note: "Size and quantity affect pricing"
    }
  },
  {
    slug: "catalogs",
    name: "Catalogs",
    category: "marketing-materials",
    subcategory: "publications",
    shortDescription: "Professional product catalogs with perfect binding and high-quality imagery.",
    description: "Our professional product catalogs showcase your products with high-quality imagery and professional binding. Perfect for retail businesses, manufacturers, and service providers, these catalogs feature excellent print quality and durable binding options that create lasting impressions with your customers.",
    images: [
      "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "A4, A5, Custom sizes",
      material: "Cover: 250-350 GSM, Inside: 130-170 GSM",
      printingOptions: ["Full-color CMYK", "Professional photography", "Custom layouts"],
      moq: "250 pieces",
      leadTime: "10-15 business days",
      coating: "Various binding options available"
    },
    features: [
      "Professional binding options",
      "High-quality image reproduction",
      "Multiple page count options",
      "Custom layout design",
      "Durable construction",
      "Premium paper options",
      "Professional presentation",
      "Scalable quantities"
    ],
    relatedProducts: ["brochures", "flyers", "business-cards", "letterheads"],
    seoTitle: "Catalog Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Professional product catalog printing with perfect binding and high-quality imagery. Custom layouts, durable construction. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "15.00 - 50.00 per piece",
      note: "Page count and binding affect pricing"
    }
  },
  {
    slug: "banners",
    name: "Banners",
    category: "marketing-materials",
    subcategory: "large-format",
    shortDescription: "Large format banners for events, trade shows, and outdoor advertising.",
    description: "Our large format banners are perfect for events, trade shows, and outdoor advertising. Made with durable materials and featuring weather-resistant printing, these banners provide excellent visibility and professional presentation for your brand. Available in various sizes and mounting options.",
    images: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Custom sizes up to 3m width",
      material: "Vinyl, fabric, or paper options",
      printingOptions: ["Large format printing", "Weather-resistant inks", "Custom designs"],
      moq: "1 piece",
      leadTime: "5-10 business days",
      coating: "Weather-resistant coating for outdoor use"
    },
    features: [
      "Large format printing",
      "Weather-resistant materials",
      "Custom size options",
      "Professional mounting options",
      "Vibrant color reproduction",
      "Indoor/outdoor use",
      "Durable construction",
      "Quick installation"
    ],
    relatedProducts: ["flyers", "brochures", "stickers", "business-cards"],
    seoTitle: "Banner Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Large format banner printing for events and outdoor advertising. Weather-resistant, custom sizes, professional mounting options. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "50.00 - 500.00 per piece",
      note: "Size and material affect pricing"
    }
  },
  {
    slug: "stickers",
    name: "Stickers",
    category: "marketing-materials",
    subcategory: "promotional-items",
    shortDescription: "Custom stickers with various materials and adhesive options for branding.",
    description: "Our custom stickers are perfect for branding, promotions, and product labeling. Available in various materials including paper, vinyl, and polyester with different adhesive strengths, these stickers provide versatile solutions for marketing campaigns, product identification, and brand promotion.",
    images: [
      "https://images.pexels.com/photos/7125005/pexels-photo-7125005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5945694/pexels-photo-5945694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various standard and custom sizes",
      material: "Paper, vinyl, polyester options",
      printingOptions: ["Full-color printing", "Die-cut shapes", "Special finishes"],
      moq: "1,000 pieces",
      leadTime: "5-8 business days",
      coating: "Gloss, matte, or clear options"
    },
    features: [
      "Multiple material options",
      "Custom shape cutting",
      "Strong adhesive options",
      "Waterproof materials available",
      "Full-color printing",
      "Indoor/outdoor use",
      "Easy application",
      "Cost-effective branding"
    ],
    relatedProducts: ["product-labels", "banners", "flyers", "business-cards"],
    seoTitle: "Stickers Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Custom sticker printing with various materials and adhesive options. Die-cut shapes, waterproof options, full-color printing. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.30 - 3.00 per piece",
      note: "Material and size affect pricing"
    }
  },
  {
    slug: "hang-tags",
    name: "Hang Tags",
    category: "marketing-materials",
    subcategory: "product-tags",
    shortDescription: "Premium hang tags for retail products with custom shapes and finishes.",
    description: "Our premium hang tags add professional finishing touches to retail products. Available in various shapes, sizes, and finishes, these tags provide excellent branding opportunities while conveying important product information. Perfect for clothing, accessories, gifts, and specialty retail items.",
    images: [
      "https://images.pexels.com/photos/5872298/pexels-photo-5872298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7125005/pexels-photo-7125005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various standard and custom sizes",
      material: "250-400 GSM cardstock",
      printingOptions: ["Full-color printing", "Foil stamping", "Embossing", "Special finishes"],
      moq: "1,000 pieces",
      leadTime: "7-12 business days",
      coating: "Matte, gloss, or special finishes"
    },
    features: [
      "Custom shape options",
      "Premium finishing techniques",
      "String or elastic attachment",
      "Professional presentation",
      "Brand enhancement",
      "Product information display",
      "Durable construction",
      "Multiple attachment options"
    ],
    relatedProducts: ["product-labels", "stickers", "business-cards", "custom-packaging"],
    seoTitle: "Hang Tags Printing in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Premium hang tags for retail products with custom shapes and finishes. Foil stamping, embossing options available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.00 - 5.00 per piece",
      note: "Shape complexity and finishing affect pricing"
    }
  },

  // ========================================
  // ECO PRODUCTS CATEGORY - ARECA PALM
  // ========================================
  {
    slug: "areca-palm-plates",
    name: "Areca Palm Leaf Plates",
    category: "eco-products",
    subcategory: "areca-palm",
    shortDescription: "100% natural biodegradable plates made from fallen areca palm leaves.",
    description: "Our areca palm leaf plates are crafted from naturally fallen palm leaves, making them completely eco-friendly and sustainable. Each plate features unique natural patterns and requires no chemicals or additives in the manufacturing process. Perfect for restaurants, events, and environmentally conscious consumers who want beautiful, functional tableware without environmental impact.",
    images: [
      "https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "6\", 8\", 10\", 12\" diameter options",
      material: "100% natural areca palm leaves",
      moq: "1,000 pieces",
      leadTime: "7-10 business days",
      weight: "8-15 grams depending on size",
      temperature: "Microwave safe, heat resistant"
    },
    features: [
      "100% natural and chemical-free",
      "Biodegradable within 60 days",
      "Unique natural patterns",
      "Microwave and freezer safe",
      "Water and oil resistant",
      "No trees cut in production",
      "Compostable at end of life",
      "Cultural and aesthetic appeal"
    ],
    relatedProducts: ["areca-palm-bowls", "wooden-plates", "areca-palm-trays"],
    seoTitle: "Areca Palm Leaf Plates Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "100% natural areca palm leaf plates, biodegradable, chemical-free. Unique patterns, microwave safe. Eco-friendly tableware made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "5.00 - 15.00 per piece",
      note: "Natural product pricing varies"
    }
  },
  {
    slug: "areca-palm-trays",
    name: "Areca Palm Leaf Tray",
    category: "eco-products",
    subcategory: "areca-palm",
    shortDescription: "Elegant serving trays perfect for catering and food presentation.",
    description: "Our areca palm leaf trays provide elegant serving solutions for catering and food presentation. Made from naturally fallen palm leaves, these trays combine functionality with environmental responsibility. Each tray features unique natural grain patterns and provides sturdy, attractive serving platforms for restaurants, events, and eco-conscious dining experiences.",
    images: [
      "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "8\"x6\", 10\"x8\", 12\"x10\", Custom sizes",
      material: "100% natural areca palm leaves",
      moq: "500 pieces",
      leadTime: "10-15 business days",
      weight: "15-25 grams depending on size",
      temperature: "Heat resistant, serving safe"
    },
    features: [
      "Elegant serving presentation",
      "100% natural materials",
      "Unique grain patterns",
      "Sturdy construction",
      "Biodegradable and compostable",
      "Chemical-free production",
      "Various size options",
      "Professional food service"
    ],
    relatedProducts: ["areca-palm-plates", "areca-palm-bowls", "wooden-trays", "wooden-plates"],
    seoTitle: "Areca Palm Leaf Trays Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Elegant areca palm leaf serving trays, 100% natural, unique patterns. Perfect for catering and food presentation. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "8.00 - 20.00 per piece",
      note: "Size affects pricing"
    }
  },
  {
    slug: "areca-palm-bowls",
    name: "Areca Leaf Bowl",
    category: "eco-products",
    subcategory: "areca-palm",
    shortDescription: "Natural bowls for soups, salads, and various food servings.",
    description: "Our areca leaf bowls are perfect for serving soups, salads, and various food items with natural elegance. Crafted from fallen areca palm leaves, these bowls provide deep serving capacity while maintaining the eco-friendly properties of natural materials. Each bowl features unique patterns and provides a distinctive dining experience.",
    images: [
      "https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "3\", 4\", 5\", 6\" diameter options",
      material: "100% natural areca palm leaves",
      moq: "1,500 pieces",
      leadTime: "8-12 business days",
      weight: "10-18 grams depending on size",
      temperature: "Microwave safe, heat resistant"
    },
    features: [
      "Deep bowl design for liquids",
      "100% natural construction",
      "Unique leaf patterns",
      "Microwave and freezer safe",
      "Biodegradable within 60 days",
      "Oil and water resistant",
      "Chemical-free production",
      "Compostable disposal"
    ],
    relatedProducts: ["areca-palm-plates", "areca-palm-trays", "wooden-bowls", "wooden-spoons"],
    seoTitle: "Areca Leaf Bowls Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Natural areca leaf bowls for soups and salads. 100% biodegradable, microwave safe, unique patterns. Eco-friendly serving bowls made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "6.00 - 18.00 per piece",
      note: "Depth and size affect pricing"
    }
  },
  {
    slug: "partitioned-plates",
    name: "Partitioned Plate",
    category: "eco-products",
    subcategory: "areca-palm",
    shortDescription: "Multi-compartment plates for complete meal presentations.",
    description: "Our partitioned areca palm leaf plates feature multiple compartments for complete meal presentations. Perfect for traditional meals where different foods need to be kept separate, these plates combine the natural beauty of areca palm leaves with practical functionality for restaurants, catering, and cultural dining experiences.",
    images: [
      "https://images.pexels.com/photos/6210548/pexels-photo-6210548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "10\", 12\" diameter with 3-5 compartments",
      material: "100% natural areca palm leaves",
      moq: "800 pieces",
      leadTime: "12-18 business days",
      weight: "20-30 grams depending on size",
      temperature: "Heat resistant, serving safe"
    },
    features: [
      "Multiple compartment design",
      "Traditional meal presentation",
      "100% natural materials",
      "Unique natural patterns",
      "Biodegradable construction",
      "Chemical-free production",
      "Cultural dining appeal",
      "Professional food service"
    ],
    relatedProducts: ["areca-palm-plates", "areca-palm-bowls", "areca-palm-trays", "square-plates"],
    seoTitle: "Partitioned Areca Palm Plates Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Multi-compartment partitioned areca palm plates for traditional meals. 100% natural, biodegradable, various compartment options. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "12.00 - 25.00 per piece",
      note: "Compartment count affects pricing"
    }
  },
  {
    slug: "square-plates",
    name: "Square Plate",
    category: "eco-products",
    subcategory: "areca-palm",
    shortDescription: "Modern square-shaped plates for contemporary food presentation.",
    description: "Our square areca palm leaf plates offer a modern twist on traditional eco-friendly tableware. The contemporary square design provides excellent presentation for modern cuisine while maintaining all the environmental benefits of natural areca palm leaves. Perfect for upscale restaurants and modern dining experiences.",
    images: [
      "https://images.pexels.com/photos/5865126/pexels-photo-5865126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "6\"x6\", 8\"x8\", 10\"x10\" square options",
      material: "100% natural areca palm leaves",
      moq: "1,200 pieces",
      leadTime: "10-15 business days",
      weight: "12-22 grams depending on size",
      temperature: "Heat resistant, microwave safe"
    },
    features: [
      "Modern square design",
      "Contemporary presentation",
      "100% natural materials",
      "Unique leaf patterns",
      "Biodegradable and compostable",
      "Chemical-free production",
      "Upscale dining appeal",
      "Microwave and freezer safe"
    ],
    relatedProducts: ["areca-palm-plates", "partitioned-plates", "areca-palm-trays", "wooden-plates"],
    seoTitle: "Square Areca Palm Plates Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Modern square areca palm leaf plates for contemporary dining. 100% natural, biodegradable, unique designs. Perfect for upscale restaurants in Bangladesh.",
    price: {
      currency: "BDT",
      range: "8.00 - 22.00 per piece",
      note: "Modern design premium pricing"
    }
  },

  // ========================================
  // ECO PRODUCTS CATEGORY - WOODEN PRODUCTS
  // ========================================
  {
    slug: "wooden-plates",
    name: "Wooden Plates",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Handcrafted wooden plates made from sustainable hardwood for elegant dining.",
    description: "Our handcrafted wooden plates are made from sustainably sourced hardwood, providing durable and elegant dining solutions. Each plate features natural wood grain patterns and is carefully finished with food-safe coatings. Perfect for restaurants, hotels, and homes looking for premium, eco-friendly tableware that combines beauty with functionality.",
    images: [
      "https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "6\", 8\", 10\", 12\" diameter options",
      material: "Sustainable hardwood (teak, acacia, mango wood)",
      moq: "500 pieces",
      leadTime: "15-20 business days",
      weight: "150-400 grams depending on size",
      temperature: "Hand wash only, food-safe finish"
    },
    features: [
      "Sustainably sourced hardwood",
      "Natural wood grain patterns",
      "Food-safe coating",
      "Durable construction",
      "Hand-crafted quality",
      "Elegant appearance",
      "Multiple wood types available",
      "Long-lasting with proper care"
    ],
    relatedProducts: ["wooden-trays", "wooden-bowls", "areca-palm-plates", "cutlery-sets"],
    seoTitle: "Wooden Plates Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Handcrafted wooden plates from sustainable hardwood. Food-safe coating, natural grain patterns, multiple sizes. Elegant eco-friendly dining in Bangladesh.",
    price: {
      currency: "BDT",
      range: "15.00 - 40.00 per piece",
      note: "Wood type and size affect pricing"
    }
  },
  {
    slug: "wooden-trays",
    name: "Wooden Tray",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Beautiful serving trays perfect for breakfast, tea service, and food presentation.",
    description: "Our beautiful wooden serving trays are perfect for breakfast service, tea presentation, and elegant food serving. Crafted from high-quality hardwood with smooth finishes, these trays combine functionality with natural beauty. Ideal for hotels, restaurants, cafes, and home use where premium presentation matters.",
    images: [
      "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553277/pexels-photo-4553277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "10\"x8\", 12\"x10\", 14\"x12\", Custom sizes",
      material: "Premium hardwood with food-safe finish",
      moq: "300 pieces",
      leadTime: "18-25 business days",
      weight: "200-600 grams depending on size",
      temperature: "Hand wash, food-safe coating"
    },
    features: [
      "Premium hardwood construction",
      "Smooth food-safe finish",
      "Elegant serving presentation",
      "Comfortable handling",
      "Natural wood beauty",
      "Durable construction",
      "Multiple size options",
      "Professional food service"
    ],
    relatedProducts: ["wooden-plates", "areca-palm-trays", "cutlery-sets", "wooden-bowls"],
    seoTitle: "Wooden Serving Trays Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Beautiful wooden serving trays for breakfast and tea service. Premium hardwood, food-safe finish, elegant presentation. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "25.00 - 60.00 per piece",
      note: "Size and wood quality affect pricing"
    }
  },
  {
    slug: "cutlery-sets",
    name: "Cutlery Set",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Complete wooden cutlery sets including forks, knives, and spoons.",
    description: "Our complete wooden cutlery sets include forks, knives, and spoons crafted from sustainable hardwood. Each piece is carefully shaped and finished for comfortable use while maintaining the natural beauty of wood. Perfect for eco-conscious dining establishments and customers who prefer sustainable alternatives to plastic cutlery.",
    images: [
      "https://images.pexels.com/photos/4226711/pexels-photo-4226711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553327/pexels-photo-4553327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Standard cutlery dimensions",
      material: "Sustainable hardwood (birch, bamboo, beech)",
      moq: "1,000 sets",
      leadTime: "20-30 business days",
      weight: "15-25 grams per piece",
      temperature: "Hand wash recommended"
    },
    features: [
      "Complete 3-piece set",
      "Ergonomic design",
      "Sustainable hardwood",
      "Smooth finish",
      "Comfortable grip",
      "Eco-friendly alternative",
      "Biodegradable materials",
      "Professional dining use"
    ],
    relatedProducts: ["wooden-spoons", "wooden-forks", "wooden-plates", "bamboo-brushes"],
    seoTitle: "Wooden Cutlery Sets Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Complete wooden cutlery sets with fork, knife, spoon. Sustainable hardwood, ergonomic design, eco-friendly dining alternative. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "12.00 - 25.00 per set",
      note: "Set of 3 pieces pricing"
    }
  },
  {
    slug: "wooden-spoons",
    name: "Wooden Spoon",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Individual wooden spoons ideal for cooking, serving, and eating.",
    description: "Our individual wooden spoons are perfect for cooking, serving, and eating applications. Made from food-safe hardwood with smooth finishes, these spoons provide comfortable use while being gentle on cookware and safe for food contact. Ideal for kitchens, restaurants, and eco-conscious consumers.",
    images: [
      "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4226711/pexels-photo-4226711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various lengths: 6\", 8\", 10\", 12\"",
      material: "Food-grade hardwood",
      moq: "2,000 pieces",
      leadTime: "15-20 business days",
      weight: "8-20 grams depending on size",
      temperature: "Heat resistant, hand wash"
    },
    features: [
      "Food-safe hardwood",
      "Smooth comfortable grip",
      "Won't scratch cookware",
      "Heat resistant",
      "Natural antimicrobial properties",
      "Multiple sizes available",
      "Cooking and serving use",
      "Eco-friendly alternative"
    ],
    relatedProducts: ["wooden-forks", "cutlery-sets", "wooden-plates", "bamboo-brushes"],
    seoTitle: "Wooden Spoons Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Food-safe wooden spoons for cooking and serving. Heat resistant, smooth grip, won't scratch cookware. Multiple sizes available in Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.00 - 8.00 per piece",
      note: "Size affects pricing"
    }
  },
  {
    slug: "wooden-forks",
    name: "Wooden Fork",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Ergonomically designed wooden forks for comfortable dining experiences.",
    description: "Our ergonomically designed wooden forks provide comfortable dining experiences while supporting environmental sustainability. Crafted from food-safe hardwood with carefully shaped tines and smooth handles, these forks offer practical functionality for restaurants, events, and eco-conscious dining.",
    images: [
      "https://images.pexels.com/photos/4553327/pexels-photo-4553327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4226711/pexels-photo-4226711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Standard fork dimensions",
      material: "Food-grade hardwood",
      moq: "2,500 pieces",
      leadTime: "18-25 business days",
      weight: "6-12 grams",
      temperature: "Hand wash recommended"
    },
    features: [
      "Ergonomic design",
      "Food-safe hardwood",
      "Carefully shaped tines",
      "Smooth comfortable handle",
      "Sustainable materials",
      "Professional dining use",
      "Eco-friendly alternative",
      "Biodegradable construction"
    ],
    relatedProducts: ["wooden-spoons", "cutlery-sets", "wooden-plates", "wooden-trays"],
    seoTitle: "Wooden Forks Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Ergonomic wooden forks for comfortable dining. Food-safe hardwood, carefully shaped tines, eco-friendly alternative. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "4.00 - 9.00 per piece",
      note: "Craftsmanship affects pricing"
    }
  },
  {
    slug: "bamboo-brushes",
    name: "Bamboo Brush",
    category: "eco-products",
    subcategory: "wooden-products",
    shortDescription: "Eco-friendly bamboo brushes for cleaning and kitchen use.",
    description: "Our eco-friendly bamboo brushes are perfect for cleaning and kitchen applications. Made from fast-growing bamboo with natural bristles, these brushes provide effective cleaning while being completely biodegradable. Ideal for eco-conscious households, restaurants, and cleaning services looking for sustainable alternatives.",
    images: [
      "https://images.pexels.com/photos/4226778/pexels-photo-4226778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    specifications: {
      size: "Various sizes for different applications",
      material: "Bamboo handle with natural bristles",
      moq: "1,500 pieces",
      leadTime: "12-18 business days",
      weight: "20-50 grams depending on size",
      temperature: "Water resistant, air dry"
    },
    features: [
      "Fast-growing bamboo construction",
      "Natural bristle options",
      "Biodegradable materials",
      "Effective cleaning performance",
      "Multiple brush types available",
      "Sustainable alternative",
      "Durable construction",
      "Plastic-free solution"
    ],
    relatedProducts: ["wooden-spoons", "wooden-forks", "cutlery-sets", "areca-palm-plates"],
    seoTitle: "Bamboo Brushes Manufacturer in Bangladesh | Joana Paper",
    seoDescription: "Eco-friendly bamboo brushes for cleaning and kitchen use. Natural bristles, biodegradable materials, plastic-free alternative. Made in Bangladesh.",
    price: {
      currency: "BDT",
      range: "5.00 - 15.00 per piece",
      note: "Brush type affects pricing"
    }
  },

  // ========================================
  // PLASTIC PACKAGING CATEGORY
  // ========================================
  {
    slug: "plastic-container-box",
    name: "Plastic Container/Box",
    category: "plastic-packaging",
    subcategory: "food-containers",
    shortDescription: "Versatile food-grade plastic containers for takeaway and storage applications.",
    description: "Our food-grade plastic containers are manufactured from high-quality PP (Polypropylene) and PET materials, ensuring safety for food contact applications. Available in various sizes and configurations, these containers feature secure sealing mechanisms and are suitable for both hot and cold foods. Perfect for restaurants, catering services, and food delivery businesses.",
    images: [
      "/images/Plastic Products/Food-Container-300x300.webp",
      "/images/Plastic Products/Food-Container-300x300.jpg"
      
    ],
    specifications: {
      size: "250ml, 500ml, 750ml, 1000ml options",
      material: "Food-grade PP/PET plastic",
      printingOptions: ["Label application", "Direct printing"],
      moq: "5,000 pieces",
      leadTime: "10-12 business days",
      temperature: "-18°C to +100°C",
      colors: ["Clear", "White", "Custom colors available"]
    },
    features: [
      "FDA-approved food-safe materials",
      "Leak-proof secure closure",
      "Microwave safe (PP containers)",
      "Freezer safe for storage",
      "Stackable design",
      "Clear visibility option",
      "Recyclable materials",
      "Bulk pricing available"
    ],
    relatedProducts: ["plastic-cups", "food-tray-4-unit", "takeaway-spoons"],
    seoTitle: "Plastic Food Containers Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Food-grade plastic containers, leak-proof, microwave safe. Multiple sizes available. FDA-approved materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.00 - 12.00 per piece",
      note: "Size and quantity dependent"
    }
  },
  {
    slug: "plastic-cups",
    name: "Plastic Cups",
    category: "plastic-packaging",
    subcategory: "beverage-containers",
    shortDescription: "Clear and colored plastic cups for beverages, desserts, and cold drinks.",
    description: "Our plastic cups are perfect for beverages, desserts, and cold drinks. Made from food-grade materials, these cups provide excellent clarity for product visibility and come in various sizes for different serving needs. Ideal for cafes, juice bars, dessert shops, and events requiring disposable drinkware.",
    images: [
      "/images/Plastic Products/plastic-cups.avif",
    ],
    specifications: {
      capacity: "150ml, 250ml, 350ml, 500ml options",
      material: "Food-grade PET/PP plastic",
      printingOptions: ["Custom printing", "Logo application"],
      moq: "10,000 pieces",
      leadTime: "8-12 business days",
      temperature: "Cold beverages, room temperature",
      colors: ["Clear", "Frosted", "Custom colors"]
    },
    features: [
      "Crystal clear visibility",
      "Durable construction",
      "Smooth rim for drinking comfort",
      "Stackable design",
      "Recyclable materials",
      "Various size options",
      "Lid options available",
      "Cost-effective solution"
    ],
    relatedProducts: ["plastic-container-box", "straws", "water-bottles", "ice-cream-boxes"],
    seoTitle: "Plastic Cups Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Clear plastic cups for beverages and desserts. Food-grade materials, multiple sizes, custom printing available. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.80 - 3.00 per piece",
      note: "Size and quantity dependent"
    }
  },
  {
    slug: "takeaway-spoons",
    name: "Plastic Takeaway Spoon",
    category: "plastic-packaging",
    subcategory: "cutlery",
    shortDescription: "Disposable plastic spoons perfect for takeaway meals and food service.",
    description: "Our disposable plastic spoons are designed specifically for takeaway meals and food service applications. Made from food-grade materials, these spoons provide reliable performance for eating on-the-go. Available in various sizes and styles, they're perfect for restaurants, food delivery services, and catering operations.",
    images: [
      "/images/Plastic Products/plastic-spoons-1.avif",
      "/images/Plastic Products/plastic-spoons-3.jpeg",
      "/images/Plastic Products/plastic-spoons.jpg"
    ],
    specifications: {
      size: "Standard spoon dimensions",
      material: "Food-grade PP plastic",
      moq: "10,000 pieces",
      leadTime: "5-8 business days",
      weight: "2-3 grams per piece",
      colors: ["White", "Clear", "Black", "Custom colors"]
    },
    features: [
      "Durable construction",
      "Food-safe materials",
      "Comfortable grip design",
      "Cost-effective solution",
      "Bulk packaging available",
      "Consistent quality",
      "Multiple color options",
      "Takeaway meal compatible"
    ],
    relatedProducts: ["plastic-container-box", "straws", "strailers", "food-tray-4-unit"],
    seoTitle: "Takeaway Plastic Spoons Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Disposable plastic spoons for takeaway meals and food service. Food-grade materials, durable construction, bulk packaging. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.20 - 0.50 per piece",
      note: "Bulk pricing available"
    }
  },
  {
    slug: "straws",
    name: "Straws",
    category: "plastic-packaging",
    subcategory: "beverage-accessories",
    shortDescription: "Various plastic straws for beverages and drink service applications.",
    description: "Our plastic straws are available in various styles including straight, flexible, and jumbo options for different beverage applications. Made from food-grade materials, these straws provide reliable performance for restaurants, cafes, juice bars, and beverage services.",
    images: [
      "/images/Plastic Products/Plastic-straw-1.avif",
      "/images/Plastic Products/plastic-straws.jpg"
    ],
    specifications: {
      size: "Standard, Jumbo, Flexible options",
      material: "Food-grade PP plastic",
      moq: "20,000 pieces",
      leadTime: "5-8 business days",
      weight: "0.5-1.5 grams per piece",
      colors: ["Clear", "Colored", "Striped options"]
    },
    features: [
      "Multiple style options",
      "Food-safe materials",
      "Individually wrapped options",
      "Bulk packaging available",
      "Various color choices",
      "Consistent quality",
      "Cost-effective solution",
      "Beverage service compatible"
    ],
    relatedProducts: ["plastic-cups", "strailers", "water-bottles", "takeaway-spoons"],
    seoTitle: "Plastic Straws Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Plastic straws in various styles for beverage service. Food-grade materials, multiple colors, individually wrapped options. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.10 - 0.30 per piece",
      note: "Style and packaging affect pricing"
    }
  },
  {
    slug: "strailers",
    name: "Strailer",
    category: "plastic-packaging",
    subcategory: "beverage-accessories",
    shortDescription: "Specialized strainer accessories for beverage preparation and service.",
    description: "Our strailers (strainer accessories) are specialized tools for beverage preparation and service. Designed to fit standard cups and glasses, these strainers help separate ice, fruit pulp, and other ingredients during pouring. Perfect for bars, cafes, and beverage services requiring professional drink preparation.",
    images: [
      "/images/Plastic Products/plastic-straws.jpg",
      "/images/Plastic Products/Plastic-straw-1.avif"
    ],
    specifications: {
      size: "Standard cup-fitting dimensions",
      material: "Food-grade plastic",
      moq: "5,000 pieces",
      leadTime: "10-15 business days",
      weight: "3-5 grams per piece",
      colors: ["Clear", "White", "Black", "Custom colors"]
    },
    features: [
      "Professional beverage preparation",
      "Effective straining function",
      "Universal cup fit",
      "Durable construction",
      "Food-safe materials",
      "Easy to use design",
      "Cost-effective solution",
      "Bulk packaging available"
    ],
    relatedProducts: ["straws", "plastic-cups", "water-bottles", "takeaway-spoons"],
    seoTitle: "Beverage Strailers Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized plastic strailers for professional beverage preparation. Universal cup fit, food-safe materials, effective straining. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.50 - 1.20 per piece",
      note: "Specialized accessory pricing"
    }
  },
  {
    slug: "ice-cream-boxes",
    name: "Ice Cream Boxes",
    category: "plastic-packaging",
    subcategory: "dessert-packaging",
    shortDescription: "Specialized containers designed for ice cream and frozen dessert packaging.",
    description: "Our specialized ice cream boxes are designed specifically for ice cream and frozen dessert packaging. Featuring thermal insulation properties and secure sealing, these containers maintain product temperature and prevent leakage. Perfect for ice cream shops, dessert parlors, and frozen treat manufacturers.",
    images: [
      "/images/Plastic Products/plastic-icecream-box-1.jpg",
      "/images/Plastic Products/plastic-icecream-box.jpg"
    ],
    specifications: {
      capacity: "100ml, 250ml, 500ml, 1000ml options",
      material: "Food-grade PP plastic with insulation",
      printingOptions: ["Custom printing", "Logo application", "Branding"],
      moq: "3,000 pieces",
      leadTime: "12-18 business days",
      temperature: "Freezer safe, -20°C to +40°C",
      colors: ["White", "Clear", "Custom colors"]
    },
    features: [
      "Thermal insulation properties",
      "Secure sealing mechanism",
      "Freezer-safe construction",
      "Multiple size options",
      "Custom branding available",
      "Leak-proof design",
      "Stackable for storage",
      "Professional dessert presentation"
    ],
    relatedProducts: ["plastic-container-box", "plastic-cups", "food-tray-4-unit", "dry-cake-biscuit-tray"],
    seoTitle: "Ice Cream Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized ice cream containers with thermal insulation and secure sealing. Freezer-safe, multiple sizes, custom branding. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.50 - 8.00 per piece",
      note: "Size and insulation affect pricing"
    }
  },
  {
    slug: "pizza-lid-support",
    name: "Pizza Lid Support",
    category: "plastic-packaging",
    subcategory: "food-packaging-accessories",
    shortDescription: "Small plastic supports that prevent pizza box lids from touching the pizza.",
    description: "Our pizza lid supports are small plastic devices that prevent pizza box lids from touching the pizza surface. These simple yet effective tools maintain product quality during delivery and transport by creating space between the box lid and the pizza. Essential for pizzerias, restaurants, and food delivery services.",
    images: [
      "/images/Plastic Products/plastic-pizza-lead-support.jpg",
    ],
    specifications: {
      size: "Standard pizza support dimensions",
      material: "Food-grade PP plastic",
      moq: "10,000 pieces",
      leadTime: "5-8 business days",
      weight: "0.5-1.0 grams per piece",
      colors: ["White", "Clear", "Custom colors"]
    },
    features: [
      "Prevents box-to-pizza contact",
      "Maintains product quality",
      "Food-safe materials",
      "Lightweight design",
      "Cost-effective solution",
      "Easy application",
      "Bulk packaging available",
      "Essential delivery accessory"
    ],
    relatedProducts: ["pizza-box", "plastic-container-box", "thai-burger-box", "sandwich-box"],
    seoTitle: "Pizza Lid Supports Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Plastic pizza lid supports that prevent box contact with pizza. Food-safe, lightweight, essential for delivery quality. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "0.05 - 0.15 per piece",
      note: "Bulk pricing available"
    }
  },
  {
    slug: "water-bottles",
    name: "Water Bottles",
    category: "plastic-packaging",
    subcategory: "beverage-containers",
    shortDescription: "Disposable plastic water bottles for events, catering, and retail.",
    description: "Our disposable plastic water bottles are perfect for events, catering, and retail applications. Made from food-grade PET with secure caps, these bottles provide reliable beverage packaging for water and other drinks. Available in various sizes and with custom labeling options for branding.",
    images: [
      "/images/Plastic Products/watter-bottle.jpg",
    ],
    specifications: {
      capacity: "250ml, 500ml, 1000ml, 1500ml options",
      material: "Food-grade PET plastic",
      printingOptions: ["Custom labels", "Shrink sleeves", "Direct printing"],
      moq: "5,000 pieces",
      leadTime: "12-18 business days",
      temperature: "Cold beverages",
      colors: ["Clear", "Slight blue tint", "Custom tints"]
    },
    features: [
      "Crystal clear visibility",
      "Secure cap system",
      "Food-grade materials",
      "Custom labeling options",
      "Multiple size options",
      "Lightweight design",
      "Recyclable construction",
      "Bulk packaging available"
    ],
    relatedProducts: ["plastic-cups", "straws", "strailers", "plastic-container-box"],
    seoTitle: "Water Bottles Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Disposable plastic water bottles for events and retail. Food-grade PET, secure caps, custom labeling options. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "1.50 - 5.00 per piece",
      note: "Size and quantity affect pricing"
    }
  },
  {
    slug: "food-tray-4-unit",
    name: "Food Tray 4 Unit With Lid",
    category: "plastic-packaging",
    subcategory: "food-containers",
    shortDescription: "Multi-compartment food trays with secure lids for complete meal packaging.",
    description: "Our 4-unit food trays with secure lids are perfect for complete meal packaging. Featuring four separate compartments and a secure lid, these trays keep different food items separated while maintaining freshness. Ideal for catering services, meal prep businesses, and food delivery operations.",
    images: [
      "/images/Plastic Products/4tray-food-container.avif",

    ],
    specifications: {
      size: "Standard 4-compartment dimensions",
      material: "Food-grade PP plastic",
      printingOptions: ["Label application", "Lid printing"],
      moq: "3,000 pieces",
      leadTime: "10-15 business days",
      temperature: "Microwave safe, -20°C to +120°C",
      colors: ["Black", "White", "Clear", "Custom colors"]
    },
    features: [
      "4-compartment design",
      "Secure lid closure",
      "Microwave safe construction",
      "Leak-proof between compartments",
      "Stackable design",
      "Reusable option",
      "Food-safe materials",
      "Complete meal packaging"
    ],
    relatedProducts: ["plastic-container-box", "lunch-boxes", "food-containers", "dry-cake-biscuit-tray"],
    seoTitle: "4-Unit Food Trays Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Multi-compartment food trays with secure lids for complete meals. Microwave safe, leak-proof between compartments. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "8.00 - 15.00 per piece",
      note: "Compartment configuration affects pricing"
    }
  },
  {
    slug: "dry-cake-biscuit-tray",
    name: "Dry Cake Biscuit Tray",
    category: "plastic-packaging",
    subcategory: "bakery-packaging",
    shortDescription: "Specialized plastic trays designed for dry cakes, biscuits, and bakery items.",
    description: "Our specialized plastic trays are designed specifically for dry cakes, biscuits, and bakery items. Featuring compartments that keep items separated and protected, these trays provide excellent presentation and product protection. Perfect for bakeries, confectioneries, and retail food businesses.",
    images: [
      "/images/Plastic Products/dry-cake-pastry-containers-500x500.webp",
     
    ],
    specifications: {
      size: "Various configurations available",
      material: "Food-grade plastic",
      printingOptions: ["Label application", "Custom inserts"],
      moq: "2,000 pieces",
      leadTime: "8-12 business days",
      temperature: "Room temperature use",
      colors: ["Clear", "Gold", "Silver", "Custom colors"]
    },
    features: [
      "Specialized bakery design",
      "Product protection",
      "Attractive presentation",
      "Multiple compartment options",
      "Stackable for display",
      "Food-safe materials",
      "Custom configurations",
      "Professional appearance"
    ],
    relatedProducts: ["food-tray-4-unit", "plastic-container-box", "cake-boxes", "ice-cream-boxes"],
    seoTitle: "Bakery Trays Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized plastic trays for dry cakes and biscuits. Multiple compartments, attractive presentation, food-safe materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "5.00 - 12.00 per piece",
      note: "Configuration affects pricing"
    }
  },
  {
    slug: "thai-burger-box",
    name: "Thai Burger Box",
    category: "plastic-packaging",
    subcategory: "food-containers",
    shortDescription: "Specialized plastic containers designed for Thai-style burgers and similar foods.",
    description: "Our Thai burger boxes are specialized containers designed for Thai-style burgers, sandwiches, and similar foods. Featuring unique dimensions and secure closure, these boxes maintain food freshness while providing excellent presentation. Perfect for specialty restaurants, food trucks, and Asian fusion establishments.",
    images: [
      "/images/Plastic Products/THAI-PLASTIC-Burger-Pack.jpg",
      
    ],
    specifications: {
      size: "Thai burger standard dimensions",
      material: "Food-grade PP plastic",
      printingOptions: ["Label application", "Custom printing"],
      moq: "3,000 pieces",
      leadTime: "10-15 business days",
      temperature: "Microwave safe, -20°C to +120°C",
      colors: ["Clear", "Black", "White", "Custom colors"]
    },
    features: [
      "Specialized burger dimensions",
      "Secure closure system",
      "Microwave safe option",
      "Stackable design",
      "Food-safe materials",
      "Excellent presentation",
      "Moisture retention",
      "Heat retention properties"
    ],
    relatedProducts: ["burger-boxes", "sandwich-box", "plastic-container-box", "food-containers"],
    seoTitle: "Thai Burger Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized plastic containers for Thai-style burgers with secure closure. Microwave safe, excellent presentation, food-safe materials. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "3.50 - 7.00 per piece",
      note: "Specialized design pricing"
    }
  },
  {
    slug: "egg-tray",
    name: "Egg Tray",
    category: "plastic-packaging",
    subcategory: "food-packaging",
    shortDescription: "Plastic trays specifically designed for safe egg storage and transport.",
    description: "Our plastic egg trays are specifically designed for safe egg storage and transport. Featuring individual compartments that protect each egg from damage, these trays provide excellent product protection for retailers, distributors, and food service operations handling eggs.",
    images: [
      "/images/Plastic Products/plastic-egg-tray.png",
    ],
    specifications: {
      size: "6-egg, 12-egg, 24-egg configurations",
      material: "Food-grade plastic",
      printingOptions: ["Label application"],
      moq: "5,000 pieces",
      leadTime: "8-12 business days",
      temperature: "Refrigerator safe",
      colors: ["Clear", "White", "Custom colors"]
    },
    features: [
      "Individual egg compartments",
      "Impact protection design",
      "Stackable configuration",
      "Food-safe materials",
      "Refrigerator safe",
      "Reusable construction",
      "Easy handling design",
      "Professional food service"
    ],
    relatedProducts: ["plastic-container-box", "food-tray-4-unit", "dry-cake-biscuit-tray", "sandwich-box"],
    seoTitle: "Plastic Egg Trays Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Specialized plastic egg trays with individual compartments for safe storage and transport. Impact protection, stackable design. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.00 - 6.00 per piece",
      note: "Egg capacity affects pricing"
    }
  },
  {
    slug: "sandwich-box",
    name: "Sandwich Box",
    category: "plastic-packaging",
    subcategory: "food-containers",
    shortDescription: "Compact plastic boxes perfect for sandwich packaging and takeaway meals.",
    description: "Our compact plastic sandwich boxes are perfect for packaging sandwiches, wraps, and similar takeaway meals. Featuring secure closure and transparent design for product visibility, these boxes maintain food freshness while providing excellent presentation. Ideal for cafes, delis, and food service operations.",
    images: [
      "/images/Plastic Products/sandwich-plastic-box.jpg",
    ],
    specifications: {
      size: "Standard sandwich dimensions",
      material: "Food-grade PET/PP plastic",
      printingOptions: ["Label application", "Custom printing"],
      moq: "5,000 pieces",
      leadTime: "8-12 business days",
      temperature: "Cold to room temperature",
      colors: ["Clear", "Black base/clear top", "Custom colors"]
    },
    features: [
      "Compact sandwich design",
      "Secure closure system",
      "Product visibility",
      "Stackable configuration",
      "Food-safe materials",
      "Moisture retention",
      "Easy handling",
      "Professional presentation"
    ],
    relatedProducts: ["burger-boxes", "thai-burger-box", "plastic-container-box", "sandwich-boxes"],
    seoTitle: "Plastic Sandwich Boxes Manufacturer in Dhaka, Bangladesh | Joana Paper",
    seoDescription: "Compact plastic sandwich boxes with secure closure and product visibility. Food-safe materials, professional presentation. Made in Dhaka, Bangladesh.",
    price: {
      currency: "BDT",
      range: "2.00 - 5.00 per piece",
      note: "Design and features affect pricing"
    }
  }
];

// Helper functions for product operations
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getRelatedProducts(productSlug: string): Product[] {
  const product = getProductBySlug(productSlug);
  if (!product) return [];
  
  return product.relatedProducts
    .map(slug => getProductBySlug(slug))
    .filter(Boolean) as Product[];
}

export function getAllCategories(): string[] {
  return [...new Set(products.map(product => product.category))];
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}