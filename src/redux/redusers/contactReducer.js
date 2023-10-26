const initialState = {
  contacts: [
    { id: 'id-1', name: 'Misjko Lutij', number: '555-15-15' },
    { id: 'id-2', name: 'Antonio Linuvui', number: '444-14-14' },
    { id: 'id-3', name: 'Marusia Nechemna', number: '666-55-44' },
  ],
  filter: '',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;