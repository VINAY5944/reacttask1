import React from 'react'
import './navbar.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoFlowerSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="navmain">
<div className="navleft"  style={{width:'400 px'}}   ></div>

<div className="navright">

<div><button  className='button1'  style={{textAlign:'center'}} ><IoFlowerSharp  style={{fontSize:'20px',margin:'0'}}  />XYZ.pvt.ltd.enterprises</button></div>
<div><button className='button2' style={{fontSize:'20px',textAlign:'center'}}><MdKeyboardArrowDown /></button></div>
</div>
  </div>
  )
}

export default Navbar