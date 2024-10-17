import { getUsers } from "@/utils/api";
import { FaEye, FaTrash } from "react-icons/fa";
import TableContainer from "./TableContainer";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const Table = async () => {
  const data = await getUsers();

  return (
    <TableContainer>
      <thead className="bg-gray-100 border-b shadow ">
        <tr className="text-left">
          <th className=" w-10">#</th>
          <th className=" w-48">İsim</th>
          <th className=" w-64">Eposta</th>
          <th className=" w-32">Ülke</th>
          <th className=" w-32">Şehir</th>
          <th className=" w-24 text-center">Eylem</th>
        </tr>
      </thead>

      <tbody>
        {data.map((user, key) => (
          <tr className="border-b" key={user.id}>
            <td>{key}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td className=" flex justify-center gap-2 ">
              <Link
                href={`?show=${user.id}`}
                className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
              >
                <FaEye />
              </Link>
              <DeleteButton id={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
