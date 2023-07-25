import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase", "success")
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowecase", "success")
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copied to clipbord", "success")

    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert(" Text has been cleared", "success")
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+\s/);
        setText(newText.join(" "))
        props.showAlert(" Extraspaces removed", "success")
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
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Type your text here" value={text} 
                    onChange={handleUpChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(24 65 100)' : 'white', 
                     color: props.mode === 'dark' ? 'white': 'black'}} id="myBox" rows="8">
                    </textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} id="myBox" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text sumamary</h1>
                <p>Charcater Count: {text.length} | Word Count: {text.split(" ").filter((element)=>{return element.length !== 0}).length}</p>
                <p>Reading Time: {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>

        </>
    );
}
