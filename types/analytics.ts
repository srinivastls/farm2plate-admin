export interface AnalyticsSummary {

  revenue:number;

  orders:number;

  customers:number;

  farmers:number;

  products:number;

  farms:number;

  co2Saved:number;

  waterSaved:number;

  customerSavings:number;

}

export interface RevenuePoint{

  month:string;

  revenue:number;

}
export interface Activity {

  id:string;

  title:string;

  description:string;

  time:string;

}
export interface OrderPoint{

  month:string;

  orders:number;

}

export interface ProductPerformance{

  name:string;

  sales:number;

}

export interface FarmPerformance{

  name:string;

  revenue:number;

}

export interface CategoryPerformance{

  name:string;

  value:number;

}

export interface Analytics{

  summary:AnalyticsSummary;

  revenue:RevenuePoint[];

  ordersTrend:OrderPoint[];

  topProducts:ProductPerformance[];

  farmPerformance:FarmPerformance[];

  categoryPerformance:CategoryPerformance[];

  recentActivities:Activity[];

}