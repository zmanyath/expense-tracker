import logo from '../assets/2logo.png'
import LoginPage from '../pages/LoginPage';
import NewUser from '../pages/NewUser';
import { Link } from "react-router-dom"
import Summary from './Summary';

const TopBar = () => {
    return (
        <div>
            <nav class="bg-purple-300 text-lg border-gray-200 px-4 lg:px-8 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" class="flex items-center">
                    <img src={logo} class="mr-3 h-6 sm:h-9" alt="" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Expenser!</span>
                </a>
                <div class="flex items-center lg:order-2">
                    <Link to={'LoginPage'} class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</Link>
                    <a href={NewUser} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">                     
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 text-gray-700 lg:hover:text-primary-700 lg:p-0">Transactions</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 text-gray-700 lg:hover:text-primary-700 lg:p-0">Expenses</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default TopBar;