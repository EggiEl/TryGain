import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import Image from "next/image"

interface HeaderProps{

}

export default function Header(){ 


    return (
        
        
        <div id="Hintergrund Container" style={{ position: "absolute", width: '100%', height: '10.5%', background: 'rgba(244, 246, 252, 1)', zIndex :"10" }}>
        <div id="PositionofIcons" style={{ position: "absolute", left: "80%", top: "55%" }}>
          <div id="Iconbox" style={{ display: "flex", gap: "22px" }}>
            <Image src="/FilterIcon.png" width={18} height={18} alt="FilterIcon" />
            <Image src="/PfeilIcon.png" width={18} height={18} alt="FilterIcon" />
          </div>
        </div>
        <div id="Logo" style={{ position: "absolute", top: "43%", left: "5%" }}>
          <Image src="/trygain-high-resolution-logo-black-transparent 1 (2).png" width={95} height={39} alt="FilterIcon" />
        </div>
      </div>
      
        

    )
}