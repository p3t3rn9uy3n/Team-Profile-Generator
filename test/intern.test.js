const employee = require("../lib/intern");

test ("Can instantiate Employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});