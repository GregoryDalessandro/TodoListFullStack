var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListEntry todo={todo} key={todo}/>
    )}
  </ul>
);

window.TodoList = TodoList;