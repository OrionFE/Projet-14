"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav>
      <ul className="text-xl flex justify-center items-center gap-5 pt-5">
        <li
          className={`hover:bg-blue-600 p-3 rounded ${
            currentRoute == "/"
              ? "bg-blue-600 border-2 border-blue-800"
              : "bg-blue-500"
          }`}
        >
          <Link className="text-white" href="/">
            Create Employee
          </Link>
        </li>
        <li
          className={`hover:bg-blue-600 p-3 rounded ${
            currentRoute == "/list"
              ? "bg-blue-600 border-2 border-blue-800"
              : "bg-blue-500"
          }`}
        >
          <Link className="text-white" href="/list">
            Current Employees
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
