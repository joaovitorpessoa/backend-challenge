import InvalidField from "@features/faq/errors/invalid-field";

const emailRgx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(email: string) {
  const errors = [];

  const isValidName = emailRgx.test(email);

  if (!email) {
    errors.push(new InvalidField("email", "empty field"));
  }

  if (!isValidName) {
    errors.push(new InvalidField("email"));
  }

  return errors;
}

export default validateEmail;
