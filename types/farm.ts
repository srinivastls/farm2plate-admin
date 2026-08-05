export interface FarmProduct {

  id: string;

  name: string;

  quantity: number;

  unit: string;

  price: number;

  processingStage: "RAW" | "PROCESSED";

}

export interface Farm {

  id: string;

  name: string;

  description?: string;

  image?: string;

  address: string;

  latitude: number;

  longitude: number;

  createdAt: string;

  farmer: {

    id: string;

    farmName: string;

    rating: number;

    verified: boolean;

    user: {

      id: string;

      name: string;

      email: string;

    };

  };

  products: FarmProduct[];

}