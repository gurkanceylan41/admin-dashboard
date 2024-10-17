import { section } from "@/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="h-screen min-w-[60px] ">
      <div className="navbar flex flex-col gap-5 border fixed bg-white h-screen  ">
        <button className="grid place-items-center pt-7 text-2xl">
          <input id="check" type="checkbox" />
          <label className="cursor-pointer" htmlFor="check">
            <RxHamburgerMenu />
          </label>
        </button>

        <div className="flex flex-col  text-[#B2B2B2]">
          {section.map((i, key) => (
            <NavLink key={key} item={i} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
