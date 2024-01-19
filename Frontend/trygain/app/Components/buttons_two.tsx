import React, { useEffect, useState } from "react";
import ikegaistyle from "@/Styles/ikegai.module.css"

interface ISwitchbutton {
  firstname: string;
  secondname: string;
  lifting_up: (buttonName: string, unselectedname: string, clicked_first : boolean , clicked_second : boolean ) => void;
}

export default function Switchbutton({firstname,secondname,lifting_up} : ISwitchbutton) {
  const [clicked_first, setfirst] = useState(false);
  const [clicked_second, setsecond] = useState(false);

  useEffect(() => {
    console.log(clicked_first, clicked_second)
    lifting_up(firstname, secondname, clicked_first, clicked_second)
    
  }, [clicked_first, clicked_second]);


 

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (id === "firstbutton") {
      console.log("Erster Button geklickt");
      if (clicked_first == true )
      setfirst(false);
    else {
      setfirst(true)
      setsecond(false)
    }
    
    }

    else if (id === "secondbutton") {
      console.log("Zweiter Button geklickt");
      if (clicked_second == true )
      
      setsecond(false);
      else {
        setsecond(true)
        setfirst(false)
        
      }
      
    
  };}

  return (

    <div style={{display: "flex" ,columnGap: "2vw",  flexDirection : "row", alignItems : "baseline" }}>
    <div id="firstbutton" className={ikegaistyle.button_outer} style={{ backgroundColor: clicked_first ? "rgba(233, 236, 245, 1)" : "white" }}>
    <button  id="firstbutton" className={ikegaistyle.ikegaibutton} onClick={handleClick}  style={{ backgroundColor: clicked_first ? "rgba(233, 236, 245, 1)" : "white" }}>
    {firstname}
    </button>
    </div>
    <div style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>oder</div>
    <div id="secondbutton" className={ikegaistyle.button_outer} style={{ backgroundColor: clicked_second ? "rgba(233, 236, 245, 1)" : "white" }}>
    <button id="secondbutton" className={ikegaistyle.ikegaibutton} onClick={handleClick}  style={{ backgroundColor: clicked_second ? "rgba(233, 236, 245, 1)" : "white" }}>
    {secondname}
    </button>
    </div>
    
</div>





   
  );

}
