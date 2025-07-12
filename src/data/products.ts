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
  // PAPER CUPS CATEGORY
  {
    slug: "50ml-paper-cup",
    name: "50ml Disposable Paper Cup",
    category: "paper-cups",
    subcategory: "disposable-cups",
    shortDescription: "Ultra-small biodegradable paper cup perfect for espresso shots and taste testing.",
    description: "Our 50ml disposable paper cups are specifically designed for espresso shots, sample servings, and taste testing applications. Made with FDA-approved materials and featuring our QC-100 certified leak-proof technology, these ultra-small cups provide the perfect solution for cafes, restaurants, and tasting events. The compact 35mm bottom size ensures optimal espresso crema retention while the eco-friendly construction supports your sustainability goals.",
    images: [
      "https://images.pexels.com/photos/3215283/pexels-photo-3215283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    slug: "plastic-container-box",
    name: "Plastic Container/Box",
    category: "plastic-packaging",
    subcategory: "food-containers",
    shortDescription: "Versatile food-grade plastic containers for takeaway and storage applications.",
    description: "Our food-grade plastic containers are manufactured from high-quality PP (Polypropylene) and PET materials, ensuring safety for food contact applications. Available in various sizes and configurations, these containers feature secure sealing mechanisms and are suitable for both hot and cold foods. Perfect for restaurants, catering services, and food delivery businesses.",
    images: [
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5942599/pexels-photo-5942599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  }
  // Add more products following the same pattern...
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