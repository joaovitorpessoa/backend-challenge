import InvalidField from "../errors/invalid-field";

const phoneRgx = /^[0-9]{9}$/;

function validatePhone(phone: string) {
  const errors = [];
  const isValidPhone = phoneRgx.test(phone);

  if (!isValidPhone) {
    errors.push(
      new InvalidField(
        "phone",
        "The phone number must contain only numbers and 9 digits"
      )
    );
  }

  return errors;
}

export default validatePhone;
