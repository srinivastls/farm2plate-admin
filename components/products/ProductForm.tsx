"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ProductFormProps {
  product?: any;
  onClose: () => void;
}

export default function ProductForm({
  product,
  onClose,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      image: "",
      description: "",
      price: 0,
      marketPrice: 0,
    },
  });

  useEffect(() => {
    if (product) {
      reset(product);
    } else {
      reset({
        name: "",
        image: "",
        description: "",
        price: 0,
        marketPrice: 0,
      });
    }
  }, [product, reset]);

  const farmplatePrice = Number(watch("price") || 0);
  const marketPrice = Number(watch("marketPrice") || 0);
  const saving = marketPrice - farmplatePrice;

  const onSubmit = (data: any) => {
    console.log(data);

    // TODO: Save product

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="border rounded-lg px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg px-5 py-2"
        >
          {product ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
}