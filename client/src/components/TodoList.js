var TodoList = (props) => (
  <ul className="todo-list">
    {props.todos.map(todo =>
      <TodoListEntry todo={todo} key={todo}/>
    )}
  </ul>
);

window.TodoList = TodoList;