import { getOrders } from "@/utils/api";
import Graph from "./Graph";
import { wait } from "@/utils/wait";

const SalesGraph = async () => {
  const data = await getOrders();

  return (
    <div className="mt-10rounded-lg p-5">
      <h2 className="font-semibold text-lg"> Satış Detayları </h2>
      <Graph data={data} />
    </div>
  );
};

export default SalesGraph;
