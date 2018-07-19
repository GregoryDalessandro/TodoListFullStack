class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(todoItem) {
    console.log(this.state.todoItems);
    this.state.todoItems.unshift( {
      index: this.state.todoItems.length + 1,
      value: todoItem.newItemValue
    });
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



