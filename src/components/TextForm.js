import React, { useState } from 'react'

export default function TextForm(props) {

    // TO Convert to UPPERCASE
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    // TO Convert to LowerCase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    // TO Clear Text
    const handleClearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    // TO Copy text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to Clipboard!", "success");
    }

    // To Remove ExtraSpaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed!", "success");
    }


    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container ' style={{ color: props.mode === 'dark' ? 'white' : '#1a1a1a' }}>
                <div className='container  my-3 col-sm-8'>
                    <h1 className='mb-3'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#4b4949' : 'white', color: props.mode === 'dark' ? 'white' : '#1a1a1a' }} id="myBox" rows="8"></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                <div className="container my-3 col-sm-8 " style={{ color: props.mode === 'dark' ? 'white' : '#1a1a1a' }}>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
                </div>
            </div>
        </>
    )
}
