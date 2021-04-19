const employee = require("../lib/engineer");

test ("Can instantiate Employee instance", () => {
    const e = new employee();
    expect(typeof(e)).toBe("object");
});