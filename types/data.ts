export type BusinessData = {
  businessName: string;
  tagline: string;
  phone: string;
  address: string;
  mapQuery: string;
  services: string[];
  hours: string[];
  reviews: {
    name: string;
    text: string;
    rating: number;
  features?: string[];
facebookUsername: string;
mapQuery: string;
hours: string[];
  }[];
};
