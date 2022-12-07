const fs = require('fs').promises;
const path = require('node:path').posix;
const contactsPath = path.posix.format({ base: 'db/contacts.json' });
const products = require('./db/contacts.json');
const getAll = async () => products;
  function listContacts() {
    fs.readFile(contactsPath)
      .then((data) => console.log(data.toString()))
      .catch((err) => console.log(err.message));
  };

function getContactById(contactId) {
  const promise = new Promise((resolve, reject) => {
    resolve(getAll());
    reject('Error! Error passed to reject function');
  });
  promise
    .then((data) => {
      const found = data.find((el) => el.id === contactId.toString());
      console.log(found);
    })
    .catch((err) => console.log(err.message));
}

getContactById(5);
// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
module.exports = {
  listContacts,
};
