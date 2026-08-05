export interface CustomerOrder {

  id: string;

  total: number;

  status: string;

  createdAt: string;

}

export interface Customer {

  id: string;

  name: string;

  email: string;

  phone?: string;

  createdAt: string;

  totalOrders: number;

  totalSpent: number;

  totalSaved: number;

  favoriteFarm?: string;

  favoriteCategory?: string;

  orders: CustomerOrder[];

}