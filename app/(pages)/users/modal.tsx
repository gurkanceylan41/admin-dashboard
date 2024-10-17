"use client";

import { getUserById } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MdClose } from "react-icons/md";

const Modal = async ({ id }: { id: string }) => {
  const router = useRouter();
  const data = await getUserById(id);

  const fields = [
    {
      label: "Email",
      value: data.email,
    },
    {
      label: "Ülke",
      value: data.address.country,
    },
    {
      label: "Şehir",
      value: data.address.city,
    },
    {
      label: "Sokak",
      value: data.address.street,
    },
    {
      label: "Posta Kodu",
      value: data.address.postal_code,
    },
    {
      label: "Telefon No",
      value: data.phone,
    },
    {
      label: "Sipariş Sayısı",
      value: data.orders.length,
    },
  ];

  return (
    <div className="fixed bg-black inset-0 bg-opacity-50 grid place-items-center">
      <div className="bg-white rounded-lg shodow p-8 px-14">
        <div className="flex justify-end">
          <Link
            className="shadow p-2 rounded-lg hover:shadow-lg hover:bg-gray-200 transition"
            href={"/users"}
          >
            <MdClose />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">
            {data.name}
          </h1>

          {fields.map((field, key) => (
            <div className="flex justify-between gap-16" key={key}>
              <span>{field.label}</span>
              <span className="font-semibold">{field.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;