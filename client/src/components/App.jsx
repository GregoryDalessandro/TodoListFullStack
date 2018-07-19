import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
import TodoList from './TodoList.jsx';
import TodoListItem from './TodoListItem.jsx';
// import app from '../server/index.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(todoItem) {
    this.state.todoItems.unshift( {
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue
    });
    this.setState({todoItems: this.state.todoItems});
  }
  removeItem(itemIndex) {
    this.state.todoItems.splice(itemIndex, 1);
    this.setState({todoItems: this.state.todoItems});
  }
  render() {
    return (
      <div>
        <h2>Todo List MERN FullStack</h2>
        <Form addItem={this.addItem}/>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem}/>
        <button id="showAll">show all</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));







