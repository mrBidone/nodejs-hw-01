import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 1; i <= number; i += 1) {
      contacts.push(createFakeContact());
    }
    writeContacts(contacts);
    console.log('Вміст файлу:', contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
