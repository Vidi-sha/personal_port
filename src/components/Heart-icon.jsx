import React, { useState } from 'react';
import './Heart-icon.css'

function HeartIcon() {
    // Initialize liked state to false
    const [liked, setLiked] = useState(false);

    // Function to handle click event
    const handleClick = () => {
        // Toggle liked state
        setLiked(!liked);
    };

    return (
        <i
            className={`js-heart ${liked ? 'fas fa-heart' : 'far fa-heart'}`}
            onClick={handleClick}
        />
    );
}

export default HeartIcon;