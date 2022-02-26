import React from "react";
import { Formik, Form, Field, ErrorMessage, connect } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const NewForm = (props) => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNo: ["", ""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data: ", values);
    console.log("submiting props", onSubmitProps);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*field is mandatory"),
    email: Yup.string()
      .email("*Invalid Format")
      .required("*field is mandatory"),
    channel: Yup.string().required("*field is mandatory"),
  });

  return (
    <div className=" flex flex-col items-center mt-5  ">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        // validateOnChange={false}
      >
        {(formik) => {
          console.log("formik props", formik);

          return (
            <Form className="p-10 border m-5 w-1/2 rounded-2xl shadow-lg bg-slate-200  ">
              <div className="p-3 w-full relative">
                <label className="block font-bold" htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="hover:bg-blue-200 rounded-md w-full p-1 outline-none"
                  placeholder="Full Name"
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className=" w-full p-3  relative">
                <label className="block font-bold" htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter E-mail"
                  className="hover:bg-blue-200 rounded-md p-1 w-full outline-none "
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className=" p-3 w-full relative ">
                <label className="block font-bold " htmlFor="channel">
                  Channel
                </label>
                <Field
                  type="text"
                  id="channel"
                  name="channel"
                  className="hover:bg-blue-200 rounded-md w-full p-1 outline-none"
                  placeholder="Channel"
                />
                <ErrorMessage name="channel" component={TextError} />
              </div>
              <div className=" p-3  w-full">
                <label htmlFor="comment" className="block font-bold">
                  Comment
                </label>
                <Field
                  as="textarea"
                  name="comment"
                  id="comment"
                  className="hover:bg-blue-200 rounded-md p-1 h-16 w-full overflow-auto resize-none outline-none"
                />
                <ErrorMessage name="comment" />
              </div>
              <div className="p-3 w-full">
                <label htmlFor="facebook" className="block font-bold">
                  Facebook
                </label>
                <Field
                  type="text"
                  id="facebook"
                  name="social.facebook"
                  className="hover:bg-blue-200 rounded-md w-3/5 p-1 outline-none"
                />
              </div>

              <div className="p-3 w-ful">
                <label htmlFor="twitter" className="block font-bold">
                  Twitter
                </label>
                <Field
                  type="text"
                  id="twitter"
                  name="social.twitter"
                  className="hover:bg-blue-200 w-3/5 rounded-md p-1 outline-none"
                />
              </div>
              <div className="p-3 w-full">
                <label htmlFor="ph-primary" className="block font-bold">
                  primary phone Number
                </label>
                <Field
                  type="text"
                  id="ph-primary"
                  name="phoneNo[0]"
                  className="hover:bg-blue-200 w-1/2 rounded-md p-1 outline-none"
                />
              </div>
              <div className="p-3 w-full">
                <label htmlFor="optional-ph" className="block font-bold">
                  optional phone number
                </label>
                <Field
                  type="text"
                  id="twitter"
                  name="phoneNo[1]"
                  className="hover:bg-blue-200 w-1/2 rounded-md p-1 outline-none"
                />
              </div>
              <div className="flex flex-col items-center ">
                <button
                  type="button"
                  onClick={formik.resetForm}
                  className="px-5   py-1.5 font-bold text-slate-600 rounded-md ring-2 ring-slate-600  bg-transparent  hover:text-white hover:bg-slate-600 "
                >
                  Reset
                </button>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="px-4 py-2 font-bold  text-white rounded-md ml-10 bg-slate-600 shadow-md disabled:bg-slate-400 disabled:shadow-inner hover:bg-slate-700 "
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewForm;
