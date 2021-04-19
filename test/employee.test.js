const employee = require("../lib/employee");

test ("Can instantiate Employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});