import InvalidField from "../errors/invalid-field";
import { NAME_MAX_LENGTH } from "./validators.const";

const nameRgx =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

function validateName(name: string) {
  const errors = [];

  if (name.length > NAME_MAX_LENGTH) {
    errors.push(
      new InvalidField("name", `name exceeds ${NAME_MAX_LENGTH} characters`)
    );
  }

  if (!nameRgx.test(name)) {
    errors.push(new InvalidField("name"));
  }

  return errors;
}

export default validateName;
