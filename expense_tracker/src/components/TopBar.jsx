import logo from '../assets/2logo.png'
import { NavLink } from "react-router-dom"

const TopBar = () => {
    return (
        <div>
            <nav className="bg-purple-300 text-lg border-gray-200 px-4 lg:px-8 py-2.5 dark:bg-[#a78bfa]">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/Home" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">Expenser!</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <NavLink to='/'><span className="text-gray-800 dark:text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log In</span></NavLink>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">                     
                        <li>
                            <NavLink to={'/Home'} className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default TopBar;