import * as yup from "yup";

export const teacherSchema = yup.object().shape({
  image: yup.string().required("writee!!").url("must be url!!"),
  name: yup.string().required("writee!!"),
  work: yup.string().required("writee!!"),
  description: yup.string().required("writee!!"),
});
