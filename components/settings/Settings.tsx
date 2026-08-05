"use client";

import { useQuery } from "@tanstack/react-query";

import { getSettings } from "@/services/settings.service";

import GeneralSettings from "./GeneralSettings";
import PricingSettings from "./PricingSettings";
import DeliverySettings from "./DeliverySettings";
import NotificationSettings from "./NotificationSettings";
import PaymentSettings from "./PaymentSettings";
import SustainabilitySettings from "./SustainabilitySettings";
import SecuritySettings from "./SecuritySettings";

export default function Settings(){

const{

data,

isLoading,

}=useQuery({

queryKey:["settings"],

queryFn:getSettings,

});

if(isLoading){

return<>Loading...</>;

}

if(!data){

return<>No settings found.</>;

}

return(

<div className="space-y-8">

<GeneralSettings settings={data}/>

<PricingSettings settings={data}/>

<DeliverySettings settings={data}/>

<PaymentSettings settings={data}/>

<NotificationSettings settings={data}/>

<SustainabilitySettings settings={data}/>

<SecuritySettings settings={data}/>

</div>

);

}