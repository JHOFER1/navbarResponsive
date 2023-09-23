import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import { FiMenu, FiX } from "react-icons/fi";



export const Nav = () => {
    const Routes = [
        { name: "NOSOTROS", route: "/" },
        { name: "MARCAS", route: "/" },
        { name: "CATEGORÍAS", route: "/" },
    ];
    const [open, setOpen] = useState(false)

    return (
        <div className='flex w-full bg-black h-[10vh] overflow-hidden'>
            <div onClick={() => setOpen(!open)}
                className='absolute right-8 top-4 cursor-pointer md:hidden'>
                <FiMenu size={40} color='white' />
            </div>
            <div className='flex h-[10vh]  justify-center mx-4 py-2'>
                <img src={logo} alt="" className='' />
            </div>
            <div className={`md:flex flex-1  absolute md:static  items-center text-xl 
               w-full -z-10 md:z-0 pl-2 transition-all duration-500 bg-black
                ${open ? 'top-[10vh]' : 'top-[-420px]'}`}>
                <ul className='md:flex flex-1'>
                    {Routes.map((route) => (
                        <li key={route.name} className='text-primary md:mx-8'>
                            {route.name}
                        </li>
                    ))}

                </ul>
                <div className='flex flex-col md:block'>
                    <button className='bg-primary h-10 w-32 md:mx-4 rounded-xl my-2'>
                        Iniciar sesión
                    </button>
                    <button className='bg-secondary h-10 w-32 md:mx-4 mr-20 rounded-xl my-2'>
                        Registrarme
                    </button>
                </div>
            </div>
        </div>
    )
}
