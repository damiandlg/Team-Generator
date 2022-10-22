const { exportAllDeclaration } = require("library/Employee.js");
const { default: test } = require("node:test");

const Employee = require(library/Employee.js)
const employee = new Employee('damian', '0000', 'damian@gmail.com');

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
    expect(employee.email()).toBe('Damian@gmail.com');
});

test('getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});