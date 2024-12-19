import { faAdd, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full gap-2 p-2 fixed bg-white">
      <Link
        className="p-2 rounded-lg flex border-amber-500 text-amber-500 font-semibold gap-1 items-center"
        href={"/task/new"}
      >
        <FontAwesomeIcon
          icon={faAdd}
          className="w-5 text-amber-500"
        ></FontAwesomeIcon>
        Agregar Tarea
      </Link>
      <Link
        className="p-2 rounded-lg flex border-green-500 text-green-500 font-semibold gap-1 items-center"
        href={"/tasks"}
      >
        <FontAwesomeIcon
          icon={faList}
          className="w-5 text-green-500"
        ></FontAwesomeIcon>
        Mis Tareas
      </Link>
    </nav>
  );
}
