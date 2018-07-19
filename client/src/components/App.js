class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Todo List MERN FullStack</h2>
        <Form/>
        <TodoList/>
        <button id="showAll">show all</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"))