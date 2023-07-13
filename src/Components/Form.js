import React, {useState} from 'react'

export default function Form(props) {
const [text, newtext] = useState("Type Something .......");
const handleUp =()=>{
    const z=text.toUpperCase()
    newtext(z);
    props.showAlert(': Converted to Upper Case',"success")
}
const handleLow =()=>{
    const z=text.toLowerCase()
    newtext(z);
    props.showAlert(': Converted to Lower Case',"success")
}
const handleOnChange =(event)=>{
    newtext(event.target.value);
    
}
const handleCopy =()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert(': Text Copied',"success")
}
const handleClean =()=>{
   
    newtext("");
    props.showAlert(': Text Cleared',"success")
}
const handleExtraSpace =()=>{
   let z=text.split(/[ ]+/);
    newtext(z.join(" "))
    props.showAlert(': Extra Space Removed',"success")
}
  return (
    <div className="mb-3 container" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label" ><strong>Enter your text below :)</strong>  </label>
  <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
  <div className="container">
  <button type="button" className="form-btn btn bton " onClick={handleUp} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>Uppercase</button>
  <button type="button" className="form-btn btn bton " onClick={handleLow} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>Lowercase</button>
  <button type="button" className="form-btn btn bton " onClick={handleExtraSpace} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>Remove Spaces</button>
  <button type="button" className="form-btn btn bton " onClick={handleCopy} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>Copy Text</button>
  <button type="button" className="form-btn btn bton " onClick={handleClean} style={{backgroundColor: props.mode==='light'?'#e5e2e2':'#212529', color: props.mode==='light'?'black':'white'}}>Clear Text</button>
  </div>
  <div className="container my-4" >
    <h3> Text Summary !!!!</h3>
    <br></br>
    <p>Total number of Words: {text.split(/\s/).filter((element)=>{return element.length!==0}).length}</p>
    <p>
      Total number of characters: {text.length}
    </p>
  </div>
</div>
  )
}
