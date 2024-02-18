export interface Product {
  brand: string;
  category: string;
  colors: string[];
  description: { title: string, description: string }[];
  discount: number;
  featured: boolean;
  full_details: { [key: string]: string };
  id: string;
  images: { [key: string]: string[] };
  name: string;
  price: number;
  quantity: number;
  rating: number;
  recommended: boolean;
  reviews: number;
  stock: number;
}


export interface Product2 {

  id: string;
  name: string;
  brand: string;
  stock: number;
  price: number;
  discount?: number;
  quantity: number;
  recommended?: boolean;
  featured?: boolean;
  new_product?: boolean;
  rating: number;
  reviews: number;
  colors: string[];
  images: { [color: string]: string[] } | { [color: string]: string[] }[];
  description: { title: string; description: string }[];
  category: string;
  star?: number;
  full_details?: Record<string, string>[];

};
export interface UpdateQuantity {
  id: string;
  quantity: number;
}

export interface ProductCardProps {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    discount?: number;
    images: { [color: string]: string[] } | { [color: string]: string[] }[];
    colors: string[];
    star?: number;
    rating: number;
    reviews?: number;
    stock: number;
  }
  

export interface CartItems extends UpdateQuantity {
  name: string,
  image: string,
  amount: number,
  price: number,
}

export interface AddToWishListProps {
  id: string;
  name?: string;
  firstImagePath?: string;
  price?: number;
  quantity: number;
  stock: number;
  selected:string;
  large?:boolean;
}

export interface AddToCartProps extends AddToWishListProps {
 
}


export interface ContextState {
  allProducts: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[],
  bed: Product[],
  sofa: Product[],
  dinning: Product[],
  kidsFurniture: Product[],
  newProducts: Product[],
}

export interface BunkBedroomPackage extends Product {
  type: "Kids Furniture";
  includes: string;
  numberOfPieces: number;
  style: string;
}

export interface MediumMattress extends Product {
  type: "mattress";
  feel: "Medium";
  style: "Traditional";
  springType: "Pocket Spring";
  features: string;
  zones: string;
  whereWasIMade: string;
}

export interface DoubleBed extends Product {
  type: "mattress";
  underBedHeight: string;
  style: "Modern";
  bedBaseType: "No Slats";
}

export interface DoubleMattressSpineLab extends Product {
  type: "mattress";
  feel: "Medium";
  springType: "Bonnell Spring";
  comfortLayers: string;
  zones: string;
}

export interface QueenMediumMattress extends Product {
  type: "mattress";
  feel: "Medium";
  springType: "Pocket Spring";
  features: string;
  zones: string;
  whereWasIMade: string;
}

export interface DoubleMattressSleeptight extends Product {
  type: "mattress";
  feel: "Medium";
  style: "Traditional";
  springType: "Bonnell Spring";
  zones: string;
  whereWasIMade: string;
  mattressInABox: "Yes";
}
export interface Product6 {
  id: string;
  name: string;
  brand: string;
  price: number;
  discount?: number;
  new_product: boolean;
  rating: number;
  reviews: number;
  colors: string[];
  images: { [color: string]: string[] };
  description: { title: string; description: string }[];
  category: string;
}

export interface FullDetails {

}



interface Product9 {
  id: string;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  reviews: number;
  colors: string[];
  images: { [color: string]: string[] };
  description: ProductDescription[];
  category: string;
}

interface ProductDescription {
  title: string;
  description: string;
}

interface ProductDetails {
  Colour: string;
  Assembly: string;
  Delivery_type: string;
  Seating_Capacity: string;
  Style?: string;
  Shape?: string;
  Assembled_Size?: string;
  Packaged_Size?: string;
  Type?: string;
  Features?: string;
}