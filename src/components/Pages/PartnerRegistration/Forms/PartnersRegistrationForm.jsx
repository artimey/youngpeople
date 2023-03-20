import { useState } from "react";
import { Input } from "antd";
import { Formik } from "formik";
import { useLazyPartnerRegistrationQuery} from "../../../../app/api/auth";
import { FormField } from "../../../Form/FormField";
import { FormLayout } from "../../../Form/FormLayout";
import { PasswordField } from "../../../Form/PasswordField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";
import { Checkbox } from "../../../Checkbox";
import { PatternFormat } from "react-number-format";

export const PartnersRegistrationForm = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [onSignUp, { data, isLoading, isError }] =
  useLazyPartnerRegistrationQuery();

  const onSubmit = async (value) => {
    await onSignUp(value);
  };
  return (
    <Formik
      initialValues={{
        organizationName: "",
        email: "",
        phoneNumber: "",
        address: "",
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
      }) => (
        <FormLayout isSuccess={false} isError={isError} onSubmit={handleSubmit}>
          <>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Название организации"
              fieldName="organizationName"
            >
              <Input
                className="placeholder:text-white50"
                type="text"
                name="organizationName"
                onChange={handleChange}
                placeholder="Правительство Москвы"
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
              fieldLabel="Контактный номер"
              fieldName="phoneNumber"
            >
              <PatternFormat
                format="+7 (###) ### ## ##"
                className="placeholder:text-white50"
                mask="_"
                type="phone"
                name="phoneNumber"
                placeholder={"+7 (999) 123-45-67"}
                onChange={handleChange}
                value={values.phoneNumber}
                required
              />
            </FormField>


            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Адрес"
              fieldName="address"
            >
              <Input
                type="text"
                name="address"
                className="placeholder:text-white50"
                placeholder="Укажите адрес организации"
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

            <div className={styles.checkboxWrapper}>
              <Checkbox checked={isAgree} onChange={setIsAgree} />
              <div className={styles.chekboxText}>
                Даю согласие на обработку&nbsp;
                <a href="" target="_blank" referrerPolicy="no-referrer">
                  персональных данных
                </a>
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <SubmitButton isLoading={isLoading} text="Зарегистрироваться" />

              <div className={styles.applyText}>
                Нажимая кнопку Зарегистрироваться, вы принимаете
                <br />
                <a
                  href="/docx/Политика_конфиденциальности_Молодежь_Москвы.pdf"
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  политику конфиденциальности
                </a>
              </div>
            </div>
          </>
        </FormLayout>
      )}
    </Formik>
  );
};
