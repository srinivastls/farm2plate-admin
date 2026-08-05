interface Props {
  products: any[];
}

export default function LowStockProducts({
  products,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Low Stock Products
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">
              Product
            </th>

            <th>Stock</th>

          </tr>

        </thead>

        <tbody>

          {products.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="py-3">
                {item.name}
              </td>

              <td>{item.quantity}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}