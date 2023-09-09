import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked" +text);
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=() => {
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=() => {
        let newText=text.split(/[]+/);
        setText(newText.join(""))
    }
const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' ,color:props.mode=== 'dark'?'white':'#042743'}}
       id="myBox"
      rows="8"
 ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


</div>
< div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>

  <h2>Your text summary</h2>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>{0.08 * text.split(" ").length} Minutes Read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter something to preview"}</p>
</div>
</>
  )
}

