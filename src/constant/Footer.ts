import { IconType } from "react-icons";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export interface Brand {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface FooterLink {
  id: number;
  title: string;
  links: string[];
}

export interface Service {
  id: number;
  name: string;
}

export interface AppLink {
  id: number;
  title?: string;   
  name?: string;    
  image?: string;   
  url?: string;     
}

export interface SocialMedia {
  id: number;
  platform: string;
  url: string;
  icon: IconType;
}

export interface Contact {
  id: number;
  phoneNumbers: string[];
}

export interface PaymentMethod {
  id: number;
  name: string;
  logo: string;
}

// Brands
export const brands: Brand[] = [
  { id: 1, name: "Zara" },
  { id: 2, name: "Guess" },
  { id: 3, name: "Mango" },
  { id: 4, name: "LCWaikiki" },
  { id: 5, name: "Monda" },
];

// Categories
export const categories: Category[] = [
  { id: 1, name: "Watches" },
  { id: 2, name: "Watch Accessories" },
  { id: 3, name: "Clocks" },
  { id: 4, name: "Jewellery" },
  { id: 5, name: "Women’s Collection" },
  { id: 6, name: "Accessories" },
];

// Footer Links
export const footerLinks: FooterLink[] = [
  { id: 1, title: "Orders & Policies", links: ["Order Tracking", "Terms & Conditions", "Privacy Policy", "Tutorials", "FAQ"] },
  { id: 2, title: "Services", links: ["Sale", "Quick Ship", "New Designs", "Protection Plan", "Gift Cards"] },
  { id: 3, title: "Company", links: ["About Us", "Careers", "Help", "Contact us", "Reviews"] },
  { id: 4, title: "Policies", links: ["Terms of Service", "Refund Policy"] },
];

// App Links


// Social Media
export const socialMedia: SocialMedia[] = [
  { id: 1, platform: "Facebook", url: "#", icon: CiFacebook  },
  { id: 2, platform: "Instagram", url: "#", icon: CiInstagram},
  { id: 3, platform: "Twitter", url: "#", icon: CiTwitter  },
];

// Contact
export const contact: Contact = {
  id:1,
  phoneNumbers: ["(500) 8001 8588", "(500) 544 6550"],
};

// Payment Methods
export const paymentMethods: PaymentMethod[] = [
  { id: 1, name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
  { id: 2, name: "MasterCard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  { id: 3, name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { id: 4, name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" },
];


