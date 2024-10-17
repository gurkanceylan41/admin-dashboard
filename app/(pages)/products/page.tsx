import Title from "@/components/title";
import { getProducts } from "@/utils/api";
import Card from "./Card";
import { Suspense } from "react";
import Loader from "@/components/loaders/Loader";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Title>Ürünler</Title>

        <Link
          href="/products/new"
          className="bg-green-400 hover:bg-green-500 transition py-1 px-3 rounded-lg text-white"
        >
          Ürün Ekle
        </Link>
      </div>

      {/* Suspense: Bileşeni yüklenirken bekletir.
          Fallback: Bu bekleme sırasında gösterilecek yedek içeriği belirler.  */}
      <Suspense fallback={<Loader designs="my-20" />}>
        <List />
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getProducts();
  //await wait();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      {data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
