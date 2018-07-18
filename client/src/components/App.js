var App = () => (
  <div>

    <h2>Todo List MERN FullStack</h2>

    <form>
      <input type="text" />
      <button id="add">add</button>
    </form>

    <div>
      <TodoList todos={['make a frontend','make a server', 'make a backend']}/>
    </div>

    <button id="showAll">show all</button>

  </div>
);


ReactDOM.render(<App />, document.getElementById("app"))