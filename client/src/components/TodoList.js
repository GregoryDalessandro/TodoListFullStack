class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem}/>
      );
    });
    return (
      <ul>{items}</ul>
    );
  }
}

window.TodoList = TodoList;
