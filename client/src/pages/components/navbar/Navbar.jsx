import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
    const [status,setStatus] = useState(false);
    
    return (
        <>
            {
                !status?
                <nav className="bg-orange-400 flex justify-between p-5 text-white">
                    {/* Logo */}
                    <div>
                        <Link to="/" className="text-3xl" href="#">LOGO</Link>
                    </div>
                    {/* Menu */}
                    <div>
                        <ul className="hidden md:flex space-x-12 ">
                            <li><Link to="/" className="hover:text-gray-200 align-middle" href="./">Home</Link></li>
                            
                            <li><Link to="/help" className="hover:text-gray-200 align-middle" href="#">Help</Link></li>
                            <li><Link to="/service" className="hover:text-gray-200 align-middle" href="./service">Service</Link></li>
                            <li><Link to="/stores" className="hover:text-gray-200 align-middle" href="#">Find a store</Link></li>                      
                            <li><Link to="/contact" className="hover:text-gray-200 align-middle" href="#">Contact</Link></li>
                            <li><button className="p-2 rounded bg-blue-400" href="#">Sign Up</button></li>                    
                        </ul>
                        <AiOutlineBars className='md:hidden text-black cursor-pointer'size={'25px'} onClick={()=>setStatus(true)}/>
                    </div>
                </nav>:
                null
            }
            
            {/* Responsive Side Navbar */}
            {   
                status?
                <div className="text-white absolute w-full h-screen flex top-0">
                    <div className="z-10 p-5 bg-gradient-to-b from-amber-500 w-[240px] h-screen">
                        <div className='flex mb-5'>
                            <Link to="/" className="text-3xl" href="#">LOGO</Link>
                            <AiOutlineClose className='top-5 left-52 absolute cursor-pointer' size={'25px'} onClick={()=>setStatus(false)}/>
                        </div> 
                        <div className="">
                            <ul className='space-y-3 font-semibold' >
                                <li><a className="hover:text-gray-200 align-middle" href="./">Home</a></li>
                                <hr></hr>
                                <li><a className="hover:text-gray-200 align-middle" href="./service">Service</a></li>
                                <hr></hr>
                                <li><a className="hover:text-gray-200 align-middle" href="#">Help</a></li>
                                <hr></hr>
                                <li><a className="hover:text-gray-200 align-middle" href="#">Find a store</a></li>
                                <hr></hr>
                                <li><a className="hover:text-gray-200 align-middle" href="#">Contact</a></li>
                                <hr></hr>
                                <li><button className="p-2 rounded bg-blue-400" href="#">Sign Up</button></li>
                                <hr></hr>
                            </ul>
                        </div>
                    </div>
                </div>:
                null
            }
        </>
    )
}
