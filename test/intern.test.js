const Intern = require("../lib/Intern");
const { TestScheduler } = require("jest");

test("sets school from constructor arguments", () => {
    const testValue = "UM";
    const e = new Intern("KOO", 100, "test@testez.com", testValue);
    expect(e.school).toBe(testValue);
})
test("gets school via getSchool()", () => {
    const testValue = "UM";
    const e = new Intern("KOO", 100, "test@testez.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})
test("getRole to return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("KOO", 100, "test@testez.com", testValue);
    expect(e.getRole()).toBe(testValue);
});