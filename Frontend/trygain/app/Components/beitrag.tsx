import Image from "next/image";
import { useState } from "react";

interface BeitragProps {
  bild_url: string;
  heading: string;
  caption : string ; 
}

export default function Beitrag({ bild_url, heading, caption }: BeitragProps) {
  const [bookmarkClicked, setBookmarkClicked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarkClicked((prevClicked) => !prevClicked);
  };

  return (
    <div style={{ position: "absolute", width: "100%", height: "48.8%", backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div style={{ position: "relative", left: "21%", top: "2.8%", marginBottom: "2.8%", color: '#0D276B', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
        {heading}
      </div>
      <div style={{ position: "relative", left: "0", top: "2%", width: "100%", height: "69%" }}>
        <Image src={bild_url} alt="I&D" layout='fill' objectFit="cover" />
      </div>

      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", marginInline: "10.5%", marginTop: "5%" }}>
        <Image src="/MengenIcon.png" alt="I&D" width={25} height={17} />
        {bookmarkClicked ? (
          <Image src="/Bookmark.png" alt="I&D" width={24} height={24} onClick={handleBookmarkClick} />
        ) : (
          <Image src="/Bookmarkfill.png" alt="I&D" width={24} height={24} onClick={handleBookmarkClick} />
        )}
        
      </div>
    </div>
  );
}
