const fs = require('fs').promises;
const { v4 } = require('uuid');
const path = require('node:path').posix;
const contactsPath = path.posix.format({ base: 'db/contacts.json' });
const products = require('./db/contacts.json');
const getAll = async () => products;
function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

async function getContactById(contactId) {
  const products = await getAll();
  const product = products.find((item) => item.id === contactId.toString());
  if (!product) {
    return null;
  }
  return console.log(product);
}

// function removeContact(contactId) {
//   // ...твой код
// }

async function addContact(name, email, phone) {
  const products = await getAll();
  const nameCheck = products.find((item) => item.name === name.toString());
  const emailCheck = products.find((item) => item.email === email.toString());
  const phoneCheck = products.find((item) => item.phone === phone.toString());
  if (nameCheck || emailCheck || phoneCheck) return;
  const newProduct = { id: v4(), name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify([...products, newProduct]));
}
module.exports = {
  listContacts,
  getContactById,
  addContact,
};
