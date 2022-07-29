import InvalidField from "../../../errors/invalid-field";
import validateSubject from "./validate-subject";
import { SUBJECT_MAX_LENGTH } from "./validators.const";

describe("validateSubject", () => {
  it("SHOULD return an array with invalid field error", () => {
    const subject = "Some giant subject".repeat(10);
    const expected = [
      new InvalidField(
        "subject",
        `subject exceeds ${SUBJECT_MAX_LENGTH} characters`
      ),
    ];

    const errors = validateSubject(subject);

    expect(errors.length).toBe(expected.length);
    expect(errors[0]).toMatchObject(expected[0]);
  });

  it("SHOULD return an empty errors array", () => {
    const subject = "A valid subject";
    const expected = [];

    const errors = validateSubject(subject);

    expect(errors.length).toBe(expected.length);
  });
});
