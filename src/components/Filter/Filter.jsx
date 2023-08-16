import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const { filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <input
      onChange={e => {
        dispatch(setFilter(e.target.value));
      }}
      className={''}
      type="text"
      name="name"
      title="Contacts"
      value={filter}
    />
  );
};

export default Filter;
