"use client"
import Link from 'next/link'
import React, { useEffect,useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const navLinks = [
  "About", 
  "Favorite",
  "Cart"
]

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    if(localStorage.getItem("theme")==="dark"){
      setDarkMode(true)
    }
    
  },[])
  useEffect(()=>{
    if(darkMode){
      localStorage.setItem("theme","dark")
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    } 
  },[darkMode])
  console.log(darkMode)  
  return (
    <nav className='flex justify-between items-center xl:px-16 px-8  py-4 sticky bg-slate-100/50  top-0 z-30 dark:bg-slate-700/50 backdrop-blur-sm   ' >
      <h1 className='text-3xl text-orange-400 hover:text-orange-500 cursor-pointer transition-colors font-semibold'><Link href={"/"}>nDokan</Link></h1>
    <ul className='flex  gap-16  '>
      { 
        navLinks.map((link, index) => (
          <li key={index} className='hover:text-orange-400 text-slate-700 cursor-pointer transition-colors dark:text-slate-300 dark:hover:text-orange-400'><Link href={`/${link.toLowerCase()}`}>{link}</Link></li>
        ))
      }
      <li className='text-black text-xl cursor-pointer dark:text-white ' onClick={() => setDarkMode(!darkMode)}>
        {
          darkMode ? <MdOutlineLightMode /> : <MdDarkMode />
        }

      </li>
    </ul>


    </nav>
  )
}

export default Navbar
