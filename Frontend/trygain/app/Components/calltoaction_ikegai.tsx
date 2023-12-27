
import { useState, useEffect } from 'react';

import ikegaistyle from "@/Styles/ikegai.module.css"



interface Calltoactionbutton {
    maxnum : number ,
    name : string 
    
}



export default function CalltoactionIkegai({maxnum, name} : Calltoactionbutton) { 
    const [stateactivate, setstateacitvate] = useState(false)

    useEffect(() => {
        if (maxnum == 3 ){
          setstateacitvate(true)
    
        } else {
          setstateacitvate(false)
        }
        
      }, [maxnum])


    return (

        <div className={ikegaistyle.buttonbox} style={{paddingBottom: "20px"}}>
        <div className={ikegaistyle.button_outer} style={{ backgroundColor: stateactivate ? "orange" : "white", width: "290px", height:"56px"}}>
          <button className={ikegaistyle.ikegaibutton} style={{ backgroundColor: stateactivate ? "orange" : "white", color: stateactivate ? "white" : "rgba(13, 39, 107, 1)", fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            {name} 
          </button>
        </div>
      </div>
    )



}