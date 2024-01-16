"use client"
import Beitrag from "../Components/beitrag"
import Header from "../Components/header"

export default function Feed() { 



    return (
        <div>
          <Header/>
          <div style={{ paddingTop: '10.5%', backgroundColor: 'rgba(244, 246, 252, 1)' }}>
            <Beitrag smallheading="Beitrag1" bild_url="/image 39.png" heading="Hochschule München" caption="Lerne Informatik als auch Design zu verstehen und miteinander zu verknüpfen." />
            <Beitrag smallheading="Beitrag2" bild_url="/image 39.png" heading="Hochschule München" caption="Lerne Informatik als auch Design zu verstehen und miteinander zu verknüpfen." />
            
          </div>
        </div>
      );
        

    
}