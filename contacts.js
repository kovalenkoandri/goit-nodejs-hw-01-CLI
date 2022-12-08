const fs = require('fs').promises;
const { v4 } = require('uuid');
const path = require('node:path').posix;
const contactsPath = path.posix.format({ base: 'db/contacts.json' });
const products = require('./db/contacts.json');
const getAll = async () => products;
function listContacts() {
  fs.readFile(contactsPath)
    .then(data => console.table(data.toString()))
    .catch(err => console.log(err.message));
}

async function getContactById(contactId) {
  const products = await getAll();
  const product = products.find(item => item.id === contactId.toString());
  if (!product) {
    console.log('this contactId does NOT exists');
    return null;
  }
  return console.log(product);
}

async function removeContact(contactId) {
  const products = await getAll();
  const contactIdCheck = products.find(
    item => item.id === contactId.toString()
  );
  if (!contactIdCheck) {
    console.log('this contactId does NOT exists');
    return null;
  }
  const index = products.findIndex(item => item.id === contactId.toString());
  products.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify([...products]));
}

async function addContact(name, email, phone) {
  if (!name) {
    console.log('name missing');
    return null;
  }
  if (!email) {
    console.log('email missing');
    return null;
  }
  if (!phone) {
    console.log('phone missing');
    return null;
  }
  const products = await getAll();
  const nameCheck = products.find(item => item.name === name.toString());
  if (nameCheck) {
    console.log('this name already exists');
    return null;
  }
  const emailCheck = products.find(item => item.email === email.toString());
  if (emailCheck) {
    console.log('this email already exists');
    return null;
  }
  const phoneCheck = products.find(item => item.phone === phone.toString());
  if (phoneCheck) {
    console.log('this phone already exists');
    return null;
  }
  const newProduct = { id: v4(), name, email, phone };
  await fs.writeFile(contactsPath, JSON.stringify([...products, newProduct]));
}
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
