"use client"
import { useState, useEffect } from "react";

import Switchbutton from "../Components/buttons_two"


export default function Gegensatz_Ikegai() {
    const [auswahl, setAuswahl] = useState<string[]>([]);

    useEffect(() => {
        
        console.log(auswahl)
      }, [auswahl]);
    


    function handleClick(selectedname: string)  {
        console.log(selectedname, "Wurde geklicked")
    

        if (!auswahl.includes(selectedname)) {
            setAuswahl([])
            setAuswahl((prevAuswahl) => [...prevAuswahl, selectedname]);
            
            
          } else if (auswahl.includes(selectedname)) {
            setAuswahl([])
            setAuswahl((prevAuswahl) =>
              prevAuswahl.filter((item) => item !== selectedname)
              
            );
            
          }
    }


    return (
        <Switchbutton firstname="ErsterButton" secondname="ZweiterButton"  lifting_up={ handleClick}/>

    )

}