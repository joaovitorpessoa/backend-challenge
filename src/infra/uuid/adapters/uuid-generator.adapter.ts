import { v4 as uuidV4 } from "uuid";
import UuidGeneratorPort from "../uuid-generator.port";

class UuidGeneratorAdapter implements UuidGeneratorPort {
  get(): string {
    const id = uuidV4();
    return id;
  }
}

export default UuidGeneratorAdapter;
