const Engineer = require('.../lib/Engineer');
const { default: test } = require('node:test');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'BrentTheBeast');

    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'BrentTheBeast');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Brent Peterson', 90, 'BrentPeterson@gmail.com', 'BrentTheBeast');

    expect(engineer.getRole()).toEqual("Engineer");
});