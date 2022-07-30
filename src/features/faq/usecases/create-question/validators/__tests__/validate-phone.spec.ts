import InvalidField from "../../errors/invalid-field";
import validatePhone from "../validate-phone";

describe("validatePhone", () => {
  it("SHOULD return an array with invalid field error", () => {
    const phone = "A not phone number";
    const expected = [
      new InvalidField(
        "phone",
        "The phone number must contain only numbers and 9 digits"
      ),
    ];

    const errors = validatePhone(phone);

    expect(errors.length).toBe(expected.length);
    expect(errors[0]).toMatchObject(expected[0]);
  });

  it("SHOULD return an empty errors array", () => {
    const phone = "992110635";
    const expected = [];

    const errors = validatePhone(phone);

    expect(errors.length).toBe(expected.length);
  });
});
