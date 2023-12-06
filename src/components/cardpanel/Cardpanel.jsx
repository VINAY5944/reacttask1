import React from 'react'
import Cards from '../cards/Cards'
import Cardsbig from '../cardsbig/Cardsbig'
import './cardpanel.css'
const Cardpanel = () => {
  return (
    <div>
        
        
   <div className="cardpanelmain"  ><h3     style={{paddingLeft:'5%'}}  >Choose A Plan That's Just Right For You</h3>  </div>      
      
<Cards/>

<Cardsbig/>

<div style={{marginLeft:'70%'}} ><p style={{color:'lightblue'}}  >*some unique features are provided as addons </p></div>
    </div>
  )
}

export default Cardpanel