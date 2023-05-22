import solution from '../tasks/11/11.js';


const phonebook = [
  {"name":"Alex Bowman","number":"48-2002"},
  {"name":"Aric Almirola","number":"16-1001"},
  {"name":"Bubba Wallace","number":"23-1111"},
  {"name":"Chase Elliott","number":"9-9900"},
  {"name":"Denny Hamlin","number":"11-0022"},
  {"name":"John Logano","number":"22-2299"},
  {"name":"Kevin Harvick","number":"4-1154"},
  {"name":"Kyle Busch","number":"18-3002"},
  {"name":"Kyle Larson","number":"5-2234"},
  {"name":"Matt Dibenedetto","number":"21-1102"}
]
describe('task 11 test', () => {
  it('findNumberByName empty collection', async () => {
    const actual = await solution([], 'None');
    expect(actual).equal('Phonebook is empty!');
  });

  it('findNumberByName non-exist name', async () => {
    const actual1 = await solution(phonebook, 'None');
    expect(actual1).equal('Name not found!');
  });

  const tests = [
    ['Denny Hamlin', '11-0022'],
    ['Chase Elliott', '9-9900'],
    ['Alex Bowman', '48-2002'],
    ['Matt Dibenedetto', '21-1102'],
    ['Kyle Larson', '5-2234'],
  ]
  tests.forEach( () => it('%s -> %s', async (name, number) => {
    const actual = await solution(phonebook, name);
    expect(actual).equal(number);
  }));

  it('findNumberByName searching2', async () => {
    const actual = await solution(phonebook.slice(0, 2), 'Aric Almirola');
    expect(actual).equal('16-1001');
  });
})

