const manager = require("../lib/manager");
const employee = require("../lib/manager");

test ("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new manager("Test", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe("testValue");
});