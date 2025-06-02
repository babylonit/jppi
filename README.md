# Joana Paper Product Industry Website

A modern, responsive website for Joana Paper Product Industry built with Astro and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/          # Static assets (images, fonts)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Page components (routes)
│   ├── data/        # Data files (gallery images, etc.)
│   └── styles/      # Global styles
└── package.json
```

### Key Directories

- `src/components/`: Reusable UI components like Hero, Footer, etc.
- `src/pages/`: Each file becomes a route automatically
- `src/data/`: Contains data files like `galleryImages.ts`
- `public/`: Static assets like images and fonts

## 🎨 Common Customizations

### Updating Images

1. **Hero Images**: 
   - Open the page file (e.g., `src/pages/index.astro`)
   - Find the `Hero` component
   - Update the `backgroundImage` prop with your image URL
   ```astro
   <Hero
     backgroundImage="https://your-image-url.jpg"
     ...
   />
   ```

2. **Gallery Images**:
   - Open `src/data/galleryImages.ts`
   - Add/modify images in the `galleryImages` array
   ```typescript
   {
     src: 'https://your-image-url.jpg',
     alt: 'Image description',
     category: 'Paper Cups'
   }
   ```

3. **Product Images**:
   - Find the product section in relevant page files
   - Update the `image` property in product objects
   ```typescript
   const products = [
     {
       title: 'Product Name',
       image: 'https://your-image-url.jpg',
       ...
     }
   ];
   ```

### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `new-page.astro`)
2. Use the basic page structure:
```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';

const title = "Page Title";
const description = "Page description for SEO";
---

<Layout title={title} description={description}>
  <Hero
    title="Page Title"
    subtitle="Page subtitle"
    backgroundImage="https://your-image-url.jpg"
  />
  
  <!-- Add your content sections here -->
</Layout>
```

### Modifying Content

1. **Homepage**: Edit `src/pages/index.astro`
2. **Products**: Edit `src/pages/disposable-paper-cups.astro`
3. **Contact**: Edit `src/pages/contact.astro`
4. **FAQ**: Edit `src/pages/faq.astro`

### Updating Navigation

1. Open `src/components/Header.astro`
2. Modify the `navItems` array:
```typescript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'New Page', href: '/new-page' },
  ...
];
```

### Styling Changes

1. **Colors**: Edit `tailwind.config.mjs`
```javascript
colors: {
  primary: {
    500: '#your-color-code',
    ...
  }
}
```

2. **Global Styles**: Edit `src/styles/global.css`

## 🧩 Components

### Key Components

- `Hero.astro`: Main hero section with background image
- `ProductCard.astro`: Product display card
- `FeatureCard.astro`: Feature highlight card
- `ContactForm.astro`: Contact form component
- `Footer.astro`: Site footer with navigation
- `Header.astro`: Site header with navigation

### Using Components

```astro
---
import ComponentName from '../components/ComponentName.astro';
---

<ComponentName
  prop1="value1"
  prop2="value2"
/>
```

## 📱 Responsive Design

The site uses Tailwind's responsive classes:
- `sm:` (640px+)
- `md:` (768px+)
- `lg:` (1024px+)
- `xl:` (1280px+)

Example:
```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist/` directory

3. Deploy using Netlify or your preferred hosting platform

## 📝 License

All rights reserved © Joana Paper Product Industry