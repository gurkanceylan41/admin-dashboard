import InfoCard from "./InfoCard";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.png";
import icon3 from "@/assets/images/icon-3.png";
import SalesGraph from "./SalesGraph";
import { Suspense } from "react";
import GraphLoader from "@/components/loaders/GraphLoader";
import Title from "@/components/title";
import { getValues } from "@/utils/api";

const Home = async () => {
  const data = await getValues();
  console.log(data);

  const cards = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: data.totalUsers,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: data.totalOrder,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: data.totalIncome,
    },
    {
      icon: icon1,
      label: "Ürün Sayısı",
      value: data.productsCount,
    },
  ];

  return (
    <div>
      <Title>Dashboard</Title>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
        {cards.map((card, key) => (
          <InfoCard
            key={key}
            icons={card.icon}
            label={card.label}
            value={card.value}
          />
        ))}

        <Suspense fallback={<GraphLoader />}>
          <SalesGraph />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
