import { Formik } from "formik";
import { FormLayout } from "../../../Form/FormLayout";
import { FormField } from "../../../Form/FormField";
import { Input } from "antd";
import { EmailField } from "../../../Form/EmailField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";
import { useLazyContactPartnerQuery } from "../../../../app/api/partners";
import { useState } from "react";
import { Checkbox } from "../../../Checkbox";

export const PartnerContactForm = () => {
  const [onAdd, { isSuccess, isError, isLoading }] =
    useLazyContactPartnerQuery();
  const [isAgree, setIsAgree] = useState(false);
  const onSubmit = async (value) => {
    if (isAgree) {
      await onAdd({ ...value });
    }
  };
  return (
    <Formik
      initialValues={{
        initials: "",
        message: "",
        email: "",
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
        <FormLayout
          isSuccess={isSuccess}
          isError={isError}
          onSubmit={handleSubmit}
        >
          <>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Имя Фамилия"
              fieldName="name"
            >
              <Input
                type="text"
                name="name"
                className="placeholder:text-white50"
                placeholder="Имя Фамилия"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </FormField>
            <EmailField
              emailFieldProps={{
                placeholder: "example@mail.com",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.email,
                required: true,
              }}
              fieldProps={{
                errors,
                touched,
                fieldLabel: "Почта",
                fieldName: "email",
              }}
            />

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Сообщение"
              fieldName="message"
            >
              <textarea
                type="text"
                name="message"
                placeholder="Напишите, что вас интересует..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
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
              <SubmitButton
                isLoading={isLoading}
                text="Отправить"
                loadingText="Заявка отправляется ..."
              />

              <div className={styles.applyText}>
                Нажимая кнопку «Отправить», вы принимаете
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
