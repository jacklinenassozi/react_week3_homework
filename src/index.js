import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import Header from './Header';
const root = document.getElementById('root')

function App(){
    return(
        <div id='app'>
        <Header />
        <TodoApp />
        </div>
    )
}

ReactDOM.render(<App />, root);
//registerServiceWorker();
