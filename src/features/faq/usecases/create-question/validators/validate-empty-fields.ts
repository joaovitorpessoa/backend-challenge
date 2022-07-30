import InvalidField from "../errors/invalid-field";

function validateEmptyFields(data: object, requiredFields: string[]) {
  const errors = [];

  requiredFields.forEach((field) => {
    const isDataFieldEmpty = !data[field];
    if (isDataFieldEmpty) {
      errors.push(new InvalidField(field, "empty required field"));
    }
  });

  return errors;
}

export default validateEmptyFields;
