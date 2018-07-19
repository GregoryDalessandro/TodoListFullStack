class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    var newTodoValue = this.refs.todoName.value;
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input ref="todoName" type="text" placeholder="add a todo"/>
        <button type="submit">add</button>
      </form>
    );
  }
}

window.Form = Form;