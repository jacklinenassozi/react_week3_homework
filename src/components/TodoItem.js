import React from "react";

function TodoItem(props) {
  const todoTextClass = props.done ? "item-done" : "";
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => {
          props.changeStatus(props.id);
        }}
        checked={props.done}
      />
      <span className={todoTextClass}>{props.text}</span>
      <button  onClick={()=>{
        props.removeTodo(props.id)
    }}>remove</button>
      </li>
  );
}

export default TodoItem;
