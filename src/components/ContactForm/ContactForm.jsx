import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const contactScheme = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("This is a required field"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("This is a required field"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactScheme}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage name="name" className={css.error} component="div" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="number">Number:</label>
          <Field className={css.field} type="text" name="number" />
          <ErrorMessage name="number" className={css.error} component="div" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;