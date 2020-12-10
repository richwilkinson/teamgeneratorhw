const engineer = require("../lib/Engineer");
const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

test("sets github account via constructor arguments", () => {
    const testValue = "GitHubMan";
    const e = new Engineer("POO", 100, "test@testez.com", testValue);
    expect(e.github).toBe(testValue);
})
test("gets github username via getGithub()", () => {
    const testValue = "githubuser";
    const e = new Engineer("POO", 100, "test@testez.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})
test("gets role from getRole()", () => {
    const testValue = "Engineer";
    const e = new Engineer("POO", 100, "test@testez.com", testValue);
    expect(e.getRole()).toBe(testValue);
})
