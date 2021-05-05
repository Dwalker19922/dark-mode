import React from 'react';

export default function Todoform(props) {
  
    return(<div>
        
        <form>
            <input type="text" onChange={props.handleChange}/>
            <button type="submit" onClick={props.submit}>Submit</button>
            <button onClick={props.clearComplete} >Clear</button>
        </form>
    </div>)
}