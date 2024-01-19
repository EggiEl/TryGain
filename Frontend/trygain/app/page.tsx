"use client"

import { useState, useEffect } from 'react';
import IkegaiButton from './Components/buttonIkegai';
import ikegaistyle from "@/Styles/ikegai.module.css"
import CalltoactionIkegai from "./Components/calltoaction_ikegai"
import Image from 'next/image';


export default function Home() {

  function handleButtonclick() {
    console.log("ButtonClicked")
    const baseUrl = window.location.origin;;
      window.location.href = `${baseUrl}${"/Start_2"}`;
      


  }



  return (
    <div style={{backgroundColor :"rgba(244, 246, 252, 1)"   , width : "100svw", height: "100svh", display: 'flex', flexDirection :"column", justifyContent : "space-around", alignItems :"center"}}>

      <div  style={{marginTop :"4.5%",position :"relative" , width : "75%", height: "26%", marginBottom: "3.5%"}}>
        <Image alt="Maskottchen" src={"/Icon_idel.png"}  layout='fill' objectFit="cover" ></Image>
      </div>
      
      <div style={{marginBottom :"2.1%",color: '#0D276B', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hallo Pioniere</div>
      <div style={{ marginBottom :"12%",textAlign: 'center',  width:"67%"}}><span style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Herzlich willkommen bei </span><span style={{color: '#FDB05E', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>TRYGAIN</span><span style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>! Erkunde maßgeschneiderte Karrierewege – egal, ob du den perfekten Studiengang suchst, deine Erfahrungen teilen möchtest oder als Bildungsanbieter neue Verbindungen knüpfen willst. Hier findest du, wonach du suchst. Starte jetzt durch!</span></div>
      
      



      <div style={{ marginBottom: "2.2%", width:"70%", textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Suchst du gezielt nach einem Studium, Praktikum oder Ausbildungsplatz? Dann bist du hier genau richtig! Klicke jetzt unten, um deine Karrierechancen zu entdecken.</div>
      
      <div style={{display : 'flex', alignItems : "center", flexDirection : "column", justifyContent : 'center' , marginBottom : "5.7vh"}}>
      <button onClick={handleButtonclick} style={{ marginBottom :"1.7%",backgroundColor :"rgba(241, 85, 76, 1)", textAlign: 'center', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', borderRadius: 24, width:"67vw", height: "6vh", border:"none"}}>Beginne deine Reise </button>
      <div style={{marginBottom :"0.6%", textAlign: 'center'}}><span style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Du möchtest nur bewerten? </span><span style={{color: '#F1554C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Hier entlang!</span></div>
      <div style={{ textAlign: 'center'}}><span style={{color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Du bist Anbierter? </span><span style={{color: '#F1554C', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}} >Erstelle dein Angebot!</span></div>
      </div>
    </div>

  ) ; 
}
