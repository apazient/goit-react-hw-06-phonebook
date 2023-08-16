import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => {
        return item.id !== payload;
      });
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
