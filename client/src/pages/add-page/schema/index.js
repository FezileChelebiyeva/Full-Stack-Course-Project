import * as yup from "yup";

export const teacherSchema = yup.object().shape({
  image: yup
    .string()
    .required("Please enter an image url!")
    .url("must be url!!"),
  name: yup.string().required("Please enter a name!"),
  work: yup.string().required("Please enter a work!"),
  description: yup
    .string()
    .required("Please enter a description!")
    .min(80, "must be min 80 char"),
});
