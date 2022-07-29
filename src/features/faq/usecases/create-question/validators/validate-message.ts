import InvalidField from "@features/faq/errors/invalid-field";
import { MESSAGE_MAX_LENGTH } from "./validators.const";

function validateMessage(message: string) {
  const errors = [];

  if (message.length > MESSAGE_MAX_LENGTH) {
    errors.push(
      new InvalidField(
        "message",
        `message exceeds ${MESSAGE_MAX_LENGTH} characters`
      )
    );
  }

  return errors;
}

export default validateMessage;
