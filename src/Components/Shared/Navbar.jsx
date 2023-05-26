import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import '../../../public/style.css'
import { AuthContext } from "../AuthProviders/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const profilePhoto = [];
    const Name = []
    for (const i in user) {
        if (i == 'photoURL') { profilePhoto.push(user[i]) }
        if (i == 'displayName') { Name.push(user[i]) }
    } const btnLogOut = () => {
        logOut()
            .then()
            .catch(console.error(error.massege))
    }

    return (
        <div>
            <nav className="bg-gradient-to-l from-pink-200 to-purple-400 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#">
                                <div className="flex items-center font-bold ">
                                    <img className="h-32 w-auto " src="logo.png" alt="Logo" /><h4 className="text-2xl customize_font text-fuchsia-900 font-bold relative md:right-10 right-10">Disney<span className="text-cyan-700">Magic</span><span className="text-red-700">Mart</span></h4>
                                </div>
                            </a>

                        </div>
                        <div className="hidden md:flex items-center">
                            <NavLink to="/" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm ">Home</NavLink>
                            <NavLink to="/blogs" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm ">Blogs</NavLink>
                            <NavLink to="/alltoys" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm ">All Toys</NavLink>




                            {user ? <div>
                                <NavLink to="/addtoy" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm ">Add Toy</NavLink>
                                <NavLink to="/mytoys" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm ">My Toys</NavLink>
                                <Link to="/" onClick={btnLogOut} className="text-purple-800 font-bold  rounded-md text-base ms-2 me-2">Logout</Link></div> : <NavLink to="/login" className="text-purple-800 font-bold  px-3 py-2 rounded-md text-sm">Login</NavLink>


                            }
                            <div>
                                {
                                    user && <div className="avatar">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 mt-2 ">
                                            <a id="not-clickable">
                                                <span className="text-xs"><img className="object-cover rounded-full h-full min-w-full" src={profilePhoto[0]} alt="" /></span></a>
                                            <Tooltip anchorSelect="#not-clickable" className='text-dark bg-light'>
                                                <button className='text-dark bg-light border-0 '>{Name[0] ? Name[0] : <div className="">
                                                    
                                                </div>}</button>
                                            </Tooltip>

                                        </div>
                                    </div>
                                }

                            </div>



                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} type="button" className="text-purple-800 font-bold hover:text-white focus:outline-none focus:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink to="/" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base ">Home</NavLink>
                                <NavLink to="/blogs" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base ">Blogs</NavLink>
                                <NavLink to="/alltoys" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base ">All Toys</NavLink>

                                {user ? <div><NavLink to="/addtoy" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base  ">Add Toy</NavLink>
                                    <NavLink to="/mytoys" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base  ">My Toys</NavLink> <Link to="/" onClick={btnLogOut} className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base  ">Logout</Link> </div> : <NavLink to="/login" className="text-purple-800 font-bold  block px-3 py-2 rounded-md text-base ">Login</NavLink>

                                }
                                <div>
                                    {
                                        user && <div className="avatar">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-14 ms-3 mt-2">
                                                <a id="not-clickable">
                                                    <span className="text-xs"><img className=" object-cover rounded-full h-full min-w-full" src={profilePhoto[0]} alt="" /></span></a>
                                                <Tooltip anchorSelect="#not-clickable" className='text-dark bg-light'>
                                                    <button className='text-dark bg-light border-0 '>{Name[0] ? Name[0] : <div className="avatar placeholder">
                                                       
                                                    </div>}</button>
                                                </Tooltip>

                                            </div>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;