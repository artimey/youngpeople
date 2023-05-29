import { Input } from "antd";
import { Formik } from "formik";
import { PatternFormat } from "react-number-format";
import { FormField } from "../../../../Form/FormField";
import { FormLayout } from "../../../../Form/FormLayout";
import { SubmitButton } from "../../../../Form/SubmitButton";
import FormHeader from "../../FormHeader";
import { useLazyPartnerUpdateQuery} from "../../../../../app/api/auth";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

export const UpdatePartnerForm = ({ onClose }) => {
  const { person } = useSelector((s) => s);

  const [onUpdate, { isSuccess, isError, isLoading }] =
  useLazyPartnerUpdateQuery();

  const onSubmit = async (value) => {
    await onUpdate({
      ...value,
      userId: person.userId,
      apiKey: person.apiKey,
    });
    onClose();
  };

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          organizationName: "",
          email: "",
          phoneNumber: "",
          address: "",
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
              <FormHeader head="Ваши данные" />
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
                />
              </FormField>

              {/* <FormField
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
              </FormField> */}

              <div className={styles.buttonWrapper}>
                <SubmitButton isLoading={isLoading} text="Сохранить" />
              </div>
            </>
          </FormLayout>
        )}
      </Formik>
    </div>
  );
};
