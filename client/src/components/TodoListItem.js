class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
  }

  onClickEdit() {

  };

  onClickRemove() {
    this.props.removeItem(this.props.index);
  };

  render() {
    return (
      <li>
        <div>
          {this.props.item.value}
          <button type="button" className="remove" onClick={this.onClickRemove}>remove</button>
        </div>
      </li>
    );
  }
}



window.TodoListItem = TodoListItem;