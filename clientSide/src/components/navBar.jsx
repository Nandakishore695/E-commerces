import { Link } from "react-router-dom";
import { ShoppingCart, LogOut, Lock, UserPlus, User } from "lucide-react";

function NavBar() {
    const isUser = true;
    const isAdmin = false;

    return (
        <header className="bg-[#F4F4F5] flex justify-between px-8 ">
            <Link to={"/"} className="text-[#2CAC5B] text-2xl font-bold p-4">E-Commerce</Link>
            <nav className="flex items-center px-8">
                <input className="border-gray-600" />
                <Link to={"/"} className="mx-2" >Home</Link>
                {isUser && (
                    <ul className=" flex justify-around p-4 items-center ">
                        <li className="flex mx-2 px-2 py-2">
                           <Link to={"/"} ><User /></Link>
                        </li>
                        
                        <li className="flex mx-2 px-2 py-2">
                           <Link to={"/cart"} ><ShoppingCart/></Link>
                        </li>
                    </ul>
                )}

                {isUser ? (
                    <ul>
                        <li className="flex bg-[#3B3E4E] rounded mx-2 px-2 py-2">
                            <LogOut color="white" className="mx-2" />
                            <Link to={"/login"} className="text-white">logout</Link>
                        </li>
                    </ul>)
                    : (
                        <>
                        {!isAdmin &&(<ul className="flex"> <li className="flex bg-[#3B3E4E] rounded mx-2 px-2 py-2">
                            <LogOut color="white" className="mx-2" />
                            <Link to={"/login"} className="text-white">Log In</Link>
                        </li>
                        <li className="flex bg-[#3B3E4E] rounded mx-2 px-2 py-2">
                         <UserPlus color="white" className="mx-2" />
                            <Link to={"/signup"} className="text-white">Sign Up</Link>
                        </li>
                        </ul>
                    )}
                    </>)}
                {isAdmin && (
                    <ul className=" flex justify-around p-4 items-center ">
                        <li className="flex bg-[#2CAC5B] rounded mx-2 px-2 py-2">
                            <Lock color="white" />
                            <Link className="text-white px-2">Dashboard</Link>
                        </li>
                        <li className="flex bg-[#3B3E4E] rounded mx-2 px-2 py-2">
                        <LogOut color="white" className="mx-2"/>
                            <Link to={"/login"} className="text-white">Log Out</Link>
                        </li>
                    </ul>
                )}


            </nav>
        </ header>
    )
}
export default NavBar;