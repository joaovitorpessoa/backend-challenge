import HttpError from "@shared/errors/http-error";
import InvalidField from "./invalid-field";

class InvalidQuestion extends HttpError {
  constructor(errors: InvalidField[]) {
    super("invalid question", errors);
  }
}

export default InvalidQuestion;
