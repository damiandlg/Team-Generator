const Engineer  = require("../lib/Engineer.js")
const engineer = new Engineer('Damian', '0000', 'damian@gmail.com', 'damiandlg');

test('test to get values from new employee', () => {
    expect(engineer.name).toBe('Damian');
    expect(engineer.id).toBe('0000');
    expect(engineer.email).toBe('damian@gmail.com');
    expect(engineer.gitHub).toBe('damiandlg');
});

test('getName() method', () => {
    expect(engineer.getName()).toBe('Damian');
});

test('getId() method', () => {
    expect(engineer.getId()).toBe('0000');
});

test('getEmail() method', () => {
    expect(engineer.getEmail()).toBe('damian@gmail.com');
});

test('getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('getSchool() method', () => {
    expect(engineer.getGitHub()).toBe('damiandlg')
});