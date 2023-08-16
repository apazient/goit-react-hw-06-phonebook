import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './ContactForm.module.css';
import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';
import { isExistValue } from 'components/helpers/filter';

export function ContactForm() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Value not found');
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    isExistValue(name, contacts) && dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number" className={style.label}>
        Name
      </label>
      <div className={style.form}>
        <input
          className={style.input}
          type="text"
          name="name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
