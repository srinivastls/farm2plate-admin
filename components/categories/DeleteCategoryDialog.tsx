"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  categoryName?: string;
  loading?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteCategoryDialog({
  open,
  categoryName,
  loading = false,
  onClose,
  onDelete,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-md">

        <DialogHeader>

          <DialogTitle className="text-red-600">
            Delete Category
          </DialogTitle>

          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>

        </DialogHeader>

        <div className="py-4">

          <p>
            Are you sure you want to delete
          </p>

          <p className="mt-2 text-lg font-bold">
            {categoryName}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Products under this category should be reassigned
            before deleting it.
          </p>

        </div>

        <DialogFooter>

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={onDelete}
            className="rounded-lg bg-red-600 px-5 py-2 text-white disabled:opacity-50"
          >
            {loading
              ? "Deleting..."
              : "Delete"}
          </button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}