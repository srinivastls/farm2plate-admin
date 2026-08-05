export interface Inventory {

  id:string;

  name:string;

  image?:string;

  quantity:number;

  unit:string;

  price:number;

  marketPrice:number;

  processingStage:"RAW"|"PROCESSED";

  organic:boolean;

  qualityGrade?:string;

  farm:{
    id:string;
    name:string;
  };

  category:{
    id:string;
    name:string;
  };

}