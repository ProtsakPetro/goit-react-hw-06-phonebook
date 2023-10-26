import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      <ul>
        {Array.isArray(contacts) ? (
          contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              removeContact={removeContact}
            />
          ))
        ) : (
          <li>No contacts available</li>
        )}
      </ul>
    </>
  );
};

export default ContactList;
