class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    // console.log(newItemValue);
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({newItemValue});
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input ref="itemName" type="text" placeholder="add a todo"/>
        <button type="submit">add</button>
      </form>
    );
  }
}

window.Form = Form;