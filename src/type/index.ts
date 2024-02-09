export interface Product {

    // Add other specific properties based on your needs
  }

  export interface Product2  {

      id: string;
      name: string;
      brand: string;
      price: number;
      discount?: number;
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


    // full_details: {
    //   AssembledSize: string;
    //   PackagedSize: string;
    //   Color?: string; // Optional color property, as it's present only in some products
    //   Assembly?: string;
    //   DeliveryType?: string;
    //   type?: string;
    // style?: string;
    // suggestedMattressHeight?: string;
    // sleepingCapacity?: number;

    // "Assembled Size"?: string;
    // "Packaged Size"?: string;
    // "Packaged Size (Box1)"?: string;
    // "Packaged Size (Box2)"?: string;
    // "Under Bed Height"?: string;
    // "Delivery type": string;
    // "Includes"?: string;
    // "Type"?: string;
    // "Number Of Pieces"?: number;
    // "Style"?: string;
    // "Suggested Mattress Height"?: string;
    // "Sleeping Capacity"?: number;
    // "Feel"?: string;
    // "Spring Type"?: string;
    // "Comfort Layers"?: string;
    // "Zones"?: string;
    // "Where Was I Made"?: string;
    // "Mattress In A Box"?: string;
    // "Features"?: string;
    // }[];
  };

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