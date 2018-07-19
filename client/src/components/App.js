class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: []
    };
  }

  render() {
    return (
      <div>
        <h2>Todo List MERN FullStack</h2>
        <Form/>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem}/>
        <button id="showAll">show all</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))