// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test for isPhoneNumber
test('valid phone number 1', () => {
    expect(functions.isPhoneNumber('949-996-6868')).toBe(true);
});
test('valid phone number 2', () => {
    expect(functions.isPhoneNumber('323-404-6233')).toBe(true);
});
test('invalid phone number 1', () => {
    expect(functions.isPhoneNumber('134 8492 6743')).toBe(false);
});
test('invalid phone number 2', () => {
    expect(functions.isPhoneNumber('A16148226')).toBe(false);
});

// Test for isEmail
test('valid email 1', () => {
    expect(functions.isEmail('g2yang@ucsd.edu')).toBe(true);
});
test('valid email 2', () => {
    expect(functions.isEmail('jackyanggang@outlook.com')).toBe(true);
});
test('invalid email 1', () => {
    expect(functions.isEmail('A16148226')).toBe(false);
});
test('invalid email 2', () => {
    expect(functions.isEmail('g2yang@edu.ucsd')).toBe(false);
});

// Test for isStrongPassword
test('strong password 1', () => {
    expect(functions.isStrongPassword('Y_ng_1601')).toBe(true);
});
test('strong password 2', () => {
    expect(functions.isStrongPassword('jackyang0117')).toBe(true);
});
test('not strong password 1', () => {
    expect(functions.isStrongPassword('101')).toBe(false);
});
test('not strong password 2', () => {
    expect(functions.isStrongPassword('J@ck*!^)%')).toBe(false);
});

// Test for isDate
test('valid date 1', () => {
    expect(functions.isDate('1/17/2001')).toBe(true);
});
test('valid date 2', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});
test('invalid date 1', () => {
    expect(functions.isDate('2001/01/17')).toBe(false);
});
test('invalid date 2', () => {
    expect(functions.isDate('2001')).toBe(false);
});

// Test for isHexColor
test('valid Hex color 1', () => {
    expect(functions.isHexColor('#117')).toBe(true);
});
test('valid Hex color 2', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('invalid Hex color 1', () => {
    expect(functions.isHexColor('/FFF')).toBe(false);
});
test('invalid Hex color 2', () => {
    expect(functions.isHexColor('#FFFFFFF')).toBe(false);
});