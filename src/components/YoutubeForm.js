import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const YoutubeForm = (props) => {
  const initialValues = {
    name: "mohsin",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data: ", values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Reqired";
    } else if (values.name.length > 15) {
      errors.name = "Name can't be more than 15 caracter";
    }
    if (!values.email) {
      errors.email = "Reqired";
    }
    if (!values.channel) {
      errors.channel = "Required";
    }
    return errors;
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("field is mandatory"),
    email: Yup.string().email("Invalid Format").required("field is mandatory"),
    channel: Yup.string().required("field is mandatory"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("errors", formik.errors);
  return (
    <div className=" flex flex-col items-center mt-5  ">
      <h1 className="text-slate-400 text-3xl font-bold">Youtube Form</h1>
      <form
        className="p-10 border m-5 rounded-2xl shadow-lg bg-slate-200 "
        onSubmit={formik.handleSubmit}
      >
        <div className=" p-3 w-fit">
          <label className="block font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="text-red-600 text-[10px]">
              *{formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className=" p-3 w-fit">
          <label className="block font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-600 text-[10px]">
              *{formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className=" p-3 w-fit">
          <label className="block font-bold " htmlFor="channel">
            Channel
          </label>
          <input
            type="text"
            id="channel"
            name="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? (
            <div className="text-red-600 text-[10px]">
              *{formik.errors.channel}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="px-4 py-2  text-white rounded-md ml-10 bg-slate-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
