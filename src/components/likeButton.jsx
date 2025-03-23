import React, {useState} from "react";
import { FaRegHeart } from "react-icons/fa";

function LikeButton({increaseTotalLikes}){

    const [likeCount, like] = useState(0)
    const increaseLikes = () => {
        like(likeCount + 1);
        increaseTotalLikes();
    }

    return(
        <div className="like-container">
        <FaRegHeart className="like-icon" onClick={increaseLikes}/>
        
        <span className="like-count">{likeCount}</span>
        </div>
    )

}

export default LikeButton