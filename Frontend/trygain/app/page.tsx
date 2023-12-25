"use client"

import { useState, useEffect } from 'react';
import IkegaiButton from './Components/buttonIkegai';

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
    <div>
      <IkegaiButton name="Erster Button" lifting_up={handleClick} />
      <IkegaiButton name="ZweiterButton" lifting_up={handleClick} />
      <IkegaiButton name="Dritter Button" lifting_up={handleClick} />
      <IkegaiButton name="Vierter" lifting_up={handleClick} />
      <h3>{anzahlAuswahl}</h3>
    </div>
  );
}
