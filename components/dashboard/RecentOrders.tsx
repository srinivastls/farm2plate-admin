interface Props {
  orders: any[];
}

export default function RecentOrders({
  orders,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Recent Orders
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">
              Customer
            </th>

            <th>Status</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b"
            >

              <td className="py-3">
                {order.user?.name}
              </td>

              <td>{order.status}</td>

              <td>₹{order.total}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}