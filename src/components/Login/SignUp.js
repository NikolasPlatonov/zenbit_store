import React from 'react';
import { Formik, Field, Form } from 'formik';
import BasicFormSchema from './BasicFormSchema';
import s from './SignUp.module.css';

const SignUp = () => (
  <div className={s.container}>
    <div>
      <h1>Sign up</h1>
    </div>
    <div>
      <Formik
        //инициализируем значения input-ов
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        //подключаем схему валидации, которую описали выше
        validationSchema={BasicFormSchema}
        //определяем, что будет происходить при вызове onsubmit
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
        //свойство, где описывыем нашу форму
        //errors-ошибки валидации формы
        //touched-поля формы, которые мы "затронули",
        //то есть, в которых что-то ввели
        render={({ errors, touched }) => (
          <Form className={s.form_container}>
            <div className={s.form_item}>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="Enter e-mail..." type="email" />
              {
                //если в этом поле возникла ошибка и
                //если это поле "затронуто, то выводим ошибку
                errors.email && touched.email && (
                  <div className={s.field_error}>{errors.email}</div>
                )
              }
            </div>

            <div className={s.form_item}>
              <label htmlFor="username">Username</label>
              <Field
                name="username"
                placeholder="Enter user name..."
                type="text"
              />
              {errors.username && touched.username && (
                <div className={s.field_error}>{errors.username}</div>
              )}
            </div>
            <div className={s.form_item}>
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                placeholder="Enter password..."
                type="password"
              />
              {errors.password && touched.password && (
                <div className={s.field_error}>{errors.password}</div>
              )}
            </div>

            <div className={s.btn_container}>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      />
    </div>
  </div>
);

export default SignUp;
