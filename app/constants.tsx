import { TiHome } from "react-icons/ti";
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

export const section = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparisler",
    url: "/orders",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },

  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const inputs = [
  {
    label: "İsim",
    name: "name",
  },
  {
    label: "Marka",
    name: "brand",
  },
  {
    label: "Kategori",
    name: "category",
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
  },
  {
    label: "Açıklama",
    name: "description",
  },
];
