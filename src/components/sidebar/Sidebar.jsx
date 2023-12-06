import React from "react";
import "./sidebar.css";
import Cardpanel from "../cardpanel/Cardpanel";
import { MdDashboard, MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { RiPlanetLine, RiPlantLine } from "react-icons/ri";
import { FaPuzzlePiece } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div className="sidebarmain">


      <div className="sidebar">
        <div className="zxy"  >
        <div className="usercard">
          <img
            src="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg"
            alt=""
            className="profile"
          />
          <h5 style={{ fontWeight: "800" ,textAlign:'center',display:'flex' }}><p style={{fontSize:'15px',fontWeight:'bolder'}}  >Elon Musk</p> <IoIosArrowForward  style={{marginTop:'17%',fontSize:'20px',fontWeight:'bolder'}}   /></h5>
          <p style={{ fontSize: "12px", fontWeight: "600" }}>
            elonmusk@gmail.com
          </p>   

         
        </div>
        <div  className="sidebaraddonns"  >


<div className="buttonlike"><MdDashboard />Dashboard</div>
<div className="buttonlike"><RiPlantFill />Perks</div>
<div className="buttonlike"><IoChatbubblesSharp />FAQ</div>
<div className="buttonlike"><FaPuzzlePiece />Add ons</div>

<div className="buttonlike"   ><HiUsers />Support</div>


<div className="logout">logout<FaPowerOff /></div>
        </div>
        </div>

      
   
      </div>
      <div className="sidebarsup"><div><Cardpanel/></div></div>
      <div>


  <div className="bell"  style={{backgroundColor:'white',marginLeft:'30px', height:'30px',width:'30px',textAlign:'center'}}  ><BsFillBellFill /></div>

  <div  style={{backgroundColor:'white',width:'30px',height:'100px',marginLeft:'30px',borderRadius:'.5rem',marginTop:'400px',boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)'}}  >{""}</div>
  <CiCirclePlus style={{marginTop:'100px',marginLeft:'30px', height:'30px',width:'30px',textAlign:'center'}}  />
      </div>
    </div>
  );
};

export default Sidebar;
