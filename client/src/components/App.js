class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['make a frontend','make a server', 'make a backend']
    }
  }

  render() {
    return (
      <div>
        <h2>Todo List MERN FullStack</h2>
        <TodoList/>
        <button id="showAll">show all</button>
      </div>
    );
  }
}

window.App = App;

ReactDOM.render(<App />, document.getElementById("app"))