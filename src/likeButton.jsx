import { useState } from "react"
export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    function isToggled(){
        setIsLiked(!isLiked);
    }
    let styles = {color: "red"};
    return(
        <div>
        <p onClick={isToggled}>
            {/* {isLiked.toString()} */}
            { isLiked ? (<i class="fa-solid fa-heart" style={styles}></i>) : (<i class="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}