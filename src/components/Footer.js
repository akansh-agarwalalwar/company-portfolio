import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img from "../images/Logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Vigya</h3>
                            <div className='text-md font-medium text-gray-600'>
                                {/* <h5>Molad e Konsult</h5> */}
                                <p>Email:vigya.dev@gmail.com</p>
                                 <p>Phone: +91 7850930648</p>
                                <p>Jalandhar, Punjab</p>
                                {/* <p>Ogun State.</p> */}
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink smooth to="/#about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink smooth to="/#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink smooth to="/contact#contact" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link smooth to="/get-demo" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link smooth to="/get-demo" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Mobile App Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link smooth to="/get-demo" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link>
                        </li>
                        <li className="mb-2">
                            <Link smooth to="/get-demo" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Intuitive User Experiences</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div >
                        <img className='-mt-24' src={img} alt="Logo"  />
                        </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Vigya
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
