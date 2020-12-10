const Employee = require("../lib/Employee");

test("Initiate Employee addition", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("set name via constructor arguments", () => {
    const name = "Kojo";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("set id via constructor arguments", () => {
    const testValue = 311;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("sets email via constructor argument", () => {
    const testValue = "test@testez.com";
    const e = new Employee("DOO", 100, testValue);
    expect(e.email).toBe(testValue);
});

test("gets name from getName()", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("gets id from getId()", () => {
    const testValue = 100;
    const e = new Employee("DOO", testValue);
    expect(e.getId()).toBe(testValue);
});

test("gets email from getEmail()", () => {
    const testValue = "test@testez.com";
    const e = new Employee("DOO", 100, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@testez.com");
    expect(e.getRole()).toBe(testValue);
});

