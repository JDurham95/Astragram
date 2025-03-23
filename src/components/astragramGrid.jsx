import Astragram from "./astragram"

function AstragramGrid({astragrams, descriptions, astragramLikes, increaseTotalLikes}){

    return(

        <div className="astragramGrid">
            {astragrams.map((astragram, i) =>
            <Astragram astragram = {astragram} description={descriptions[i]} likes ={astragramLikes[i]} key ={i} increaseTotalLikes = {increaseTotalLikes}/>
            )}
            
        </div>
    )
}

export default AstragramGrid