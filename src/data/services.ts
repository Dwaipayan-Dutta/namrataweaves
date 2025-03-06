import { Service, SubService, Product } from '../types';

export const stylingSubServices: SubService[] = [
  {
    title: "Personal Style Consultation",
    description: "One-on-one sessions with our style experts to develop your personal aesthetic while incorporating Bengali design elements.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
  },
  {
    title: "Event Styling",
    description: "Complete styling services for special occasions that honor Bengali heritage with modern flair.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3",
  },
  {
    title: "Wardrobe Curation",
    description: "Professional curation services to build a versatile wardrobe that bridges traditional Bengali style with contemporary fashion.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3",
  },
];

export const bengalImmersionSubServices: SubService[] = [
  {
    title: "Weaving Masterclass",
    description: "Hands-on experience with traditional Bengali looms under the guidance of master weavers.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
  },
  {
    title: "Natural Dye Workshop",
    description: "Learn the ancient art of creating vibrant colors from natural materials found in Bengal.",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-4.0.3",
  },
  {
    title: "Textile History Tour",
    description: "Journey through historic textile centers in Bengal to witness living traditions firsthand.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3",
  },
];

export const designStudioServices: Service[] = [
  {
    id: "custom-saree-design",
    title: "Custom Saree Design",
    description: "Collaborate with our artisans to create your own unique saree design, incorporating traditional Bengali motifs and contemporary elements.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "heritage-restoration",
    title: "Heritage Restoration",
    description: "Expert restoration services for vintage Bengali textiles, preserving their historical significance while making them wearable for future generations.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "modern-collections",
    title: "Modern Collections",
    description: "Ready-to-wear collections that blend traditional Bengali craftsmanship with contemporary silhouettes and design sensibilities.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
];

export const stylingServices: Service[] = [
  {
    id: "personal-style-consultation",
    title: "Personal Style Consultation",
    description: "One-on-one sessions with our style experts to develop your personal aesthetic while incorporating Bengali design elements.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "wardrobe-curation",
    title: "Wardrobe Curation",
    description: "Professional curation services to build a versatile wardrobe that bridges traditional Bengali style with contemporary fashion.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
  {
    id: "occasion-styling",
    title: "Occasion Styling",
    description: "Expert styling advice for special events, ensuring you embody Bengali elegance while maintaining your personal style.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    subServices: stylingSubServices,
  },
];

export const bengalImmersionServices: Service[] = [
  {
    id: "artisan-workshops",
    title: "Artisan Workshops",
    description: "Hands-on workshops with master craftsmen, learning traditional Bengali textile techniques and patterns.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
  {
    id: "heritage-tours",
    title: "Heritage Tours",
    description: "Curated tours of historic textile villages and workshops, experiencing the living tradition of Bengali craftsmanship.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
  {
    id: "cultural-programs",
    title: "Cultural Programs",
    description: "Immersive experiences showcasing Bengali art, music, and textile traditions through interactive sessions and demonstrations.",
    image: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-4.0.3",
    subServices: bengalImmersionSubServices,
  },
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: "The Heritage Saree Collection",
    description: "Each thread tells a story of Bengal's rich textile heritage. Our signature collection features hand-woven masterpieces that blend traditional motifs with contemporary elegance.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3",
    link: "/design-studio",
  },
  {
    id: 2,
    title: "Personal Style Journey",
    description: "Transform your wardrobe with our bespoke styling service. We help you discover your unique style identity while incorporating elements of Bengali culture.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3",
    link: "/styling-consultancy",
  },
  {
    id: 3,
    title: "Artisan Workshop Experience",
    description: "Immerse yourself in the world of Bengali craftsmanship. Learn directly from master artisans in their traditional workshops.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3",
    link: "/bengal-immersion",
  },
];