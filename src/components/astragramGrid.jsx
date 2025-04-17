import Astragram from "./astragram"
import getLikes from "./getLikes"
import { useEffect, useState } from "react"


function AstragramGrid({astragrams, descriptions, increaseTotalLikes}){

    const [likes, setLikes] = useState([]);

    useEffect(() =>{

        const fetchLikes = async () => {
            const results = await Promise.all(astragrams.map((_,i) => getLikes(i)));
            setLikes(results);
        }
        fetchLikes();
    }, [astragrams]);

    return(

        <div className="astragramGrid">
            {astragrams.map((astragram, i) =>
            <Astragram 
            key = {i}
            astragram = {astragram} 
            description={descriptions[i]} 
            likes ={likes[i]} 
            increaseTotalLikes = {increaseTotalLikes}/>
            )}
            
        </div>
    )
}

export default AstragramGrid