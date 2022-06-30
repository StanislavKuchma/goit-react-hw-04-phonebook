import React from "react";
import PropTypes from 'prop-types';
import s from "./ContactList.module.css"

export  const ContactList = ({
  contacts,onDeleteContact
}) => {
  return <>
    {contacts.map(data =>
      <ul className={s.contact} key={data.id} >
        <ContactListItem
          id={data.id}
          name={data.name}
          number={data.number}
          onDeleteContact={onDeleteContact} />
            {/* <button onClick={()=>onDeleteContact(data.id)}>Delete</button> */}
      </ul> )}     
    </>
}

const ContactListItem = ({
  id,
  name,
  number,
  onDeleteContact
}) => {
  return <>
    <li className="item_contact">
      {name}:{number}
      <button onClick={()=>onDeleteContact(id)}>Delete</button>
    </li>
    </>
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
};