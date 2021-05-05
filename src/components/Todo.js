import React from 'react';
export default function Todo(props){
    
   const click = ()=>{
       props.toggleFunc(props.item.id)  
   }
    return(<div>
          {props.hidden===true?<h1 onClick={click}>hidden</h1>:<h1 onClick={click}>{props.item.task}</h1>}
          </div>)

}