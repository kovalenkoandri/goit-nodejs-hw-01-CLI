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

async function removeContact(contactId) {
  const products = await getAll();
  const contactIdCheck = products.find(
    (item) => item.id === contactId.toString(),
  );
  if (!contactIdCheck) throw new Error('this contactId does NOT exists');
  const index = products.findIndex(
    (item) => item.id === contactId.toString(),
  );
  const deleteProduct = products.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify([...products, deleteProduct]));
}

async function addContact(name, email, phone) {
  if (!name) throw new Error('name missing');
  if (!email) throw new Error('email missing');
  if (!phone) throw new Error('phone missing');
  const products = await getAll();
  const nameCheck = products.find((item) => item.name === name.toString());
  if (nameCheck) throw new Error('this name already exists');
  const emailCheck = products.find((item) => item.email === email.toString());
  if (emailCheck) throw new Error('this email already exists');
  const phoneCheck = products.find((item) => item.phone === phone.toString());
  if (phoneCheck) throw new Error('this phone already exists');
  const newProduct = { id: v4(), name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify([...products, newProduct]));
}
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
