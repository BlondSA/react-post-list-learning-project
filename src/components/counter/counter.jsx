import React, { useState } from "react";

function Counter() {
    const [likes, setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }



    return (
        <div className="app">
            <h1>{likes}</h1>
            <button onClick={decrement} value="Decrement">
                Decrement
            </button>
            <button onClick={increment} value="Increment">
                Increment
            </button>
        </div>
    );
}

export default Counter;
