"use client";

interface Props {

  open:boolean;

  onClose:()=>void;

  onDelete:()=>void;

}

export default function DeleteProductDialog({

  open,

  onClose,

  onDelete,

}:Props){

  if(!open)return null;

  return(

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-xl p-6 w-[420px]">

        <h2 className="text-2xl font-bold">

          Delete Product

        </h2>

        <p className="mt-3 text-gray-500">

          Are you sure you want to delete this product?

        </p>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}