import React from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  return (
    <div
      style={{
        display: 'block',
        margin: '0 auto',
        padding: '12px 16px',
        borderRadius: 4,
        border: '1px solid gray',
        width: '380px',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList />
    </div>
  );
}
