const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts.js');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

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
