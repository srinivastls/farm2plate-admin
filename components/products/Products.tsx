"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import api from "@/services/api";

import ProductStats from "./ProductStats";
import ProductFilters from "./ProductFilters";
import ProductTable from "./ProductTable";
import ProductDetails from "./ProductDetails";
import ProductDialog from "./ProductDialog";
import DeleteProductDialog from "./DeleteProductDialog";

import { Product } from "@/types/product"; // adjust import path if needed

export default function Products() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [isDialogOpen, setIsDialogOpen] =
    useState(false);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const {
    data: products,
    isLoading,
  } = useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      const res = await api.get("/admin/products");
      return res.data;
    },
  });

  const handleDelete = async () => {
    if (!selectedProduct) return;

    try {
      await api.delete(`/admin/products/${selectedProduct.id}`);

      setIsDeleteOpen(false);
      setSelectedProduct(null);

      // Later we'll invalidate the products query
      // queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="space-y-8">
      <ProductStats products={products} />

      <ProductFilters />

      <ProductTable
        products={products}
        onView={setSelectedProduct}
        onEdit={(product) => {
          setSelectedProduct(product);
          setIsDialogOpen(true);
        }}
        onDelete={(product) => {
          setSelectedProduct(product);
          setIsDeleteOpen(true);
        }}
      />

      <ProductDetails product={selectedProduct} />

      <ProductDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        product={selectedProduct}
      />

      <DeleteProductDialog
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}