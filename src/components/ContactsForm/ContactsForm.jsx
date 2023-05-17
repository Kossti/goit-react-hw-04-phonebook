import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import css from './ContactForm.module.css'

export default class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact({ id: nanoid(6), ...this.state })
        this.reset();
    }

    reset = () => {
        this.setState({
        name: '',
        number: '',
    })
    }

  render() {
    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.formLable}>
                Name:
                <input className={css.formInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                    value={this.state.name}
                />
            </label>
            <label className={css.formLable}>
                Number:
                <input className={css.formInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                    value={this.state.number}
                />
            </label>
            <button className={css.formButton} type="submit">Add contact</button>
      </form>
    )
  }
}

ContactsForm.propTypes = {
    addContact: PropTypes.func.isRequired,
}.isRequired;