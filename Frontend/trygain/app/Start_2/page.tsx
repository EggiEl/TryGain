
"use client"


import Image from 'next/image';

export default function Home() {
  function handleButtonclick() {
    console.log("ButtonClicked")
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}${"/Start_3"}`;
  }

  return (
    <div style={{ backgroundColor: "rgba(244, 246, 252, 1)", width: "100vw", height: "100vh", display: 'flex', flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>

      <div style={{ position: "relative", width: "60svw", height: "26svh"}}>
        <Image alt="Maskottchen" src={"/Icon_happy.png"} layout='responsive' width={100} height={100} objectFit="cover" />
      </div>
      <div style={{ width: '67%', textAlign: 'center', color: '#0D276B', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: "2%" }}>Personalisiere deinen Feed</div>

      <div style={{  width: '80%', textAlign: 'center', color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
        Lass uns gemeinsam den faszinierenden Weg des Ikigai erkunden – ein japanisches Konzept, das die Essenz eines erfüllten Lebens einfängt. Ikigai steht für die perfekte Balance zwischen Leidenschaft, Berufung, Beruf und dem, was die Welt braucht.<br /><br />Aber was genau ist dein Ikigai? Beantworte einige kurze Fragen, um Einblicke in deine Leidenschaften, Stärken und deine Mission im Leben zu gewinnen. Das Ergebnis? Ein auf dich angepasster Feed, der zu einem sinnvolleren und erfüllteren Lebensweg führt.
      </div>
      <div style={{ display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: 'center', marginBottom: "12vh", marginTop: "6.2%" }}>
        <button onClick={handleButtonclick} style={{ backgroundColor: "rgba(241, 85, 76, 1)", textAlign: 'center', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', borderRadius: 24, width: "67vw", height: "6vh", border: "none" }}>weiter </button>
      </div>
    </div>
  );
}
