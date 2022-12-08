var module = require('./contacts.js');
// module.listContacts(); // запуск экспортируемой функции модуля
// module.getContactById(5);
// module.addContact('andrew', 'kova@mail.ru', '(594) 840-65585');
// module.addContact(
//     'hhhhhhhhhh',
//     'mailr',
//     '555555554'
// );
// module.removeContact(a72c40c6);
const argv = require('yargs').argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      module.listContacts();
      break;

    case 'get':
      module.getContactById(id);
      break;

    case 'add':
      module.addContact(name, email, phone);
      break;

    case 'remove':
      module.removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
