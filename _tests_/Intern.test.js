const Intern  = require("../lib/Intern.js")
const intern = new Intern('Damian', '0000', 'damian@gmail.com', 'Suffolk');

test('test to get values from new employee', () => {
    expect(intern.name).toBe('Damian');
    expect(intern.id).toBe('0000');
    expect(intern.email).toBe('damian@gmail.com');
    expect(intern.school).toBe('Suffolk');
});

test('getName() method', () => {
    expect(intern.getName()).toBe('Damian');
});

test('getId() method', () => {
    expect(intern.getId()).toBe('0000');
});

test('getEmail() method', () => {
    expect(intern.getEmail()).toBe('damian@gmail.com');
});

test('getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('getSchool() method', () => {
    expect(intern.getSchool()).toBe('Suffolk')
});