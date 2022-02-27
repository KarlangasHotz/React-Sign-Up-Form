import React, {useState, useEffect} from 'react'
import "./button.css"


const Button = ()=>{

  React.useEffect(() =>{
    
    const buttonAction = document.getElementsByClassName("btn")[0];
    const fN = document.getElementsByClassName("fn");
    const lN = document.getElementsByClassName("ln");

    buttonAction.addEventListener("onclick", ()=>{
      console.log(buttonAction)
      if(fN || lN != null || undefined){
        
          alert(`Is your name ${fN[0].value} ${lN[0].value} by any chance?`)
        }
    });
  }, [])



  const [counter, setCounter] = useState(0);
  
  return (<button className="btn" type ="button" onMouseOver= {() => setCounter(counter + 1)}>Register now! {counter} hover(s) </button>
  )
};
export default Button;
