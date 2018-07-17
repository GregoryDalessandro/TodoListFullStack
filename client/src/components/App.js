class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }
  onClickEdit() {};

  onClickRemove(props) {
    console.log(this.props);
  };

  render() {
    return (
      <div>
      <li>{this.props.todo}</li>
      <button type="button" className="edit" onClick={this.onClickEdit}>edit</button>
      <button type="button" className="remove" onClick={this.onClickRemove}>remove</button>
      </div>
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
      <input className="input" type="text" name="name" />
      <input className="add" type="submit" value="add" />
    </form>
    <div>
    <TodoList todos={['make a frontend', 'make a server', 'make a backend']}/>
    </div>
    <button id="showAll">show all</button>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))