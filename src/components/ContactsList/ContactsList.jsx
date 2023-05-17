import React from 'react'
import PropTypes from 'prop-types'
import css from './ContactList.module.css'

export default function ContactsList({ contacts, contactToDelete }) {
    return <ul className={css.contactsList}>
        {contacts.map(contact => {
            return <li className={css.contactsItem}
                key={contact.id}>
                <span className={css.contactsName}>{contact.name}</span>:
                <span className={css.contactsNumber}>{contact.number}</span>
                <button className={css.contactsButton} type='button' onClick={() => contactToDelete(contact.id)}>Delete</button>
            </li>
        })}
        </ul>
        }

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    contactToDelete: PropTypes.func,
}.isRequired;