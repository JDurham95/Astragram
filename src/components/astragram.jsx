import LikeButton from "./likeButton"

function Astragram({astragram, description, increaseTotalLikes}){
    return(
        
        <div class = "astragram">
            <img src={astragram} />
            <div className="description">
                <text> {description}</text>
            </div>
            <div className="LikeButton">
            <LikeButton increaseTotalLikes ={increaseTotalLikes}/>
            </div>
        </div>
        
    )
}

export default Astragram