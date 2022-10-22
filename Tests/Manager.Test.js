const Manager  = require(library/Manager.js)
const manager = new Manager('damian', '0000', 'damian@gmail.com', '123');

test('test to get values from new employee', () => {
    expect(manager.name).toBe('Damian');
    expect(manager.id).toBe('0000');
    expect(manger.email).toBe('damian@gmail.com');
    expect(manger.officeNumber).toBe('123');
});

test('getName() method', () => {
    expect(manager.getName()).toBe('Damian');
});

test('getId() method', () => {ß
    expect(manager.getId()).toBe('0000');
});

test('getEmail() method', () => {
    expect(manager.email()).toBe('Damian@gmail.com');
});

test('getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123')
});