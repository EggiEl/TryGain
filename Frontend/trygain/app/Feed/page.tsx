"use client"
import Beitrag from "../Components/beitrag"
import Header from "../Components/header"
import Navbar from "../Components/navbar";
export default function Feed() { 



    return (
        <div>
          <Header/> 
          
          <div style={{ paddingTop: '10.5svh', backgroundColor: 'rgba(244, 246, 252, 1)', paddingBottom : "10.5svh" }}>
            
            <Beitrag smallicon="/graduation-hat.png" bordercolor="orange" smallheading="Informatik und Design" bild_url="/image 39.png" heading="Studium - Hochschule München"  caption="Lerne Informatik als auch Design zu verstehen und miteinander zu verknüpfen." />
            <Beitrag smallicon = "/ruler-traingle.png" bordercolor="red" smallheading="Praktium - Praktikum UX/UI Design" bild_url="/Praktikumsbeitrag.png" heading="Praktikum - NTTData/ München" caption="Bekomme Einblicke ins Arbeitsleben von UX-DesignerInnen" />
            <Beitrag smallicon="/graduation-hat.png" bordercolor="orange" smallheading="Technische Pyhsik" bild_url="/TPB.png" heading="Studium - Hochschule München" caption="Verstehe Physik im Ingenieurwesen und gestalte aktiv die Zukunft mit" />
            
          </div>
          <Navbar/> 
        </div>
      );
        

    
}