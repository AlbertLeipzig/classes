class Person {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get _mail() {
    return this.email;
  }
  set _mail(newEmail) {
    this.email = newEmail;
  }
  updateEmail(newEmail) {
    this.email = newEmail;
  }
  get printEmail() {
    console.log(this.email);
  }

  set formattedName(name) {
    firstName = name.trim().toLowerCase();
  }
}

const printUser = (user) => console.log(user);

const person1 = new Person('alskdja', 'Anna', 'Fuchs', 'asdlkjh@mail.com');

console.count();
person1.printEmail;

console.count();
person1.updateEmail('newemail@mail.com');
person1.printEmail;

person1._mail = 'secondmakil@mail.com';
console.count();
person1.printEmail;

/*
const person2 = {
    first_name : "Berta",
    lastName : "Schäffer",
    address : {
        street : "Main Street",
        number : 456,
        city : "Frankfurt"
    }
} */

/* person2.address.street */

/* person1.address.split("|") */

// musician, ""

class Musician extends Person {
  constructor(title, label, instruments, genre, socialMedia, ...args) {
    super(...args);
    this.title = title;
    this.label = label;
    this.instruments = instruments;
    this.genre = genre;
    this.socialMedia = socialMedia;
  }
}

const firstMusician = new Musician(
  'Anthony',
  'alskdfjhasdf',
  'Mark',
  'profi',
  '',
  ['gesang', 'guitar'],
  ['funk'],
  ['ma@soundclong.com']
);
/* console.log(firstMusician);
firstMusician.updateEmail('newEmail@mail.com');
console.log(firstMusician) */ // subscriber

class Subscriber extends Person {
  constructor(age, gender, occupied, address) {
    this.age = age;
    this.gender = gender;
    this.occupied = occupied;
    this.address = address;
  }
}

// author

class Author extends Person {
  constructor(articles) {
    this.articles = articles;
  }
}

/* 
const subscriber = {
  id: '',
  age: 0,
  gender: '',
  occupied: '',
  email: '',
  firstName: '',
  lastName: '',
  address: '',
}; 

const author = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  articles: '',
};

*/

/* 

const firstMusician = new Musician(
  'alskdfjhasdf',
  'Mark',
  'Anthony',
  'profi',
  '',
  ['gesang', 'guitar'],
  ['funk'],
  ['ma@soundclong.com']
);
const secondMusician = new Musician(
  'sldkfjgsdlfgjh',
  'W.A.',
  'Mozart',
  'profi',
  '',
  ['klavier'],
  ['klassik'],
  ['wam@soundclong.com']
);
*/
