import { useEffect, useState } from "react";

import Logo from "../../../components/Logo";
import useAuth from "../../../Hooks/useAuth";
import { Link, NavLink } from "react-router";
import userLogo from "../../../assets/user.jpg"

const Navbar = () => {

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error)
      })
  }

const links= <>

        {/* <li><NavLink to="/">Home</NavLink></li> */}
        {
          user && 
                  <li><NavLink to="/dashboard" className="font-bold hover:text-green-500 border-2 rounded-4xl p-1.5 px-3">Dashboard</NavLink></li>

        }
</>

  // navbar scroll
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
      <div className="navbar max-w-7xl mx-auto px-4 flex items-center">

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
         {links}
            </ul>
          </div>


          <Link className="cursor-pointer" to="/"> <Logo /></Link>

        </div>

        {/* Navbar Center */}
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
           {links}

          
          </ul>
        </div> */}

        {/* Navbar End */}
        <div className="navbar-end">
        <div className="mr-4 hidden lg:flex">
         <ul>
           {links}
         </ul>
        </div>
          {
            user ? (
              <div className="flex items-center gap-3">
             



                {/* Logout Button */}
                <button onClick={handleLogOut} className="btn bg-primary rounded-3xl hover:bg-secondary text-white">
                  Log Out
                </button>

                   {/* User Image */}
                <div className="w-9 h-9 border-2 border-gray-300
                             rounded-full overflow-hidden">
                  <img
                    src={user.photoURL ? user.photoURL : userLogo}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (

              <div className="flex items-center">

                <Link to="/login" className="btn bg-primary rounded-3xl hover:bg-secondary text-white ">
                  Log in
                </Link>


              </div>
            )

            
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;