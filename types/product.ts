export interface Product {

  id:string;

  name:string;

  description?:string;

  image?:string;

  organic:boolean;

  price:number;

  marketPrice:number;

  quantity:number;

  unit:string;

  lotId:string;

  qualityGrade?:string;

  processingStage:"RAW"|"PROCESSED";

  farm:{
    id:string;
    name:string;
  };

  category:{
    id:string;
    name:string;
  };

}