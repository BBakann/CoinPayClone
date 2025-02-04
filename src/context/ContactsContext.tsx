import React, { createContext, useContext, useState } from 'react';

type Contact = {
  id: number;
  name: string;
  email: string;
};

type ContactsContextType = {
  contacts: Contact[];
  addContact: (name: string, email: string) => void;
};

const ContactsContext = createContext<ContactsContextType>({
  contacts: [],
  addContact: () => {},
});

export function ContactsProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com' },
    { id: 2, name: 'John Smith', email: 'john@example.com' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com' },
  ]);

  const addContact = (name: string, email: string) => {
    const newContact = {
      id: contacts.length + 1,
      name,
      email,
    };
    setContacts([newContact, ...contacts]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
}

export const useContacts = () => useContext(ContactsContext); 