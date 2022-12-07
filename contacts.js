const fs = require('fs');
const path = require('node:path').posix;
const contactsPath = path.posix.format({ base: 'db/contacts.json' });

function listContacts() {
  fs.readFile(contactsPath, 'utf8', function (err, data) {
    // Display the file content
    console.log(data);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', function (error, data) {
    // Display the file content
    // data.forEach((element) => {
    // console.log(element);
    // });
    if (error) throw error;
    else {
      const content = data;
      processFile(content, contactId);  
      console.log(data[0]);
    }

    // data.find((el) => el.id === contactId);
  });
}
function processFile(content, contactId) {
  console.log(content);
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
