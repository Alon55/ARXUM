import React, { useState } from "react";
import "../App.css";

export default function Like() {
    const [like, setLike] = useState(false)
    const [likeCounter, setLikeCounter] = useState(100)

    return (
        <div className="card">
            <h4>Task 2</h4>
            <button className={`like-button ${!like && 'liked'}`} like={true} onClick={() => { setLike(prev => !prev); setLikeCounter(prev => like ? prev - 1 : prev + 1) }}>
                <p>{like ? 'UnLike 👎' : 'Like 👍'}</p>
                <span className="likes-counter">{likeCounter}</span>
            </button>
        </div>
    );
};
