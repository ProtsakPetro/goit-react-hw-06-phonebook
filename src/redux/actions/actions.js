export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: contact,
});

export const removeContact = (contactId) => ({
  type: 'REMOVE_CONTACT',
  payload: contactId,
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});