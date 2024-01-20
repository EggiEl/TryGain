import Image from "next/image";

interface ÄhnlichProps {
  alt: string;
  srcpic: string;
  description: string;
}

export default function Ähnlich({ alt, srcpic, description }: ÄhnlichProps) {
  return (
    <div style={{ 
      position: "relative", 
      width: "18svh", 
      height: "18svh", 
      marginBottom: "2vh",
      borderRadius: "15%", 
      marginInline: "10px",
      overflow: "hidden",
    }}>
      <Image alt={alt} src={srcpic} layout='responsive' width={100} height={100} objectFit="cover" />
      <div style={{ 
        color: "black", 
        zIndex: "10", 
        position: "absolute", 
        bottom: "5%",  
        left: "50%", 
        transform: "translateX(-50%)",  
      }}>
        <div style={{
          color: 'white', 
          fontSize: 16, 
          fontFamily: 'Inter', 
          fontWeight: '400', 
          whiteSpace: 'nowrap',  // Hinzugefügt, um Zeilenumbrüche zu verhindern
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  
          padding: '8px',  
          borderRadius: '8px',  
        }}>
          {description}
        </div>
      </div>
    </div>
  );
}
