const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts.js');

const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':
        return await listContacts();

      case 'get':
        return await getContactById(id);

      case 'add':
        return await addContact(name, email, phone);

      case 'remove':
        return await removeContact(id);

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  } catch (error) {
    throw new Error('error!!!!!!!!!!');
  }
};

invokeAction(argv);
