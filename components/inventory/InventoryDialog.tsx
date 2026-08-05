"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Inventory } from "@/types/inventory";

interface Props {
  open: boolean;
  onClose: () => void;
  product: Inventory | null;
  onSave?: (data: any) => void;
}

export default function InventoryDialog({
  open,
  onClose,
  product,
  onSave,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const price =
    Number(watch("price") ?? 0);

  const marketPrice =
    Number(watch("marketPrice") ?? 0);

  const saving =
    marketPrice - price;

  const submit = (data: any) => {
    if (onSave) {
      onSave(data);
    }

    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-4xl">

        <DialogHeader>

          <DialogTitle>

            Update Inventory

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-8"
        >

          {/* Product */}

          <div>

            <h2 className="mb-4 text-xl font-bold">

              Product

            </h2>

            <div className="grid grid-cols-2 gap-5">

              <input
                {...register("name")}
                disabled
                className="rounded-lg border bg-gray-100 p-3"
              />

              <input
                {...register("processingStage")}
                disabled
                className="rounded-lg border bg-gray-100 p-3"
              />

            </div>

          </div>

          {/* Pricing */}

          <div>

            <h2 className="mb-4 text-xl font-bold">

              Pricing

            </h2>

            <div className="grid grid-cols-3 gap-5">

              <input
                type="number"
                placeholder="FarmPlate Price"
                {...register("price")}
                className="rounded-lg border p-3"
              />

              <input
                type="number"
                placeholder="Market Price"
                {...register("marketPrice")}
                className="rounded-lg border p-3"
              />

              <div className="rounded-lg border bg-green-50 p-3">

                <p className="text-sm text-gray-500">

                  Customer Saving

                </p>

                <p className="text-2xl font-bold text-green-600">

                  ₹{saving}

                </p>

              </div>

            </div>

          </div>

          {/* Inventory */}

          <div>

            <h2 className="mb-4 text-xl font-bold">

              Inventory

            </h2>

            <div className="grid grid-cols-3 gap-5">

              <input
                type="number"
                placeholder="Quantity"
                {...register("quantity")}
                className="rounded-lg border p-3"
              />

              <input
                placeholder="Unit"
                {...register("unit")}
                className="rounded-lg border p-3"
              />

              <input
                placeholder="Quality Grade"
                {...register("qualityGrade")}
                className="rounded-lg border p-3"
              />

            </div>

          </div>

          {/* Organic */}

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              {...register("organic")}
            />

            <span>

              Organic Product

            </span>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-6 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-green-600 px-6 py-2 text-white"
            >
              Save Changes
            </button>

          </div>

        </form>

      </DialogContent>
    </Dialog>
  );
}