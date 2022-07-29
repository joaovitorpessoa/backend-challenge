import InvalidField from "../../../errors/invalid-field";
import validateName from "./validate-name";
import { NAME_MAX_LENGTH } from "./validators.const";

describe("validateName", () => {
  it("SHOULD return an array with invalid field error", () => {
    const name = "Jo@o";
    const expected = [new InvalidField("name")];

    const errors = validateName(name);

    expect(errors.length).toBe(expected.length);
    expect(errors[0]).toMatchObject(expected[0]);
  });

  it("SHOULD return an empty errors array", () => {
    const name = "João Vitor";
    const expected = [];

    const errors = validateName(name);

    expect(errors.length).toBe(expected.length);
  });

  it("SHOULD return an array with error of max length", () => {
    const name = "João Vitor Velho Pessoa";
    const expected = new InvalidField(
      "name",
      `name exceeds ${NAME_MAX_LENGTH} characters`
    );

    const errors = validateName(name);

    expect(errors[0]).toMatchObject(expected);
    expect(errors.length).toBe(1);
  });

  it("SHOULD return an array with 2 errors", () => {
    const name = "Invalid name 21093 @.com";

    const expected = [
      new InvalidField("name", `name exceeds ${NAME_MAX_LENGTH} characters`),
      new InvalidField("name"),
    ];

    const errors = validateName(name);

    expect(errors[0]).toMatchObject(expected[0]);
    expect(errors[1]).toMatchObject(expected[1]);
    expect(errors.length).toBe(2);
  });
});
