import React, { useEffect, useState } from "react";
import ikegaistyle from "@/Styles/ikegai.module.css"

interface ISwitchbutton {
  firstname: string;
  secondname: string;
  lifting_up: (buttonName: string) => void;
}

export default function Switchbutton({firstname,secondname,lifting_up} : ISwitchbutton) {
  const [clicked_first, setfirst] = useState(false);
  const [clicked_second, setsecond] = useState(false);

  useEffect(() => {
    if (clicked_first) {
      console.log("Css Blau");
    } else {
      console.log("Css keine Farbe");
    }
  }, [clicked_first]);


  useEffect(() => {
    if (clicked_first) {
      console.log("Css Blau");
    } else {
      console.log("Css keine Farbe");
    }
  }, [clicked_second]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (id === "firstbutton") {
    lifting_up(firstname)
      console.log("Erster Button geklickt");
      if (clicked_first == true )
      setfirst(false);
        else {
            setfirst(true )
            setsecond(false)
    }
    }



    else if (id === "secondbutton") {
        lifting_up(secondname)
        console.log("Zweiter Button geklickt");
      if (clicked_second == true )
      
      setsecond(false);
        else {
            setsecond(true)
            setfirst(false)

    }
  };}

  return (

    <div style={{display: "flex" ,columnGap: "58px",  flexDirection : "row"}}>
    <div id="firstbutton" className={ikegaistyle.button_outer} style={{ backgroundColor: clicked_first ? "rgba(233, 236, 245, 1)" : "white" }}>
    <button  id="firstbutton" className={ikegaistyle.ikegaibutton} onClick={handleClick}  style={{ backgroundColor: clicked_first ? "rgba(233, 236, 245, 1)" : "white" }}>
    {firstname}
    </button>
    </div>

    <div id="secondbutton" className={ikegaistyle.button_outer} style={{ backgroundColor: clicked_second ? "rgba(233, 236, 245, 1)" : "white" }}>
    <button id="secondbutton" className={ikegaistyle.ikegaibutton} onClick={handleClick}  style={{ backgroundColor: clicked_second ? "rgba(233, 236, 245, 1)" : "white" }}>
    {secondname}
    </button>
    </div>
    
</div>





   
  );

}
