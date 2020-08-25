  
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = []
  this.currentId = 0;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}



AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// addressBook.updateContact(1, 0, 0, 555-666-1212)
// addressBook.updateContact(1, Ada, Lovelace, 555-666-1212)
// addressBook.updateCOntact(1, property, info)

AddressBook.prototype.updateContact = function(id, first, last, number) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        if (first != "") {
          this.contacts[i].firstName = first;
        }
        if (last != "") {
          this.contacts[i].lastName = last;
        }
        if (number != "") {
          this.contacts[i].phoneNumber = number;
        }
      }
    }
  }
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email, address) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
  this.email = email;
  this.address = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  });
});