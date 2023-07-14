import React, {useState}from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked: " + text);
        let newText = "";
        setText(newText)
    }   

    const handleUpChange = (event) =>{
        // console.log("On change"); 
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container my-2">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container my-3" >
            <h1>Your text sumamary</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length-0.008} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    );
}
