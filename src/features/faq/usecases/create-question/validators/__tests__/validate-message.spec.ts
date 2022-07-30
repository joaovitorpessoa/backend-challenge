import InvalidField from "../../errors/invalid-field";
import validateMessage from "../validate-message";
import { MESSAGE_MAX_LENGTH } from "../validators.const";

describe("validateMessage", () => {
  it("SHOULD return an array with invalid field error", () => {
    const message = "Some giant message".repeat(100);
    const expected = [
      new InvalidField(
        "message",
        `message exceeds ${MESSAGE_MAX_LENGTH} characters`
      ),
    ];

    const errors = validateMessage(message);

    expect(errors.length).toBe(expected.length);
    expect(errors[0]).toMatchObject(expected[0]);
  });

  it("SHOULD return an empty errors array", () => {
    const subject = "A valid message";
    const expected = [];

    const errors = validateMessage(subject);

    expect(errors.length).toBe(expected.length);
  });
});
