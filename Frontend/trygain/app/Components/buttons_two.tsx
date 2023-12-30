import React, { useEffect, useState } from "react";

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
    <div>
      <button
        id="firstbutton"
        onClick={handleClick}
        style={{
          backgroundColor: clicked_first ? "black" : "white",
        }}
      >
        {firstname}
      </button>
      <button   id="secondbutton"
        onClick={handleClick} style={{backgroundColor: clicked_second ? "black": "white",
        }}>{secondname}</button>
    </div>
  );

}
