// class App extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <div>
//         <div>{this.props.todo}</div>
//         <div>{this.props.edit}</div>
//         <div>{this.props.del}</div>
//       </div>
//     )
//   }
// }
var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>Todo List MERN FullStack</h2>
    <div class="textbox">
      <input id="msg" type="input"></input>
      <button id="add">add</button>
    </div>
    <TodoList todos={['make a frontend', 'make a server', 'make a backend']}/>
    <button id="showAll">show all</button>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))