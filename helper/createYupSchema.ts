import * as Yup from "yup";

const createYupSchema = <T extends object>(schema: Yup.ObjectSchema<T>) =>
  schema;

export default createYupSchema;
