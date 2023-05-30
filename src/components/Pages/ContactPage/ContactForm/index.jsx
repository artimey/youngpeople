import { Formik } from "formik";
import styles from "./styles.module.scss";
import { FormLayout } from "../../../Form/FormLayout";
import { FormField } from "../../../Form/FormField";
import { Input } from "antd";
import { EmailField } from "../../../Form/EmailField";
import { SubmitButton } from "../../../Form/SubmitButton";
import { useLazyContactUsQuery } from "../../../../app/api/contact";
export const ContactForm = () => {
  const [handleContact, { isSuccess, isError, isLoading }] =
    useLazyContactUsQuery();
  const onSubmit = async (values) => {
    const body = {
      ...values,
    };
    handleContact(body);
  };
  return (
    <Formik
      initialValues={{
        message: "",
        email: "",
        name: "",
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
        <FormLayout
          onSubmit={handleSubmit}
          isError={isError}
          isSuccess={isSuccess}
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
