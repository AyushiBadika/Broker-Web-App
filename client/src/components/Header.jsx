import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-primaryText ">My</span>
            <span className="text-SecondaryText ">Broker</span>
          </h1>
        </Link>
        <form className="flex items-center bg-slate-100 p-3 rounded-lg">
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600" />
        </form>
        <div className="flex gap-8 font-semibold">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/sign-in" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
