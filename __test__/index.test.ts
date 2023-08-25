import { hasDuplicates } from "../src/lib";

describe("hasDuplicates", () => {
  it("should return false if no duplicates in clientValues or serverValues", () => {
    const serverValues = ["hello", "world"];
    const clientValues = ["goodbye", "earth"];
    const output = hasDuplicates(serverValues, clientValues);
    const expected = false;
    expect(output).toBe(expected);
  });
  it("should return true if has duplicates in client", () => {
    const serverValues = ["hello", "world"];
    const clientValues = ["hello", "hello"];
    const output = hasDuplicates(serverValues, clientValues);
    const expected = true;
    expect(output).toBe(expected);
  });
  it("should return true if duplicate values in server", () => {
    const serverValues = ["world", "world"];
    const clientValues = ["hello", "world"];
    const output = hasDuplicates(serverValues, clientValues);
    const expected = true;
    expect(output).toBe(expected);
  });
  it("should return true if same value appears in client and server", () => {
    const serverValues = ["hello", "earth"];
    const clientValues = ["hello", "world"];
    const output = hasDuplicates(serverValues, clientValues);
    const expected = true;
    expect(output).toBe(expected);
  });
});
