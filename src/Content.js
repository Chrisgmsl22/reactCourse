import React from 'react'
//We import a react hook
import { useState } from 'react';

const Content = () => {
    //WHat were gonna use for state
    const[name, setName] = useState('Julius')
    
    //Another state
    const[count, setCount] = useState(0)
    
    //My own variables
    const handleNameChange = () =>{
        const names = ["Dave", 'Bob', 'Richard'];
        const int = Math.floor(Math.random() * 3); //A random number generator
        //return names[int];
        setName(names[int]); 
    }

    //Different function where it handles the click
    const handleDefaultClick = () =>{
      //We set the counter to iterate += 1 times
      setCount(count + 1)
      console.log(`${count}`)
    }

    const handleClick = () => {
      console.log('You Clicked it')
    }

    const handleClick2 = () => {
      console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
      console.log(`${e.target.innerText}`)
     
    }
  
  return (
    <main>
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p onDoubleClick={handleClick}>
          Hello {name}!
        </p>
        
        {/* Button sections */}
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleDefaultClick}>Counter</button>

        <button onClick={() => {
          handleClick2('Robert')
        }}>Click this</button>

        <button onClick={(e) =>{
          handleClick3(e)
        }}>3rd</button>
        
        
      
    </main>
  )
}

export default Content

//Click events

/*
  () => is an anonymous function

  reactHook

  Hooks allow you to load default information for when the component is being called
*/