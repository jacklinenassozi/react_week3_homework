import React from 'react';

function TodoAdd(props){
  //const inputValue=''

    return (<div className= 'todo-add'>
     <input 
      type = 'text' 
       onChange = {e => {
           const input = e.target
           const newValue =input.value
        //console.log(e.target.value)
        props.onChange(newValue);
       }}
       value={props.value} />
      <button onClick={props.onButtonClick}> add todo</button>
    </div>
  )
}
export default TodoAdd;