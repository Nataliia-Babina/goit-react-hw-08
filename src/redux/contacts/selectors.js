import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = createSelector(
    state => state.contacts.items,
    state => state.filters.name.toLowerCase(),
    (contacts, filter) => {
      return Array.isArray(contacts) ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ) : [];
    }
  );