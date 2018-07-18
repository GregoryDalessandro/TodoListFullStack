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
    console.log('add button working')
  }
}

window.Form = Form;