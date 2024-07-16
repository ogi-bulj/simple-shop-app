export interface Product {
  brandId: number;
  brandName: string;
  brandSlug: string;
  breadcrumb: {
    label: string;
    slug: string;
  }[];
  categoryTagNames: string[];
  colors: string[];
  clickOutAllowed: boolean;
  cpc: number;
  deepLink: string;
  description: string;
  epc: number;
  genders: string[];
  hasCoupon: boolean;
  lowestPrice: number;
  mainImageUrl: string;
  additionalImages: string[];
  materials: string;
  name: string;
  originalPrice: number;
  pageTags: string[];
  price: number;
  productId: string;
  productLines: string[];
  retailerId: number;
  retailerName: string;
  retailerScore: number;
  shippingCost: number;
  shippingInfo: string;
  sizes: {
    id: string;
    name: string;
  }[];
}
