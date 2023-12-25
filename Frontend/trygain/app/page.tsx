"use client"

import { useState, useEffect } from 'react';
import IkegaiButton from './Components/buttonIkegai';
import ikegaistyle from "@/Styles/ikegai.module.css"



export default function Home() {
  const [auswahl, setAuswahl] = useState<string[]>([]);
  const [anzahlAuswahl, setAnzahlAuswahl] = useState(0);

  useEffect(() => {
    setAnzahlAuswahl(auswahl.length);
    console.log(auswahl)
  }, [auswahl]);

  function handleClick(nameIkegai: string): boolean {
    if (auswahl.length < 3 && !auswahl.includes(nameIkegai)) {
      setAuswahl((prevAuswahl) => [...prevAuswahl, nameIkegai]);
      return true 
    } else if (auswahl.includes(nameIkegai)) {
      setAuswahl((prevAuswahl) =>
        prevAuswahl.filter((item) => item !== nameIkegai)
        
      );
      return true 
    }
    return false 
  }

  return (
    <div className={ikegaistyle.background}>
      
      <p className={ikegaistyle.textcolor}>{anzahlAuswahl}/3 ausgewählt</p>
      
  <div className={ikegaistyle.buttonbox}>
    
    <IkegaiButton name ="Selbstdiszipliniert" lifting_up={handleClick}/>
    <IkegaiButton name ="Ambitioniert" lifting_up={handleClick}/>
    <IkegaiButton name ="Emphatisch" lifting_up={handleClick}/>
    <IkegaiButton name ="Kreativ" lifting_up={handleClick}/>
    <IkegaiButton name ="Offen für Neues" lifting_up={handleClick}/>
    <IkegaiButton name ="Anpassungsfähig" lifting_up={handleClick}/>
    <IkegaiButton name ="Selbstbewusst" lifting_up={handleClick}/>
    <IkegaiButton name ="Teamplayer" lifting_up={handleClick}/>
    <IkegaiButton name ="Zuverlässig" lifting_up={handleClick}/>
    
  </div>
  </div>
  
    
  );
}
