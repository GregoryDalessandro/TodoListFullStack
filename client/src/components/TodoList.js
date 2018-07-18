class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    if (this._inputElement.value !== "") {
      var newTodo = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          todos: prevState.todos.concat(newTodo)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.todos);

    //stop the page from refresh on submit
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addTodo}>
            <input type="text" ref={(a) => this._inputElement = a} placeholder="enter task"></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}



window.TodoList = TodoList;

// {props.todos.map((todo) =>
//       <TodoListEntry todo={todo} key={todo.toString()}/>
//     )}