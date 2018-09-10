import React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';



class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={ value: '',
        items: [
            {
              "id": 1,
              "description": "Get out of bed",
              "done": true
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "done": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "done": false
            }
          ]};
        this.changeValue = this.changeValue.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.changeStatus= this.changeStatus.bind(this)


    }

    changeValue(newInputValue) {
     //console.log(value)
     this.setState({value:newInputValue})
    }
    
    addTodo(){
       // console.log('adding to  do')
       const newItem={
           id:++ this.id,
           description: this.state.value,
           done:  false
       };
       const Items=this.state.items
       const newItems=Items.push(newItem)
       this.setState({items:Items,value:''})
       //items.push(newItem)
       //console.log(newItem)
    }

    changeStatus(todoId){
//console.log(`todo ${todoId}changed`)
const newItems=this.state.items.map((todo)=>{
    if (todo.id!==todoId)return todo;
    else{
        todo.done= !todo;
        return todo;
    }
})
this.setState={items:newItems}
    }

    render (){
        return (
            <div className='changeValue_app'>
            <TodoAdd value={this.state.value} onButtonClick={this.addTodo} onChange={this.changeValue} />
            <TodoList changeStatus={this.changeStatus} items={this.state.items} />
            
        </div>
        )}
}
export default TodoApp;