"use client";

import { useForm } from "react-hook-form";

export default function ProductForm(){

    const{

        register,

        handleSubmit,

        watch,

    }=useForm();

    const farmplatePrice=
        Number(
            watch("price")||0,
        );

    const marketPrice=
        Number(
            watch("marketPrice")||0,
        );

    const saving=
        marketPrice-
        farmplatePrice;

    return(

        <form className="space-y-8">

            {/* BASIC */}

            <div>

                <h2 className="font-bold text-xl mb-4">

                    Basic Information

                </h2>

                <div className="grid grid-cols-2 gap-5">

                    <input

                        {...register("name")}

                        placeholder="Product Name"

                        className="border rounded-lg p-3"

                    />

                    <input

                        {...register("image")}

                        placeholder="Image URL"

                        className="border rounded-lg p-3"

                    />

                </div>

                <textarea

                    {...register("description")}

                    placeholder="Description"

                    className="border rounded-lg p-3 mt-4 w-full"

                />

            </div>

            {/* PRICING */}

            <div>

                <h2 className="font-bold text-xl mb-4">

                    Pricing

                </h2>

                <div className="grid grid-cols-3 gap-5">

                    <input

                        type="number"

                        {...register("price")}

                        placeholder="FarmPlate Price"

                        className="border rounded-lg p-3"

                    />

                    <input

                        type="number"

                        {...register("marketPrice")}

                        placeholder="Market Price"

                        className="border rounded-lg p-3"

                    />

                    <div className="border rounded-lg p-3 bg-green-50">

                        Customer Saves

                        <div className="text-2xl font-bold text-green-600">

                            ₹{saving}

                        </div>

                    </div>

                </div>

            </div>

        </form>

    );

}