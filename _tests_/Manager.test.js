const Manager  = require("../lib/Manager.js")
const manager = new Manager('Damian', '0000', 'damian@gmail.com', '123');

test('test to get values from new employee', () => {
    expect(manager.name).toBe('Damian');
    expect(manager.id).toBe('0000');
    expect(manager.email).toBe('damian@gmail.com');
    expect(manager.number).toBe('123');
});

test('getName() method', () => {
    expect(manager.getName()).toBe('Damian');
});

test('getId() method', () => {
    expect(manager.getId()).toBe('0000');
});

test('getEmail() method', () => {
    expect(manager.getEmail()).toBe('damian@gmail.com');
});

test('getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('getNumber() method', () => {
    expect(manager.getNumber()).toBe('123');
});