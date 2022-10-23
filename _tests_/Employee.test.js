const Employee = require("../lib/Employee.js")
const employee = new Employee('Damian', '0000', 'damian@gmail.com');

test('test to get values from new employee', () => {
    expect(employee.name).toBe('Damian');
    expect(employee.id).toBe('0000');
    expect(employee.email).toBe('damian@gmail.com');
});

test('getName() method', () => {
    expect(employee.getName()).toBe('Damian');
});

test('getId() method', () => {
    expect(employee.getId()).toBe('0000');
});

test('getEmail() method', () => {
    expect(employee.getEmail()).toBe('damian@gmail.com');
});

test('getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});