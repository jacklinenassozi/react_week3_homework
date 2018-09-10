import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';

const root = document.getElementById('root')

function App(){
    return(
        <div id='app'>
        <TodoApp />
        </div>
    )
}

ReactDOM.render(<App />, root);
//registerServiceWorker();
