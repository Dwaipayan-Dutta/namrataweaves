export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export interface SubService {
    title: string;
    description: string;
    image: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    subServices?: SubService[];
  }
  
  export interface ServiceGridProps {
    services: Service[];
    showLearnMore?: boolean;
    pageUrl?: string;
  }