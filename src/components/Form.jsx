import React, { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    };
    
  handleSubmit = e => {
    e.preventDefault();

      this.props.onSubmit(this.state);
      this.reset();
    }
    reset = () => {
        this.setState({ name: '', number: '' });    
    }

    render() {
        return <>
          <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
          Name<br />
              <input style={{ width: 300, height: 40}} value={this.state.name} onChange = {this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
          </label>
          <br/>
          <label htmlFor="">
          Number<br/>
          <input style={{ width: 300, height: 40}} value={this.state.number} onChange = {this.handleChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            <br/>
            <button type="submit" style={{ width: 150, height: 60, marginTop: 50}} className="">Add contact</button>
            </label>
        </form>
        </>
    }
}
export default Form;