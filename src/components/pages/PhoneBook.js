import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./PhoneBook.module.css";

class PhoneBook extends Component {
  render() {
    return (
      <>
        <h2 className={styles.headers}>Phonebook</h2>
        <ContactForm />
        <h2 className={styles.headers}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default PhoneBook;
