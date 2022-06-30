import React, { useState, useEffect} from "react";
import Form from "./Form";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { nanoid } from 'nanoid';


const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ??
      [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {

  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
const normalFilter = filter.toLocaleLowerCase();
const filterContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalFilter));  

const formSubmitHandler = data => {

    const filterContact = data.name.toLocaleLowerCase();
   
    const contactsForFind = contacts.find((i => i.name.toLocaleLowerCase() === filterContact));

    if (contactsForFind){
      window.alert(`${data.name} is already in contacts`);
      return
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    setContacts(
          [contact, ...contacts]
       )
}
const changeFilter = (e) => {
    setFilter(e.currentTarget.value );
  };
const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact=>contact.id !== contactId))
    }
  
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
        <Form onSubmit={formSubmitHandler}  />
        <Filter value={filter} onChange={changeFilter} />
        <h2>Contact</h2>
        <ContactList contacts={filterContacts} onDeleteContact={deleteContact}/>
      </div>
    );
  
}


export default App;