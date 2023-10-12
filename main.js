class Person {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

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
console.log(firstMusician);
firstMusician.updateEmail('newEmail@mail.com');
console.log(firstMusician);

// subscriber

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
