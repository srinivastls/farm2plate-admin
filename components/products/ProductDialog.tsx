"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import ProductForm from "./ProductForm";

interface Props{

    open:boolean;

    onClose:()=>void;

    product?:any;

}

export default function ProductDialog({

    open,

    onClose,

    product,

}:Props){

    return(

        <Dialog

            open={open}

            onOpenChange={onClose}

        >

            <DialogContent className="max-w-5xl">

                <DialogHeader>

                    <DialogTitle>

                        {

                            product

                            ?

                            "Edit Product"

                            :

                            "Add Product"

                        }

                    </DialogTitle>

                </DialogHeader>

                <ProductForm

                    product={product}

                    onClose={onClose}

                />

            </DialogContent>

        </Dialog>

    );

}