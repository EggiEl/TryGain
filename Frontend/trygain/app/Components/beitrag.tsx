import Image from "next/image";
import { useState } from "react";
import Ähnlich from "./ähnlich"

interface BeitragProps {
  bild_url: string;
  heading: string;
  caption : string ; 
  smallheading: string; 
  smallicon  : string ;
  bordercolor : string ; 

}

export default function Beitrag({bordercolor ,  bild_url, heading, caption , smallheading, smallicon}: BeitragProps) {
  const [bookmarkClicked, setBookmarkClicked] = useState(true);
  const [mengesymbolClicked, setmengensymbolClicked] = useState(false)

  const handleBookmarkClick = () => {
    setBookmarkClicked((prevClicked) => !prevClicked);
  };


    const handleMengenclick = () => {
      setmengensymbolClicked((prevClicked) => !prevClicked);
    }
  return (
    <div style={{
      marginBottom: "2svh",
      position: "relative",
      width: "100%",
      height: "51.6%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "15px",  // Ändern Sie den Wert je nach gewünschtem Radius
      overflow: "hidden",    // Verhindert, dass abgerundete Ecken-Inhalte über den Rand hinausragen
      border: `2px solid ${bordercolor}`
    }}>
      {/* Ihr vorhandener Code bleibt unverändert */}
      <div style={{ marginTop: "1.4svh",  display: "flex", alignItems: "center", color: '#0D276B', fontSize: "1.7vh", fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
  
        <div style={{ height: "2.5svh", width: "2.5svh", marginRight: "5.5svw", marginLeft: "9.7svw" }}>
          <Image alt={smallicon} src={smallicon} layout='responsive' width={100} height={100} objectFit="cover" />
        </div>
        <div>{heading}</div>
  
      </div>
      <div style={{ position: "relative", left: "0", top: "2%", width: "100%", height: "33svh" }}>
        <Image src={bild_url} alt="I&D" layout='fill' objectFit="cover" />
      </div>
  
      <div style={{ display: "flex", justifyContent: "space-between", marginInline: "10.5%", marginTop: "5%" }}>
        <Image src="/MengenIcon.png" alt="I&D" width={25} height={17} onClick={handleMengenclick} />
        {bookmarkClicked ? (
          <Image src="/Bookmark.png" alt="I&D" width={24} height={24} onClick={handleBookmarkClick} />
        ) : (
          <Image src="/Bookmarkfill.png" alt="I&D" width={24} height={24} onClick={handleBookmarkClick} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingInline: "10%", flexDirection: "column" }}>
        <p style={{ color: '#0D276B', fontSize: "1.7vh", fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{smallheading}</p>
        <p style={{ marginBottom :"1.5svh", width: '100%', height: '100%', color: '#0D276B', fontSize: "1.7vh", fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{caption}</p>
      </div>
  
      {mengesymbolClicked ? (
        <div style={{ overflowX: "scroll", display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "5000px" }}> {/* Ändern Sie die Breite entsprechend Ihrer Anforderungen */}
          <Ähnlich srcpic="/Frame 51 (1).png" alt="" description="THI - Ingoldstadt"/>
          <Ähnlich srcpic="/Frame 56.png" alt="" description="Hochschule Ansbach" />
          <Ähnlich srcpic="/Frame 57.png" alt="" description="Hochschule Neu-Ulm" />
          
        </div>
      </div>
      
      
      ) : null}
  
    </div>
  );
  
  
  
}
