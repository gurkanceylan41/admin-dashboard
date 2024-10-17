"use client";

import { deleteUsers } from "@/utils/api";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteUsers(id).then(() => {
      router.refresh();
    });
  };
  return (
    <button onClick={handleDelete}>
      <FaTrash className="text-red-500" />
    </button>
  );
};

export default DeleteButton;
