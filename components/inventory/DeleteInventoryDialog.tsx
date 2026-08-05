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
  productName?: string;
  onClose: () => void;
  onDelete: () => void;
  loading?: boolean;
}

export default function DeleteInventoryDialog({
  open,
  productName,
  onClose,
  onDelete,
  loading = false,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-md">

        <DialogHeader>

          <DialogTitle className="text-red-600">
            Delete Inventory
          </DialogTitle>

          <DialogDescription>

            This action cannot be undone.

          </DialogDescription>

        </DialogHeader>

        <div className="py-4">

          <p className="text-gray-700">

            Are you sure you want to remove

          </p>

          <p className="mt-2 font-bold text-lg">

            {productName}

          </p>

          <p className="mt-3 text-sm text-gray-500">

            This will permanently remove the inventory record.

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
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
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