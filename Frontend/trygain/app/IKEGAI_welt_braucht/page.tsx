"use client"

import { useState, useEffect } from 'react';
import IkegaiButton from '../Components/buttonIkegai';
import ikegaistyle from "@/Styles/ikegai.module.css"
import CalltoactionIkegai from "../Components/calltoaction_ikegai"
import { relative } from 'path';


export default function Home() {
  const [auswahl, setAuswahl] = useState<string[]>([]);
  const [anzahlAuswahl, setAnzahlAuswahl] = useState(0);
  

  useEffect(() => {
    setAnzahlAuswahl(auswahl.length);
    
    console.log(auswahl)
  }, [auswahl]);





  function handleClick(nameIkegai: string): boolean {
    //prüfen ob Auswahl kleiner 3 ist und hinzufügen eines neuen Eintrags
    if (auswahl.length < 3 && !auswahl.includes(nameIkegai)) {
      setAuswahl((prevAuswahl) => [...prevAuswahl, nameIkegai]);
      
      return true 
      //
    } else if (auswahl.includes(nameIkegai)) {
      setAuswahl((prevAuswahl) =>
        prevAuswahl.filter((item) => item !== nameIkegai)
        
      );
      return true 
    }
    return false 
  }

  return (
    <div style={{ background: "rgba(244, 246, 252, 1)", height: "100svh", width: "100svw" }}>
    <div className={ikegaistyle.background}  >
      <div style={{ width: '70%', marginTop: "9vh", marginBottom: "2vh", textAlign: 'center', color: '#0D276B', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
      Was die Welt braucht
      </div>
      <div style={{ marginBottom: "4%", width: '290px', height: "38px", textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
       Fachrichtungen, die dich interessien?</div>
    </div>
  
    <div>
      <div style={{ width: '100vw', height: '100%', position: 'relative'}}>
        <div style ={{marginBottom: "64px"}}>
          <div id="Äußerer Balken grau"
            style={{
              position: 'absolute',
              width: "80%",
              height: 9,
              left: "10%",
              top: 0,
              background: '#E9ECF5',
              borderRadius: 24,
            }}
          />
          <div
            style={{
              width: "80%",
              height: 9,
              position: 'relative',
              background: '#FDB05E',
              borderRadius: 24,
              left: "10%"
            }}
          />
        </div>
      </div>
    </div>
  
    <div style={{backgroundColor: "rgba(244, 246, 252, 1)", position: "relative"}}>
      <p className={ikegaistyle.textcolor}>{anzahlAuswahl}/3 ausgewählt</p>
      <div className={ikegaistyle.buttonbox} >
        <IkegaiButton name="Natur & Technik" lifting_up={handleClick} />
        <IkegaiButton name="Kreativ & Design" lifting_up={handleClick} />
        <IkegaiButton name="Sprache" lifting_up={handleClick} />
        <IkegaiButton name="Geschichte    & Gesellschaftsw." lifting_up={handleClick} />
        <IkegaiButton name="Gesundheit & Medizin" lifting_up={handleClick} />
        <IkegaiButton name="Wirtschaft & Verkauf" lifting_up={handleClick} />
        <IkegaiButton name="Handwerk & Technik " lifting_up={handleClick} />
        <IkegaiButton name="Informatik & Logik" lifting_up={handleClick} />
        <IkegaiButton name="Sicherheit" lifting_up={handleClick} />
      </div>
    <div style={{paddingTop: "7%"}}>
      <CalltoactionIkegai activatenum={3} linkname = {""} maxnum={anzahlAuswahl} name={"Nächste Frage"} />
    </div>
    
    </div>
  
  </div>
  
  ) ; 
}
