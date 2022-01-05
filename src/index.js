export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * gen() {
    yield this.persons.shift();
  }
}
