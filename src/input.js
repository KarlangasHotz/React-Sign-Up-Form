import React, {useEffect} from 'react'
import "./input.css"


const Input =()=> {

  React.useEffect(() =>{

    const fN = document.getElementsByClassName("fn");
    const lN = document.getElementsByClassName("ln");
    
    window.addEventListener("keydown", (e)=>{

      
      if (e.code === "Enter"){

        if(e.code != null || undefined){
          
          
          alert(`Is your name ${fN[0].value} ${lN[0].value} by any chance?`)
        }
      }
    });
  }, [])

  return (<>
  <label>First Name
    <input className='fn'/>
  </label>

  <label>Last Name
    <input className='ln'/>
  </label>

  <label type = "email">Email
    <input className='email'/>
  </label>

  <label>Phone
    <input className='phone'/>
  </label>

  <label type= "password">Password
    <input className='password'/>
  </label>
  
  <label type= "password">Confirm Password
    <input className='confpass'/>
  </label>

  </>)
}
export default Input;