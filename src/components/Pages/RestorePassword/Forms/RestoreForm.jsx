import { Input } from "antd";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  useLazyRestorePasswordEmailQuery,
  useLazyRestorePasswordQuery,
} from "../../../../app/api/auth";
import { FormField } from "../../../Form/FormField";
import { FormLayout } from "../../../Form/FormLayout";
import { PasswordField } from "../../../Form/PasswordField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";

export const RestoreForm = () => {
  const navigate = useNavigate();
  const [restoreData, setRestoreData] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const [onRestore, { isError, isLoading, isSuccess }] =
    useLazyRestorePasswordEmailQuery();

  const [onRestorePassword, { isSuccess: restoreSuccess }] =
    useLazyRestorePasswordQuery();

  useEffect(() => {
    if (params.has("USER_CHECKWORD") && params.has("USER_LOGIN")) {
      setRestoreData({
        code: params.get("USER_CHECKWORD"),
        email: params.get("USER_LOGIN"),
      });
    }
  }, []);

  useEffect(() => {
    if (restoreSuccess) {
      navigate("/sign_in");
    }
  }, [restoreSuccess]);
  
  const onSubmit = async (value) => {
    if (restoreData) {
      await onRestorePassword({ password: value.password, ...restoreData });
      return;
    }
    await onRestore(value);
  };
  return (
    <Formik
      initialValues={{
        code: "",
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
            {!restoreData && (
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Почта"
                fieldName="email"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="placeholder:text-white50 text-white"
                  required
                />
                <div className="text-white  mt-[1.6rem] font-medium text-[1.6rem] leading-[2.2rem]">
                  <span>Знаете пароль? </span>
                  &nbsp;
                  <Link className="text-white50 underline" to="/sign_in">
                    Войти
                  </Link>
                </div>
              </FormField>
            )}

            {restoreData && (
              <>
                <FormField
                  errors={errors}
                  touched={touched}
                  fieldLabel="Почта"
                  fieldName="email"
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={restoreData.email ? restoreData.email : values.email}
                    className="placeholder:text-white50 text-white"
                    required
                  />
                </FormField>

                <FormField
                  errors={errors}
                  touched={touched}
                  fieldLabel="Код"
                  fieldName="code"
                >
                  <Input
                    type="text"
                    name="code"
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={restoreData.code ? restoreData.code : values.code}
                    className="placeholder:text-white50 text-white"
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
                </FormField>
              </>
            )}

            <div className={styles.buttonWrapper}>
              <SubmitButton isLoading={isLoading} />
            </div>
          </>
        </FormLayout>
      )}
    </Formik>
  );
};
