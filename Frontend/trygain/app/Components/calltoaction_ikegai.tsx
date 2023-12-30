
import { useState, useEffect } from 'react';

import ikegaistyle from "@/Styles/ikegai.module.css"



interface Calltoactionbutton {
    maxnum : number ,
    name : string , 
    linkname : string 
    
    
}



export default function CalltoactionIkegai({maxnum, name, linkname } : Calltoactionbutton) { 
    const [stateactivate, setstateacitvate] = useState(false)


  const handleClick = () => {
    if (maxnum ==3 ) {
      const baseUrl = window.location.origin;;
      window.location.href = `${baseUrl}${linkname}`;
    }
  };

    useEffect(() => {
        if (maxnum == 3 ){
          setstateacitvate(true)
    
        } else {
          setstateacitvate(false)
        }
        
      }, [maxnum])


    return (

        <div className={ikegaistyle.buttonbox} style={{paddingBottom: "20px"}}>
        <div className={ikegaistyle.button_outer} style={{ backgroundColor: stateactivate ? "rgba(241, 85, 76, 1)" : "rgba(233, 236, 245, 1)", width: "290px", height:"56px"}}>
          <button  onClick={handleClick} className={ikegaistyle.ikegaibutton} style={{ backgroundColor: stateactivate ? "rgba(241, 85, 76, 1)" : "rgba(233, 236, 245, 1)", color: stateactivate ? "white" : "rgba(13, 39, 107, 1)", fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            {name} 
          </button>
          
        </div>
        <div style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', marginTop:"2%"}}>Ikigai überspringen</div>
      </div>
    )



}