import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [open, setOpen]=useState(false)
    
    const toggleMenu= () =>{
        setOpen(!open)
    }
  return (
    <div className=" bg-primeColor text-black">
  <ul >

  {/*<GiHamburgerMenu /><IoClose />*/}
  
<li className=' p-6 flex justify-center gap-4' >
    <a href="/" >Home</a>
    <a href="jobs" >Jobs</a>
    <a href="addjobs" >Addjobs</a>
    <a href="contact">Contact</a>

</li>
  </ul>
    </div>
  )
}

export default Navbar