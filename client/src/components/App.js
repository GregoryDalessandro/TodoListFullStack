var App = () => (
  <div>

    <h2>Todo List MERN FullStack</h2>

    <Form />

    <div>
      <TodoList todos={['make a frontend','make a server', 'make a backend']}/>
    </div>

    <button id="showAll">show all</button>

  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))