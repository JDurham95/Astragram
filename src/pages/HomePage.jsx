
import AstragramGrid from "../components/astragramGrid"
import { useState } from "react"
import { astragrams, astragramDesc, astragramLikes } from "../components/astragramslist"

function HomePage(){

    let finalTotalLikes = 0
    const [totalLikes, like] =useState(finalTotalLikes)

    const increaseTotalLikes = () => like(totalLikes + 1)

    return(
        <>
        <span className="total-like-count">Astra has recieved {totalLikes} total likes! </span>

        <AstragramGrid 
        astragrams ={astragrams} 
        descriptions = {astragramDesc} 
        astragramLikes = {astragramLikes}
        increaseTotalLikes ={increaseTotalLikes}>

         </AstragramGrid>
        
        </>
    )
    
}

export default HomePage;

