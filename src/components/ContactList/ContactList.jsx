import React from 'react';

import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts?.filter(contact =>
      contact?.name?.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ol>
      {filteredContacts()?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div className={style.item}>
              {name}: {number}
              <button
                className={style.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;
