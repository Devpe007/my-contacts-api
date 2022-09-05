const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '31231323',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  };
};

module.exports = new ContactsRepository();
