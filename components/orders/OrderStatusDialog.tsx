"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { OrderStatus } from "@/types/order";

interface Props {

  open:boolean;

  currentStatus:OrderStatus;

  onClose:()=>void;

  onSave:(status:OrderStatus)=>void;

}

const statuses:OrderStatus[]=[

"PENDING",

"CONFIRMED",

"PACKED",

"SHIPPED",

"DELIVERED",

"CANCELLED",

];

export default function OrderStatusDialog({

open,

currentStatus,

onClose,

onSave,

}:Props){

const[
status,
setStatus,
]=useState<OrderStatus>(currentStatus);

return(

<Dialog
open={open}
onOpenChange={onClose}
>

<DialogContent>

<DialogHeader>

<DialogTitle>

Update Order Status

</DialogTitle>

</DialogHeader>

<select

value={status}

onChange={(e)=>

setStatus(

e.target.value as OrderStatus,

)

}

className="w-full rounded-lg border p-3"

>

{statuses.map((s)=>(

<option
key={s}
value={s}
>

{s}

</option>

))}

</select>

<div className="mt-6 flex justify-end gap-3">

<button

onClick={onClose}

className="rounded-lg border px-5 py-2"

>

Cancel

</button>

<button

onClick={()=>

onSave(status)

}

className="rounded-lg bg-green-600 px-5 py-2 text-white"

>

Save

</button>

</div>

</DialogContent>

</Dialog>

);

}