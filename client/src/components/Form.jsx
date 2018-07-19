import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
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

// window.Form = Form;
export default Form;