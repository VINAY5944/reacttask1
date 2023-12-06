import React from 'react'
import './cardsbig.css'
import { CiUser } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
const Cardsbig = () => {

const array=[{top:'Free forever',plan:'Free Starter',desc:'The quickest and easiest way to try protocols with basic functionalities',users:'upto 8 users',storage:'Upto 3gb storage',support:'Email Support',details:'Basic of Documents,Task flow,Voting,Accounting and Team Management included',color:'lime',r:'Get Started'},{top:'lets connect',plan:'Enterprise Plan',desc:'Effortlessly customise and  finetune services as your needs shift ,ensuring the perfect tool for success ',users:'more than 75 users',support:'Email Support',details:'Customization of all features',color:'lightblue',r:'Contact Us'}]



  return (
    <div className='main'    >
   


   {array.map((item,key)=>(
   

   <div className="bigcardmain"  id={key} >
    
   <div className="cardleft">
   <div  style={{backgroundColor:`${item.color}`,borderRadius:'.5rem',width:'30%',fontSize:'10px',textAlign:'center',display:'flex',paddingLeft:'10%',marginTop:'3%'}}  >{item.top}</div>
    
    <h2>{item.plan}</h2>
 
 <p> {item.desc}</p> 
 <div   style={{backgroundColor:`${item.color}`,borderRadius:'.5rem',width:'40%',height:'8%',fontSize:'10px',textAlign:'center',display:'flex'}}  >   <p style={{marginLeft:'3%'}}>{item.r} </p><IoIosArrowRoundForward  style={{fontSize:'18px',marginTop:'10px'}} /> </div>
   </div>
   <div className="cardright" >
    
  
    what you will get 
   
   <p><CiUser style={{marginRight:'15px'}} /> {item.users}</p>

   {item.support?<p><MdOutlineMailOutline style={{marginRight:'15px'}} /> {item.support}</p>:<></>}
   {item.storage?   <p><IoCloudUploadOutline style={{marginRight:'15px'}}  />{item.storage}</p>:<></>}

   <div style={{ display: 'flex', alignItems: 'center' }}>
  <FaCheckDouble style={{ marginRight: '5px', fontSize: '16px' }} />
  <p>{item.details}</p>
</div>


   </div>
   </div>
   ))}

    </div>
  )
}

export default Cardsbig