import {Link} from 'react-router-dom';
import React, { useState }  from 'react';

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState([]);
    const selectd=props.selected;
    return (
        <>

            <nav className="bg-slate-100 dark:text-white dark:bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PUCIT Help Desk</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={
                        "justify-between items-center w-full md:flex md:w-auto md:order-1" +
                        (!navbarOpen ? "" : " hidden")
                    } id="navbar-default">
                <ul className={"flex flex-col p-4 mt-4 bg-slate-100 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"}>
                        <li>
                            <Link to="/" className={((selectd==='home')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className={((selectd==='about')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>About</Link>
                        </li>
                        <li>
                            <Link to="/course" className={((selectd==='course')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black   md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Courses</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={((selectd==='blog')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={((selectd==='contact')? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:dark:text-white md:text-black md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black   md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Contact</Link>
                        </li>
                        </ul>
                </div>
            </div>
            </nav>
        </>
    );
}