import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export default function ContactsList({
  contacts,
  contactToDelete,
  savedLocalContacts,
}) {
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactsItem} key={contact.id}>
            <span className={css.contactsName}>{contact.name}</span>:
            <span className={css.contactsNumber}>{contact.number}</span>
            <button
              className={css.contactsButton}
              type="button"
              onClick={() => contactToDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
      {/* {contacts.length === 0 && savedLocalContacts > 0 && (
        <li className={css.contactsItem}>No contact found in the phonebook!</li>
      )} */}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contactToDelete: PropTypes.func,
}.isRequired;
