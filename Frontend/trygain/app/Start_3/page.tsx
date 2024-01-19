"use client"


import Image from 'next/image';


export default function Home() {

  function handleButtonclick() {
    console.log("ButtonClicked")
    const baseUrl = window.location.origin;;
      window.location.href = `${baseUrl}${"/Ikegai_lage"}`;
      


  }



  return (
    <div style={{ backgroundColor: "rgba(244, 246, 252, 1)", width: "100vw", height: "100vh", display: 'flex', flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
    <div style={{ position: "relative", width: "55vw", height: "26vh", marginBottom: "2vh" }}>
      <Image alt="Maskottchen" src={"/Icon_secret.png"} layout='responsive' width={100} height={100} objectFit="cover" />
    </div>
    <div style={{ width: '67%', textAlign: 'center', color: '#0D276B', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: "2%" }}>Dein Schutz ist uns wichtig</div>
  </div>
  <div style={{ width: '65%', textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', marginBottom :"20%"}}>Deine Antworten werden ausschließlich dazu verwendet, deinen Feed mit passenden Studiengängen, Ausbildungsplätzen oder Praktika zu füllen und nicht an Dritte weitergegeben.</div>
  <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: 'center', marginBottom: "12vh" }}>
    <button onClick={handleButtonclick} style={{ backgroundColor: "rgba(241, 85, 76, 1)", textAlign: 'center', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', borderRadius: 24, width: "67vw", height: "6vh", border: "none" }}> Los geht´s </button>
  </div>
</div>


  ) ; 
}; 
