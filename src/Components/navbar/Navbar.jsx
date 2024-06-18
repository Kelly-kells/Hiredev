import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <nav className=" bg-primeColor text-white relative border-b-2 border-solid border-secondColor">


      <ul className="rounded-sm shadow-sm  md:shadow-none  " >
        <button className="md:hidden justify-end" onClick={toggleMenu} >
          <GiHamburgerMenu size={30} />

        </button>

        {/*<IoClose />*/}

        <li className={`flex flex-col md:flex-row gap-8 font-bold justify-center p-6 ${open ? '' : 'hidden md:flex'}`} >
          <a href="/" >Home</a>
          <a href="#jobs" >Jobs</a>
          <a href="#addjobs" >Addjobs</a>
          <a href="#contact">Contact</a>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar