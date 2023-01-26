import React from "react";
import { useFormik } from "formik";
import "./index.scss";
import { teacherSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../redux/slice/dataSlice";
import { Helmet } from "react-helmet";
const AddCourse = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } = useFormik({
    initialValues: {
      image: "",
      name: "",
      work: "",
      description: "",
    },
    validationSchema: teacherSchema,
    onSubmit: (values) => {
      dispatch(postData(values));
      resetForm()
    },
  });
  return (
    <div id="add-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
      <div className="container">
        <div className="add-page">
          <h1>Add Teacher</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Image"
                  onChange={handleChange}
                  value={values.image}
                />
                {errors.image && touched.image && (
                  <p className="error">{errors.image}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div className="input">
                <input
                  id="work"
                  name="work"
                  type="text"
                  placeholder="Work"
                  onChange={handleChange}
                  value={values.work}
                />
                {errors.work && touched.work && (
                  <p className="error">{errors.work}</p>
                )}
              </div>

              <div className="input">
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  onChange={handleChange}
                  value={values.description}
                />
                {errors.description && touched.description && (
                  <p className="error">{errors.description}</p>
                )}
              </div>

              <div className="btn">
                <button type="submit">Add Teacher</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
