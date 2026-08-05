"use client";

interface Props {
  products: {
    name: string;
    sales: number;
  }[];
}

export default function TopProducts({
  products,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">

        Top Selling Products

      </h2>

      <div className="space-y-5">

        {products.map((product, index) => (

          <div
            key={product.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">

                {index + 1}

              </div>

              <div>

                <p className="font-semibold">

                  {product.name}

                </p>

                <p className="text-sm text-gray-500">

                  {product.sales} Sales

                </p>

              </div>

            </div>

            <div className="font-bold">

              {product.sales}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}