class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="todoListMain">
        <TodoListEntry entries={this.state.todos} />
      </div>
    );
  }
}

window.TodoList = TodoList;
