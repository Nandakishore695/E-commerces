import { Link } from "react-router-dom";

function NavBar() {
    const isUser = true;
    const isAdmin = false;

    return (
        <header>
            <nav>
                <Link to="/">E-Commerce</Link>
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
