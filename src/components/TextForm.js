import React,{useState} from 'react'

export default function TextForm(props) {
    const[ text, setText]= useState (' ');
   


    const handleUpClick= () =>
    {
        
        let newText=text.toUpperCase();
        setText (newText);
        props.showAlert("Converted to upper case","success");
        
       

        
    }
    const handleOnChange= (event) =>
    {
        
        setText(event.target.value);
    }
    const handleLowClick= () =>
    {
        
        let newText=text.toLowerCase();
        setText (newText);
        props.showAlert("Converted to lower case","success");
        
        
    }
    const handleClear =() =>
    {
        let newText=" ";
        setText(newText);
        props.showAlert("Cleared Text","success");
       
    }
    const handleCopy = () =>
    {
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied tex","success");
        
    }
    const handleExtraSpaces = () =>
    {
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Clear");
        props.showAlert("Extra spaces removed","success");

    }
    
    
 
  return (
    <> 
    <div >
        <h1 style={{color : props.mode ==='light'?'black':'white'}}> {props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor : props.mode ==='light'?'white':'grey',color : props.mode ==='light'?'black':'white'}} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to lower case</button>
      <button className='btn btn-primary mx-2' onClick={handleClear}> Clear </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
       </div>
      <div className="container mb-3" style={{color : props.mode ==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length -1 } words and {text.length} character</p>
      <p>{0.008* text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write your text in the above text area to be previed"}</p>


      </div>
      </>
  )
}
