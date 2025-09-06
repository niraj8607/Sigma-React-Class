import { useState } from "react"

export default function CommentShow(){
    let[comments, setComments] = useState([
    {
        username : "sk",
        remark : "Great job",
        rating : 4
    }]);
    let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

    return(
        <>
        <div>
           <h3>All comment</h3>
           
           <span>(remark={comments[0].remark} )</span>
           <span>(rating = {comments[0].rating} )</span>
           <span>(username = {comments[0].username}) </span>
        </div>
        <hr />
        <hr />
        <CommentShow addNewComment = {addNewComment}></CommentShow>
    </>

    )
}