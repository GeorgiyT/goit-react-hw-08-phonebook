import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

class PhoneBook extends Component {
  render() {
    return (
      <>
        <h2 className={""}>Phonebook</h2>
        <ContactForm />
        <h2 className={""}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default PhoneBook;
