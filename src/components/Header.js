import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import PATH from "../constants/Path";
import { ReactComponent as HamBurgerSvg } from "../assets/svg/hamburger.svg";
import Button from "./Button";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useCart } from "../context-reducer/context/LoginContext";

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, contextLogin, contextLogout } = useCart();
  const [hidden, setHidden] = useState(true);
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : true
  );

  const activeClass =
    "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));

    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const onLogin = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem("isLogin", true);
      contextLogin();
    });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      localStorage.setItem("isLogin", false);
      localStorage.removeItem("userDetails");
      contextLogout();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = e.target.search.value;
    e.target.reset();

    navigate(`${PATH.search}?q=${q}`);
  };

  return (
    <header>
      <nav className="bg-slate-100 border-gray-900 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Post
            </span>
          </a>

          <div className="flex md:order-3">
            {isLogin ? (
              <Button onClick={() => onLogout()} classname="text-xs font-medium mr-2 p-2">
                <i className="bi bi-box-arrow-right"></i>
              </Button>
            ) : (
              <Button onClick={() => onLogin()} classname="text-xs font-medium mr-2 p-2">
                <i className="bi bi-google"></i>
              </Button>
            )}

            <button
              onClick={() => setMode(!mode)}
              data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
              type="button"
              data-toggle-dark="light"
              className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {mode ? (
                <i className="bi bi-sun-fill text-gray-500 dark:text-white"></i>
              ) : (
                <i className="bi bi-moon-stars-fill text-gray-500 dark:text-white"></i>
              )}
            </button>

            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className={`md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1`}
              onClick={() => setHidden(!hidden)}
            >
              <i className="bi bi-search text-sm text-gray-500 dark:text-white"></i>
              <span className="sr-only">Search</span>
            </button>
            <div className={`relative hidden md:block`}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i className="bi bi-search text-sm text-gray-500 dark:text-white"></i>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className={`md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setHidden(!hidden)}
            >
              <span className="sr-only">Open main menu</span>
              <HamBurgerSvg />
            </button>
          </div>

          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className={`relative mt-3 md:hidden`}>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <i className="bi bi-search text-sm text-gray-500 dark:text-white"></i>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </form>
            </div>

            {/* Mobile Menu */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="py-2.5">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
                  aria-current="page"
                  end
                >
                  Home
                </NavLink>
              </li>
              {isLogin && (
                <li className="py-2.5">
                  <NavLink
                    to={PATH.createPost}
                    className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
                  >
                    Create Post
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
