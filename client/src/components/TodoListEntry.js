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

window.TodoListEntry = TodoListEntry;