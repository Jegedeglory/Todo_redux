import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/visibilityFilter';
import {Provider} from 'react-redux';
import store from './redux/store';


const filters = ['all', 'completed', 'incomplete']


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>TODO MANAGERS</h1>
      <AddTodo />
      <TodoList todos={[{content: 'Task 1'}, {content: 'Task 2'}]} />
      <VisibilityFilter filters={filters}/>
    </div>
    </Provider>
  );
}

export default App;
