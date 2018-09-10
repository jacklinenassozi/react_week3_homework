import React from 'react';
import '../style.css';
function TodoItem(props) {
    const todoTextClass = props.done
        ? 'item-done'
        : ''
    // console.log(props)
    return (
        <li>
            <input
                type='checkbox'
                onChange={() => {
                props.changeStatus(props.id)
            }}
                checked={props.done}
                />
                <span className={todoTextClass}>{props.text}</span> 
            <button>remove</button>
        </li>
    )
}
export default TodoItem;