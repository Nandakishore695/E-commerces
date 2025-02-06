import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

function NavBar() {
    const isUser = true;
    const isAdmin = false;

    return (
        <header>
            <nav>
                <Link to="/"><img src={logo} width={100}/></Link>
                {isUser && (
                    <div>
                        <Link to="/" ><button>Home</button></Link>
                        <br />
                        <Link>Cart</Link>
                        <br />
                        <Link>Dashboard</Link>
                        <br />
                        <Link>Log out</Link>
                    </div>)}
                    {isAdmin && (
                    <div>
                        <Link>Home</Link>
                        <br />
                        <Link>Cart</Link>
                        <br />
                        <Link>Dashboard</Link>
                        <br />
                        <Link>Sign Up</Link>
                        <br />
                        <Link>Log out</Link>
                    </div>)}
            </nav>
        </ header>
    )
}

export default NavBar;
