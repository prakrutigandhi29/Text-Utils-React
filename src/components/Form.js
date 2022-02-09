import React,{useState} from 'react'
function Form(props) {
    const handleUpperCase=(event)=>{
        let newText=text.toUpperCase();
        setText(newText)
        event.preventDefault();
        props.showAlert("Converted Text into Uppercase","success");
    }
    const handleLowerCase=(event)=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted Text into Lowercase","success");
        event.preventDefault();
    }
    const handleClear=(event)=>{
        setText('');
        props.showAlert("Cleared the text","success");
        event.preventDefault();
    }
    const handleCopy=(event)=>{
        let text=document.getElementById("my-textarea")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
        event.preventDefault();
    }
    const handleSpaces=(event)=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
        event.preventDefault();
    }
    const changeHandler=(event)=>{
        setText(event.target.value)
    }

    
    const[text,setText]=useState("");
  return (
    <div>
      <form>
        <div className={`form-group mb-3 text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={changeHandler} id="my-textarea" rows="10"></textarea>
            <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>

            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read </p>
            <h2>Preview</h2>
            <p>{text===''?'Enter text to preview':text}</p>
        </div>
      </form>
    </div>
  )
}

export default Form
