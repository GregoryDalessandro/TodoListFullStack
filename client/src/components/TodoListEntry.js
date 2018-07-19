class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickEdit() {

  };

  onClickRemove() {

  };

  createEntries(todo) {
    return (
      <div>
        <li key={todo.key}>{todo.text}</li>
        <button type="button" className="edit">edit</button>
        <button type="button" className="remove">remove</button>
      </div>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listEntries = todoEntries.map(this.createEntries);

    return (
      <ul className="theList">{listEntries}</ul>
    );
  }
}



window.TodoListEntry = TodoListEntry;