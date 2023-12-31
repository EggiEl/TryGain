"use client"
import { useState, useEffect } from "react";

import Switchbutton from "../Components/buttons_two"
import ikegaistyle from "@/Styles/ikegai.module.css"
import CalltoactionIkegai from "../Components/calltoaction_ikegai";
import { wrap } from "module";


export default function Gegensatz_Ikegai() {
    const [auswahl, setAuswahl] = useState<string[]>([]);

    useEffect(() => {
        
        console.log(auswahl)
      }, [auswahl]);
    


    function handleClick(selectedname: string)  {
        console.log(selectedname, "Wurde geklicked")

        setAuswahl([])
        setAuswahl((prevAuswahl) => [...prevAuswahl, selectedname]);
            
            
    }


    return (
        <div style={{ background: "rgba(244, 246, 252, 1)", height: "100vh", width: "100svw" }}>
        <div className={ikegaistyle.background}  >
          <div style={{ width: '70%', marginTop: "9vh", marginBottom: "2vh", textAlign: 'center', color: '#0D276B', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
          Wie du tickst
          </div>
          <div style={{ marginBottom: "4%", width: '290px', height: "38px", textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
    Was beschreibt dich am besten?     </div>
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
                  width: "40%",
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
          <p className={ikegaistyle.textcolor}>Wähle 1 pro Kategorie</p>
          <div style={{display :"flex", flexDirection :"row", justifyContent:"center" , flexWrap : "wrap"}}>
            <Switchbutton firstname="Extrovertiert" secondname="Introvertiert" lifting_up={handleClick} />
            <Switchbutton firstname="Pragmatisch" secondname="Idealistisch" lifting_up={handleClick} />
            <Switchbutton firstname="Logisch" secondname="Emphatisch" lifting_up={handleClick} />
            <Switchbutton firstname="Streng" secondname="Gelassen" lifting_up={handleClick} />
            
          
          
          </div>
        <div style={{paddingTop: "7%"}}>
          <CalltoactionIkegai linkname = {""} maxnum={3} name={"Nächste Frage"} />
        </div>
        
        </div>
      
      </div>
      
    )

}