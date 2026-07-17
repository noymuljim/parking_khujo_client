import { useEffect, useState } from "react";

import Logo from "../../../components/Logo";

const Navbar = () => {


  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
${scrolled
          ? "bg-gradient-to-b from-[#0B2545]/95 via-[#0F4C81]/70 to-transparent backdrop-blur-md text-white"
          : "bg-transparent text-white"
        }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white text-slate-900 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <a className="cursor-pointer">
            <Logo />
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
            <li>
              <a>Home</a>
            </li>

            <li>
              <details>
                <summary className="text-white">Parking</summary>
                <ul className="p-2 bg-white text-slate-900 rounded-box w-52 shadow">

                  <li>

                    <ul className="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>

                </ul>

              </details>
            </li>
            <li>
              <a>Hme</a>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="btn bg-[#10B981] hover:bg-[#059669] text-white border-none rounded-full px-6">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;