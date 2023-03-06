import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Formik } from "formik";
import { useLazyAddPartnerQuery } from "../../../../app/api/partnerApi";
import { FormLayout } from "../../../Form/FormLayout";
import { FormField } from "../../../Form/FormField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";
import { PasswordField } from "../../../Form/PasswordField";

export const SignInForm = () => {
  const [onAdd, { isSuccess, isError, isLoading }] = useLazyAddPartnerQuery();

  const onSubmit = async (value) => {
    await onAdd({ ...value });
  };
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      onSubmit={onSubmit}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.fmp) {
      //     errors.eventName = "*Поле обязаятельно к заполнению";
      //   }
      //   if (!values.eventFormat) {
      //     errors.eventFormat = "*Поле обязаятельно к заполнению";
      //   }
      //   if (!values.eventFormat) {
      //     errors.eventFormat = "*Поле обязаятельно к заполнению";
      //   }
      //   return errors;
      // }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormLayout
          isSuccess={isSuccess}
          isError={isError}
          onSubmit={handleSubmit}
        >
          <>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Почта*"
              fieldName="email"
            >
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Пароль"
              fieldName="password"
            >
              <PasswordField
                name="password"
                className="placeholder:text-white50"
                value={values.password}
                onChange={handleChange}
              />
              <div className={styles.hintText}>
                <span>Забыли пароль?</span>
                &nbsp;
                <Link className="text-white50" to="/restore_password">
                  Восстановить
                </Link>
              </div>
            </FormField>

            <div className={styles.buttonWrapper}>
              <SubmitButton isLoading={isLoading} text="Войти" />
            </div>
          </>
        </FormLayout>
      )}
    </Formik>
  );
};
