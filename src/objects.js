const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(e => e.age);
};

const findByName = (name, people) => {
  return people.find(e => e.name === name);
};

const findHondas = cars => {
  return cars.filter(e => e.manufacturer === "Honda");
};

const averageAge = people => {
  const ages = people.map(e => {return e.age});
  return ages.reduce((totalAge, currentValue) => totalAge + currentValue, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
