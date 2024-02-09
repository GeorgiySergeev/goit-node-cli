const contacts = require('./contacts');
const { program } = require('commander');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsList = await contacts.getAllContacts();

      break;

    case 'get':
      const contactById = await contacts.getContactById(id);

      break;

    case 'add':
      const contactToAdd = await contacts.addContact({ name, email, phone });

      break;

    case 'remove':
      const remove = await contacts.removeContact(id);

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
