import { Input } from "antd";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyUserRegistrationQuery } from "../../../../app/api/auth";
import { FormField } from "../../../Form/FormField";
import { FormLayout } from "../../../Form/FormLayout";
import { PasswordField } from "../../../Form/PasswordField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";

export const FirstStep = () => {
  const navigate = useNavigate();

  const [onSignUp, { data, isLoading, isError }] =
    useLazyUserRegistrationQuery();

  useEffect(() => {
    if (data && !isError) {
      navigate("/sign_up/second_step");
    }
  }, [data]);

  const onSubmit = async (value) => {
    await onSignUp(value);
  };
  return (
    <Formik
      initialValues={{
        initials: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      onSubmit={onSubmit}
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
        <FormLayout isSuccess={false} isError={isError} onSubmit={handleSubmit}>
          <>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="ФИО"
              fieldName="initials"
            >
              <Input
                className="placeholder:text-white50"
                type="text"
                name="initials"
                onChange={handleChange}
                placeholder="Иванов Иван Иванович"
                onBlur={handleBlur}
                value={values.participantCount}
                required
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Почта"
              fieldName="email"
            >
              <Input
                type="email"
                name="email"
                className="placeholder:text-white50"
                placeholder="example@mail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
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
                onChange={handleChange}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Повторите пароль"
              fieldName="repeatPassword"
            >
              <PasswordField
                name="repeatPassword"
                placeholder="Введите пароль еще раз"
                className="placeholder:text-white50"
                onChange={handleChange}
              />
            </FormField>

            <div className={styles.buttonWrapper}>
              <SubmitButton isLoading={isLoading} text="Далее" />
            </div>

            <div className="w-full flex justify-center mt-[3.2rem]">
              <div className="bg-white8 text-white px-[1.6rem] px=[0.8rem] rounded-full">
                Шаг 1 из 2
              </div>
            </div>
          </>
        </FormLayout>
      )}
    </Formik>
  );
};
