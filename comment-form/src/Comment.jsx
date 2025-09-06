import React from 'react';
import './Comment.css'; 
import { useState } from 'react';

export default function Comment() {
    const[formData, setformData] = useState({
        username : "",
        remark : "",
        rating : 5
    })

    const handleInputChange = (event)=>{
        setformData((prevData)=>{
            return {...prevData, [event.target.name] : event.target.value};
        })
    }

    return (
        <div className="comment-container">
            <h4>Give a comment!</h4>
            <form className="comment-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" value={formData.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="remark">Remark</label>
                    <textarea id="remark" placeholder="Write your remark here..." value={formData.remark}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" id="rating" placeholder="Rate from 1 to 5" value={formData.rating} />
                </div>
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}