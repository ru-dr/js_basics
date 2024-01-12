// Play.test.js
const { testFunc } = require("./Play");

describe("testFunc", () => {
  test("Test Case 1", () => {
    expect(testFunc(1, 2)).toBe(2);
  });

  test("Test Case 2", () => {
    expect(testFunc(1)).toBe(1);
  });

  test("Test Case 3", () => {
    expect(testFunc()).toBe(0);
  });

  test("Test Case 4", () => {
    expect(testFunc(5, 10, 15, 20)).toBe(4);
  });

  test("Test Case 5", () => {
    expect(testFunc("a", "b", "c")).toBe(3);
  });

  test("Test Case 6", () => {
    expect(testFunc(null, undefined, false)).toBe(3);
  });
});
