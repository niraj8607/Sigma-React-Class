import { useState } from "react";
export default function Like(){
  let[isLiked ,setisLiked] = useState(false);
  let toggleLike=()=>{
    setisLiked(!isLiked);
  };
    
     return (
    <div>
      <p onClick={toggleLike} style={{color : "red"}}>
        {isLiked ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}