import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(8),
});

const initialValues = {
  email: "",
  password: "",
};

export const RegistrationForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" />
          <ErrorMessage name="password" />
        </div>
      </Form>
    </Formik>
  );
};
