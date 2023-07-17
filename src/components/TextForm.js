import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+\s/);
        setText(newText.join(" "))
    }

    const handleUpChange = (event) => {
        // console.log("On change"); 
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Type your text here" value={text} 
                    onChange={handleUpChange} /*style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                     color: props.mode === 'dark' ? 'white': 'black'}} */id="myBox" rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text sumamary</h1>
                <p>Charcater Count: {text.length} | Word Count: {text.split(" ").length - 1}</p>
                <p>Reading Time: {0.008 * text.split(" ").length - 0.008} Minutes </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to Preview"}</p>
            </div>

        </>
    );
}
