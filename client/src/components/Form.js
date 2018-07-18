class Form extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <input className="userInput" type="text" />
        <button className="add" onClick={this.clickHandler.bind(this)}>add</button>
      </div>
    );
  }

  clickHandler() {
    let $input = $('.userInput').val();
    console.log($input)
    $('.todo-list').append(<TodoListEntry todo={$input} key={$input}/>);
  }
}

window.Form = Form;