class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.todo}</li>
    );
  }

}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>Todo List MERN FullStack</h2>
    <form>
      <input type="text" name="name" />
      <input type="submit" value="add" />
    </form>
    <div>
    <TodoList todos={['make a frontend', 'make a server', 'make a backend']}/>
    </div>
    <button id="showAll">show all</button>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))