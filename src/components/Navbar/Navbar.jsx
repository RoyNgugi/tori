import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // ✅ Import AuthContext

const Navbar = () => {
    const { user, logout } = useAuth(); // ✅ Get user state & logout function

    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto px-5">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52">
                            <li className="mb-1 font-bold">
                                <NavLink to="/" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Home</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to="/allClasses" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>All Classes</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>About Us</NavLink>
                            </li>
                            <li className="mb-1 font-bold">
                                <NavLink to="/contactUs" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Contact Us</NavLink>
                            </li>

                            {/* ✅ Show Login if No User, Otherwise Show Logout */}
                            {!user ? (
                                <li className="mb-1 font-bold">
                                    <NavLink to="/login" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Login</NavLink>
                                </li>
                            ) : (
                                <li className="mb-1 font-bold">
                                    <button onClick={logout} className="text-red-600 font-bold">Logout</button>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Logo Section */}
                    <div className="flex gap-3">
                        <img className="w-24" src="https://i.ibb.co/ZH9S3JW/logo.png" alt="Tori Music School Logo" />
                        <div className="flex items-center">
                            <a className="font-bold text-xl md:text-2xl">
                                <span className="text-amber-600">Tori Music </span>
                                <span className="text-cyan-800">School</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navbar End */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-8 px-1 font-bold text-xl">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allClasses" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>All Classes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutUs" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactUs" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Contact Us</NavLink>
                        </li>

                        {/* ✅ Show User Info & Logout Button */}
                        {user ? (
                            <>
                                                             <li>
                                    <button onClick={logout} className="text-red-600 font-bold">Logout</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "underline text-amber-600 font-bold" : ""}>Login</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
