"use client"

import { useState, useEffect } from 'react';
import IkegaiButton from '../Components/buttonIkegai';
import ikegaistyle from "@/Styles/ikegai.module.css"
import CalltoactionIkegai from "../Components/calltoaction_ikegai"


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
        Was du in der Lage bist zu tun
      </div>
      <div style={{ marginBottom: "4%", width: '290px', height: "38px", textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
        Was sind 3 Charaktereigenschaften, die dich am besten beschreiben?
      </div>
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
              width: "20%",
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
  
    <div style={{backgroundColor: "rgba(244, 246, 252, 1)"}}>
      <p className={ikegaistyle.textcolor}>{anzahlAuswahl}/3 ausgewählt</p>
      <div className={ikegaistyle.buttonbox}>
        <IkegaiButton name="Selbstdiszipliniert" lifting_up={handleClick} />
        <IkegaiButton name="Ambitioniert" lifting_up={handleClick} />
        <IkegaiButton name="Emphatisch" lifting_up={handleClick} />
        <IkegaiButton name="Kreativ" lifting_up={handleClick} />
        <IkegaiButton name="Offen für Neues" lifting_up={handleClick} />
        <IkegaiButton name="Anpassungsfähig" lifting_up={handleClick} />
        <IkegaiButton name="Selbstbewusst" lifting_up={handleClick} />
        <IkegaiButton name="Teamplayer" lifting_up={handleClick} />
        <IkegaiButton name="Zuverlässig" lifting_up={handleClick} />
      </div>
    <div style={{paddingTop: "7%"}}>
      <CalltoactionIkegai activatenum={3} linkname ={"/Ikegai_Gegensatz"} maxnum={anzahlAuswahl} name={"Nächste Frage"} />
    </div>
    
    </div>
  
  </div>
  
  ) ; 
}