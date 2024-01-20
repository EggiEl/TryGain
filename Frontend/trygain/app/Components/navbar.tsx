import Image from "next/image";

interface HeaderProps {

}

export default function Header() {
    return (
      <div id="Footer" style={{ position: "fixed", bottom: 0, width: '100%', height: '8.15vh', background: 'rgba(244, 246, 252, 1)', zIndex: "10" }}>
        <div style={{display: "flex", justifyContent : "space-around" , alignItems :"center" , paddingTop: "5%"}}>
        <Image src="/house-bolt-alt.png" alt="I&D"width={24} height={24}  />
        <Image src="/search.png" alt="I&D"width={24} height={24}  />
        <Image src="/Bookmark.png" alt="I&D"width={24} height={24}  />
        <Image src="/user.png" alt="I&D"width={24} height={24}  />



        </div>
      </div>
    );
  }
  
  
