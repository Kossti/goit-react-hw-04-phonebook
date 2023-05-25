import React, { useState, useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
// import { useEffect } from 'react';
// import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    if (
      Array.isArray(contacts) &&
      contacts.find(item => item.name === contact.name)
    ) {
      alert('Contact already exists');
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const contactToDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleFilterContacts = () => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  const filterContacts = handleFilterContacts(contacts, filter);
  const savedContacts = contacts.length;

  return (
    <div className={css.section}>
      <h1 className={css.sectionTitel}>Phonebook</h1>
      <ContactsForm addContact={handleAddContact} />
      <h2 className={css.sectionTitel}>Contacts</h2>
      <Filter value={filter} handleChange={handleChange} />
      <ContactsList
        contacts={filterContacts}
        savedLocalContacts={savedContacts}
        contactToDelete={contactToDelete}
      />
    </div>
  );
};
