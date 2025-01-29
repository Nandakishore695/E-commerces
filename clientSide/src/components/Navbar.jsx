import React from "react";
import { Link } from "react-router-dom";
import { LogOut, LogIn, ShoppingCart, UserPlus, Lock } from "lucide-react";
const user = true;
const isAdmin = true;
const cart = true;
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex bg-blue-500 opacity-70 shadow-lg z-40 background-blur-md transition-all duration-300">
      <div className="mx-auto py-3 px-4 flex">
        <Link to="/" className="items-center flex text-2xl">
          E-commerce
        </Link>
        {user && (
          <Link
            to={"/cart"}
            className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 
							ease-in-out"
          >
            <ShoppingCart
              className="inline-block mr-1 group-hover:text-emerald-400"
              size={20}
            />
            <span className="hidden sm:inline">Cart</span>
            {cart.length > 0 && (
              <span
                className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
              >
                {cart.length}
              </span>
            )}
          </Link>
        )}
        {isAdmin && (
          <Link
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
                             transition duration-300 ease-in-out flex items-center"
            to={"/secret-dashboard"}
          >
            <Lock className="inline-block mr-1" size={18} />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
        )}

        <nav className="flex flex-wrap items-center gap-3"></nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>SignUp</Link>
        <Link to={"/login"}>login</Link>
      </div>
    </header>
  );
};

export default Navbar;
