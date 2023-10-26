import React from "react";
import { connect } from 'react-redux';
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./index.styled";
import Filter from "./Filter/Filter";
import { addContact, removeContact, setFilter } from '../redux/actions/actions';

const App = ({ contacts, addContactData, removeContact, filter, getFilterData }) => {
  return (
    <Container>
      <h1>PHONEBOOK</h1>
      <ContactForm addContactData={addContactData} />
      <h2>CONTACTS</h2>
      <Filter filter={filter} getFilterData={getFilterData} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
}

const mapDispatchToProps = {
  addContactData: addContact,
  removeContact: removeContact,
  getFilterData: setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);