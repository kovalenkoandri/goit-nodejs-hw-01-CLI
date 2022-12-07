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

async function getContactById(contactId) {
    const products = await getAll();
    const product = products.find((item) => item.id === contactId.toString());
    if(!product) {
        return null;
    }
    return console.log(product);
}

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
module.exports = {
  listContacts,
  getContactById,
};
