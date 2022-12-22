const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'UCLA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'UCLA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'UCLA');

    expect(intern.getRole()).toEqual("Intern");
}); 