import React, { useState } from 'react'
import { IoMdRadioButtonOn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";

function Header({dark,setIsDark}) {
    const [open,setOpen] = useState(false);
    
  return (
    <>
     
      <div className={`w-full px-4 md:px-20 py-5 mx-auto sticky top-0 z-10 ${dark ? 'bg-black text-white ' :'bg-blue-400 '}`}>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
            <h1 className='text-xl font-bold cursor-pointer'>Text Analyzer</h1>
                <ul className='hidden md:flex gap-4 font-semibold'>                    
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Text-Changer</li>
                </ul>
            </div>
            <div className='flex items-center gap-2'>
                <div onClick={() =>setIsDark(!dark)} className='hidden md:flex items-center gap-2 cursor-pointer'>
                <span>{dark ? <IoMdRadioButtonOn size={24}/> : <IoIosRadioButtonOff size={24}/>}</span>
                <span cl>Dark Mode</span>
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    {open ? <IoMdClose/> : <GiHamburgerMenu/> }
                </div>
            </div>
        </div>
        {open &&
        (
            <div className='md:hidden flex justify-center items-center'>
                <ul className='font-semibold space-y-3 text-center'>                    
                    <li>Home</li>
                    <li>About</li>
                    <li>Text-Changer</li>
                    <div onClick={() =>setIsDark(!dark)} className='flex items-center gap-2 cursor-pointer'>
                <span><IoMdRadioButtonOn size={24}/></span>
                <span>Dark Mode</span>
                </div>
                </ul>
            </div>
        )
        }
      </div>
    </>
  )
}

export default Header
