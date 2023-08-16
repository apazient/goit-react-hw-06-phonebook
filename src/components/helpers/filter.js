//chek exist item in the list
export const isExistValue = (value, data) => {
  let existContact = [];
  data.map(({ name }) => {
    return existContact.push(name);
  });
  return existContact.includes(value)
    ? alert('This data is allredy exist in the list')
    : true;
};
