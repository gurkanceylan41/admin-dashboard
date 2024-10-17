import { Product } from "@/types";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-4 shadow-lg font-nunito flex flex-col ">
      <div className="relative h-[200px] ">
        <Image
          className="rounded-lg"
          fill
          src={product.image_url}
          alt={product.name}
        />
      </div>
      <div className="mt-2 flex flex-col justify-between flex-1 ">
        <div>
          <h5 className="font-bold line-clamp-2">{product.name}</h5>
          <h5 className="text-[#4880FF] font-bold mb-2">${product.price}</h5>
        </div>
        <div className="flex justify-between">
          <Link
            href={`/products/${product.id}`}
            className="py-1 px-3 bg-[#E2EAF8] hover:bg-[#7aa7f4] transition rounded-md"
          >
            Düzenle
          </Link>
          <DeleteButton id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
