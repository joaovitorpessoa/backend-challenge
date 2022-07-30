import InvalidField from "@features/faq/usecases/create-question/errors/invalid-field";
import { SUBJECT_MAX_LENGTH } from "./validators.const";

function validateSubject(subject: string) {
  const errors = [];

  if (subject.length > SUBJECT_MAX_LENGTH) {
    errors.push(
      new InvalidField(
        "subject",
        `subject exceeds ${SUBJECT_MAX_LENGTH} characters`
      )
    );
  }

  return errors;
}

export default validateSubject;
