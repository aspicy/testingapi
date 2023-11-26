import React from "react";
import "./Button.css";

function Button ({theJoke, clickHandler}) {
    return theJoke === '' ?
        <div id="topDIV" onClick={clickHandler}>
            <div className="innerDIV">
                <p className="joke">Click Chuck Norris for a Joke</p>
                {/* <button className="buttonR" onClick={clickHandler}>Random Joke</button> */}
            </div>
        </div> :
        <div id="topDIV" onClick={clickHandler}>
            <div className="innerDIV">
                <p className="joke">{theJoke}</p>
                {/* changed button to full screen click */}
                {/* <button className="buttonR" onClick={clickHandler}>Random Joke</button> */}
            </div>
        </div>
}

export default Button;