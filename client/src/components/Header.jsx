import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-primaryText ">My</span>
            <span className="text-SecondaryText ">Broker</span>
          </h1>
        </Link>
        <form className="flex items-center bg-slate-100 p-3 rounded-lg" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div className="flex gap-8 font-semibold">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/profile" className="hover:underline">
            {currentUser ? <img src={currentUser.avatar} alt="profile" className="rounded-full w-7 h-7 object-cover" /> : "Sign In"}
          </Link>
        </div>
      </div>
    </header>
  );
}
