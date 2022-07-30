class InvalidField {
  public description: string;
  public field: string;

  constructor(field: string, description = "") {
    this.field = field;
    this.description = description || "invalid field";
  }
}

export default InvalidField;
