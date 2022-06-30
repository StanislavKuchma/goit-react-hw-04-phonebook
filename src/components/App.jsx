// import { render } from "@testing-library/react";
import React from "react";
import Form from "./Form";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }
  componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
   }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
   }
  
  formSubmitHandler = data => {

    const filterContact = data.name.toLocaleLowerCase();
   
    const contactsForFind = this.state.contacts.find((i => i.name.toLocaleLowerCase() === filterContact));

    if (contactsForFind){
      window.alert(`${data.name} is already in contacts`);
      return
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState =>({
         contacts: [contact, ...prevState.contacts]
       }))
}
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  };

  render() {
    const normalFilter = this.state.filter.toLocaleLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalFilter));
    return (
      <div
        style={{
          height: '100vh',
          justifyItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}  />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contact</h2>
        <ContactList contacts={filterContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  };
}
