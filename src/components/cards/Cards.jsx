import React from 'react'
import './cards.css'
import { CiUser } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
const Cards = () => {

const array=[{type:'Basic',price:'$89.89',dprice:'$9.89',gtstd:'getstarted',usr:"25",features:'Email Support',storage:'25gb',color:'yellow'},{type:'Standard',price:'$189.89',dprice:'$99.89',gtstd:'getstarted',usr:"25",features:'Email+Chat Support',storage:'50gb',color:'pink'},{type:'Premium',price:'$389.89',dprice:'$199.89',gtstd:'getstarted',usr:"75",features:'Email+Chat+Whatsapp Support',storage:'100gb',color:'violet'}]


  return (
    <div  className='maincard'  >

        {array.map(( item,key)=>(<div id={key} className="cardcontent1">
<h1>{item.type}</h1>
<h6   className='crossed-price'  >{item.price}</h6>
<div className=""><h3  className='dprice'  >{item.dprice}<span>/mo</span>  </h3></div>

<h5 style={{backgroundColor:`${item.color}`,borderRadius:'.5rem',width:'85px',height:'30px',alignItems:'center',marginTop:'12px',textAlign:'center'}}  >getstarted<FaLongArrowAltRight /></h5>
<div className="line">{''}</div>
<p>what you'll get :</p>
<p  ><CiUser style={{marginRight:'15px'}} />upto{item.usr} users</p>
<p><IoCloudUploadOutline style={{marginRight:'15px'}}  />  {item.storage}</p>
<p><MdOutlineMailOutline style={{marginRight:'15px'}} />{item.features}</p>
<p  style={{textDecoration:"underline",paddingLeft:'25%'}}  >  EXPLORE MORE </p>
    </div>))}
    </div>
  )
}

export default Cards