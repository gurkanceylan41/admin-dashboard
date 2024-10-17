"use client";
import { Order } from "@/types";
import "chart.js/auto";

import { Line } from "react-chartjs-2";

const Graph = ({ data }: { data: Order[] }) => {
  const gData = {
    labels: data.map((i) => i.order_date),
    datasets: [
      {
        id: 1,
        label: "Fiyat",
        data: data.map((i) => i.total_price),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Aspect ratio'yu kaldırıyoruz
  };

  return (
    <div className="w-[400px] h-[250px] sm:h-[250px]  md:h-[300px] lg:h-[350px] sm:w-[600px] md:w-[700px] xl:w-[800px]">
      <Line data={gData} options={options} />
    </div>
  );
};

export default Graph;
