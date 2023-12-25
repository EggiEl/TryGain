


import { useState, useEffect } from "react";
import ikegaistyle from "@/Styles/ikegai.module.css"

interface IkegaiButtonProps {
  name: string;
  lifting_up: (buttonName: string) => boolean;
}

export default function IkegaiButton({ name, lifting_up } : IkegaiButtonProps)
 {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      console.log("Css Blau");
    } else {
      console.log("Css keine Farbe");
    }
  }, [clicked]);

  const handleClick = () => {
    
    const not_enough = lifting_up(name);
    if (not_enough === true ) 
    {setClicked((prevClicked) => !prevClicked);}

    
  };

  return (
            <div className={ikegaistyle.buttonbox} >
                    <div className={ikegaistyle.button_outer} style={{ backgroundColor: clicked ? "rgba(233, 236, 245, 1)" : "white" }}>
                    <button className={ikegaistyle.ikegaibutton} onClick={handleClick}  style={{ backgroundColor: clicked ? "rgba(233, 236, 245, 1)" : "white" }}>
                    {name}
                    </button>
                    </div>
                    
            </div>






    
  );
};


