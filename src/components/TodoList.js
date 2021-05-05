import React from 'react';
import Todo from './Todo'
export default function TodoList(props){
    console.log(props)
    return(<div>
            {props.data.todo.map((item)=>{
            return(<Todo key={item.id} item={item} toggleFunc={props.data.toggleFunc} hidden={props.data.hidden}/>)
            })}
          </div>)

}