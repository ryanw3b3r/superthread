import { reactive } from "vue";

const genId = () => Math.random().toString(16).substring(2, 8);

export const store = reactive({
  current: null,
  contacts: [],

  saveContact() {
    if (this.current.id) {
      this.contacts.forEach((contact, index) => {
        this.contacts[index] =
          contact.id == this.current.id ? this.current : contact;
      });
    } else {
      this.contacts.push({
        id: genId(),
        firstName: this.current.firstName,
        lastName: this.current.lastName,
        phone: this.current.phone,
      });
    }
  },

  deleteContact() {
    this.contacts = this.contacts.filter(
      (contact) => contact.id !== this.current.id
    );
  },

  resetCurrent() {
    this.current = null;
  },

  setCurrent(contact) {
    this.current = contact;
  },

  getCurrent() {
    return this.current;
  },
});
