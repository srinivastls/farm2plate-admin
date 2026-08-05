"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Category } from "@/types/category";

interface Props {
  open: boolean;
  onClose: () => void;
  category?: Category | null;
  onSave?: (data: Partial<Category>) => void;
}

export default function CategoryDialog({
  open,
  onClose,
  category,
  onSave,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Category>();

  useEffect(() => {
    if (category) {
      reset(category);
    } else {
      reset({
        name: "",
        icon: "🌾",
        description: "",
      } as Category);
    }
  }, [category, reset]);

  function submit(data: Category) {
    onSave?.(data);
    onClose();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-xl">

        <DialogHeader>

          <DialogTitle>

            {category
              ? "Edit Category"
              : "Add Category"}

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-6"
        >

          <div>

            <label className="mb-2 block font-medium">
              Category Name
            </label>

            <input
              {...register("name")}
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Icon
            </label>

            <input
              {...register("icon")}
              placeholder="🌾"
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              {...register("description")}
              rows={4}
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-green-600 px-5 py-2 text-white"
            >
              Save
            </button>

          </div>

        </form>

      </DialogContent>

    </Dialog>
  );
}