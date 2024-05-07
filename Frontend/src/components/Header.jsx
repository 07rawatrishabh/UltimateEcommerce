import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        { <img
                            src="https://www.logomaker.com/api/main/images/1j_ojFVGOMkX9W_reBe4hGf60qfD71UQx0PbizxmfGwQoQJukSYojvN9taRvJx0WvwRMjhUZN5hkyWEuXIESjRlj_z_POopVDSE8nX9rAbZZX30rcBTJXbrKuBxllfR0j...EUs0bdU3uWEHrZd9gkIZPX56h0EYYy1z_ZJyMs8H5iGrlXJYbOBYMuyo6uVfpD83bEFuZScr3hFYCyEjNDkCUhKrMZ_Io-"
                            className="mr-3 h-12"
                            alt="Logo"
                        /> }
                        <h1 className='text-3xl font-bold text-blue-700 '>Admin Panel</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                       
                        <button
                            to={'/LoginPage'}
                             onClick={()=>document.getElementById("my_modal_3").showModal()}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                           Login
                           <LoginPage></LoginPage>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink 
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-xl duration-200 ${isActive?"text-blue-700 ":"text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                             <li>
                                <NavLink 
                                to="/Customer"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-xl duration-200 ${isActive?"text-blue-700 ":"text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Customer
                                </NavLink>
                            </li>

                              <li>
                                <NavLink 
                                to="/Product"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-xl duration-200 ${isActive?"text-blue-700 ":"text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Product
                                </NavLink>
                            </li>

                            

                             <li>
                                <NavLink 
                                to="/Shipping"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-xl duration-200 ${isActive?"text-blue-700 ":"text-gray-700 "} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Shipping
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


