import React, { Component } from 'react'
import ContactsForm from './ContactsForm/ContactsForm'
import ContactsList from './ContactsList/ContactsList'
import Filter from './Filter/Filter'
import css from './App.module.css'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }


  handleAddContact = (contact) => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert("Contact already exists");
      return
    }
    this.setState(prevState => ({contacts: [...prevState.contacts, contact]}))
  }

  contactToDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }
    })
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  }

  handleFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase().trim())
    })
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });  
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

  }



  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <div className={css.section}>
        <h1 className={css.sectionTitel}>Phonebook</h1>
        <ContactsForm addContact={this.handleAddContact} />
        <h2 className={css.sectionTitel}>Contacts</h2>
        <Filter value={this.state.filter} handleChange={this.handleChange} />
        <ContactsList contacts={filteredContacts} contactToDelete={this.contactToDelete} />
      </div>
    )
  }
}

