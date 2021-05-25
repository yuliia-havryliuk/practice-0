import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import style from './LogIn.module.css';
import * as Yup from 'yup';

const LogIn = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
          .min(8, 'Password is too short - should be 8 characters minimum.')
          .max(20, 'Must be 20 characters or less')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        checkbox: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You should accept the licence'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      <Form className={style.form}>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          className={style.field}
          placeholder="youremail@gmail.com"
        />
        <ErrorMessage name="email" component="div" className={style.error} />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          type="password"
          className={style.field}
          placeholder="* * * * * * * *"
        />
        <ErrorMessage name="password" component="div" className={style.error} />
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default LogIn;
