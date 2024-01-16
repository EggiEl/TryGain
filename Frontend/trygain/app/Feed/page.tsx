"use client"
import Beitrag from "../Components/beitrag"
import Header from "../Components/header"

export default function Feed() { 



    return ( 
        <div style = {{height: "100svh", width: "100svw", "backgroundColor" : "rgba(244, 246, 252, 1)"}}>
            <div >
                <Header/>
            </div> 
            <div style={{position:"relative", top: '10.5%'}}>
                <div style={{height: "100svh", width: "100svw"}}>
                <Beitrag smallheading="Informatik und Design"   bild_url="/BeitragI&D.png" heading="Hochschule München" caption= "Lerne Informatik als auch Design zu verstehen und miteinander zu verknüpfen." />
            </div>
            </div>
        
        </div> 
        )

    
}