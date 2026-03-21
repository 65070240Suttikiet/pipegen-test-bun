import { describe, test, expect } from "bun:test";

describe("Math", () => {
  test("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("2 * 3 = 6", () => {
    expect(2 * 3).toBe(6);
  });
});

describe("String", () => {
  test("hello world", () => {
    expect("hello" + " " + "world").toBe("hello world");
  });
});