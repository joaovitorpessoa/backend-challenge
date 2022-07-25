import test from "./index";

describe("test", () => {
  it("SHOULD pass", () => {
    expect(test.a).toBe(10);
  });
  it("SHOULD pass", () => {
    expect(test.a).not.toBe(11);
  });
});
