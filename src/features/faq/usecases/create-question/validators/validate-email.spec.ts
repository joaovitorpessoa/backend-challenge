import InvalidField from "../../../errors/invalid-field";
import validateEmail from "./validate-email";

describe("validateEmail", () => {
  it("SHOULD return an array with invalid field error", () => {
    const email = "Jo@aslkxcn@o.com";
    const expected = [new InvalidField("email")];

    const errors = validateEmail(email);

    expect(errors.length).toBe(expected.length);
    expect(errors[0]).toMatchObject(expected[0]);
  });

  it("SHOULD return an empty errors array", () => {
    const email = "joaovitorpessoa81@gmail.com";
    const expected = [];

    const errors = validateEmail(email);

    expect(errors.length).toBe(expected.length);
  });
});
