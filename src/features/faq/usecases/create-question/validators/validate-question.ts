import CreateQuestion from "@features/faq/interfaces/create-question";
import validateEmail from "./validate-email";
import validateMessage from "./validate-message";
import validateName from "./validate-name";
import validatePhone from "./validate-phone";
import validateSubject from "./validate-subject";
import validateEmptyFields from "./validate-empty-fields";

function validateQuestion(data: CreateQuestion) {
  const errors = [];

  const validate = {
    email: (email: string) => validateEmail(email),
    message: (message: string) => validateMessage(message),
    name: (name: string) => validateName(name),
    subject: (subject: string) => validateSubject(subject),
    phone: (phone: string) => validatePhone(phone),
  };

  const fields = Object.keys(validate);

  const requiredFields = ["email", "message", "name", "subject", "phone"];
  const emptyFieldsErrors = validateEmptyFields(data, requiredFields);

  if (emptyFieldsErrors.length) {
    errors.push(...emptyFieldsErrors);
  } else {
    fields.forEach((field) => {
      const validator = validate[field];
      if (validator) {
        const validatorErrors = validator(data[field]);
        errors.push(...validatorErrors);
      }
    });
  }

  return errors;
}

export default validateQuestion;
