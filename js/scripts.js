function AddressBook() {
  this.contacts = [];
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.fullname = function() {
  return this.firstName + " " + this.lastName;
}