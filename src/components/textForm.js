
import React, { useState } from 'react';
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upperCase was clicked" + text);
        let newText1=text.toUpperCase();
        setText(newText1);
        props.showAlert(" Converted to Uppercase","success")
    }
    const handleDownClick = () => {
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert(" Converted to Lowercase","success")

    }
    const handleOnChange = (event) => {
        // console.log("on change");
        
        setText(event.target.value);
    }
    const handleRemoveSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Spaces Are removed","success")
    }
    const handleWordCount=()=>{
        let length=0;
        for(let i=0;i<text.split(" ").length;i++){
            if (text.split(" ")[i]===""){
                continue;
            }
            length++;
        }
        return length;
    }
    // const handleFindReplace=()=>{
    //     let x=ReactDOM.createRoot(document.getElementById("inputTextToReplace"));
    //     let y=ReactDOM.createRoot(document.getElementById("inputTextWithReplace"));
    //     let newText=text.replace(x, y);
    //     setText(newText);
    // }
    const [text, setText] = useState("Enter Text Here");
    return (
    <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <form>
                <div>
                        <h1>{props.heading}</h1>
                        <textarea className="form-control" id="MyBox" onChange={handleOnChange} rows="10" value={text} style={{backgroundColor:props.mode==='light'?'white':'#343a40',color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
            </form>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary my-3 " onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
            <br />
            {/* <input type="text" placeholder='Enter Word' id='inputTextToReplace'/>
            <input type="text" placeholder='Enter Word' id='inputTextWithReplace' className="mx-3"/>
            <button className="btn btn-primary my-3 mx-3" onClick={handleFindReplace}>Replace</button> */}
        </div>
        <div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{handleWordCount()} words {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter the Text to Preview'}</p>
        </div>
    </>
    )
}
