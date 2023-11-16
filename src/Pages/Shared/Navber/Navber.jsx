import { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => { console.log(err.message) })
    }
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourmenu'>Our Menu</Link></li>
        <li><Link to='/ourshop'>Our Shop</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>

        {
            user ?
                <>
                    <button onClick={handleLogout} className="btn btn-ghost">logout</button>
                </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-transparent text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Button</a>
            </div>
        </div>
    );
};

export default Navber;