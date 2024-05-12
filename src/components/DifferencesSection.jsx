import Button from "./Button/Button"
import {differences} from '../data'
import {useState} from 'react'


export default function DifferencesSection(){
  let [contentType, setContentType] = useState(null)
    
  function handleClick(type){
    setContentType(type)
  }

    return(
        <section>
        <h3>How are we different from others</h3>
        
        <Button isActive={contentType === 'way'} onClick = {() => handleClick('way')}>btn1</Button>
        <Button isActive={contentType === 'easy'} onClick = {() => handleClick('easy')}>btn2</Button>
        <Button isActive={contentType === 'program'} onClick = {() => handleClick('program')}>btn3</Button>

        {contentType ? (
        <p>{differences[contentType]}</p> 
        ) : (
         <p>click button</p> 
        )}

        
      </section>

    )
}