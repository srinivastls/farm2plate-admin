export interface Settings {

  companyName:string;

  supportEmail:string;

  supportPhone:string;

  currency:string;

  gstPercentage:number;

  deliveryCharge:number;

  freeDeliveryLimit:number;

  orderCancellationHours:number;

  enableNotifications:boolean;

  enableEmail:boolean;

  enableSMS:boolean;

  enablePush:boolean;

  paymentGateway:string;

  razorpayKey:string;

  stripeKey:string;

  co2Factor:number;

  waterFactor:number;

}