import Loader from "@/components/loaders/Loader";
import TableContainer from "@/components/table/TableContainer";
import Title from "@/components/title";
import { getOrders } from "@/utils/api";

import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Title>Siparişler</Title>
      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getOrders();

  return (
    <TableContainer>
      <thead className="bg-gray-100 border-b shadow">
        <tr className="text-left text-gray-700 font-semibold">
          <th className="px-6 py-4  ">#</th>
          <th className="px-6 py-4  ">Sipariş ID</th>
          <th className="px-6 py-4  ">Tarih</th>
          <th className="px-6 py-4  ">Durum</th>
          <th className="px-6 py-4  ">Toplam Fiyat</th>
          <th className="px-6 py-4  ">Adres</th>
          <th className="px-6 py-4  ">Ürünler</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, key) => (
          <tr className="border-b hover:bg-gray-50" key={key}>
            <td>{key + 1}</td>
            <td>{order.order_id}</td>
            <td className="text-nowrap">
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>
            <td
              className={`px-6 py-4 font-medium text-nowrap ${
                order.status === "Teslim Edildi"
                  ? "text-green-500"
                  : order.status === "Kargoya Verildi"
                  ? "text-blue-500"
                  : "text-yellow-500"
              }`}
            >
              {order.status}
            </td>
            <td>${order.total_price.toFixed(2)}</td>
            <td>
              {order.shipping_address.street}, {order.shipping_address.city},{" "}
              {order.shipping_address.country}
            </td>
            <td>
              <ul className="list-disc list-inside">
                {order.items.map((item, itemKey) => (
                  <li key={itemKey} className="text-gray-600">
                    {item.quantity}x {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Page;
