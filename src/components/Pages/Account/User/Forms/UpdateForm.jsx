import { Input } from "antd";
import { Formik } from "formik";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { useGetFieldActivitiesQuery } from "../../../../../app/api/partners";
import { FormField } from "../../../../Form/FormField";
import { FormLayout } from "../../../../Form/FormLayout";
import { SubmitButton } from "../../../../Form/SubmitButton";
import { FormHeader } from "../../FormHeader";
import styles from "./styles.module.scss";
import { useLazyUserUpdateQuery } from "../../../../../app/api/auth";
import { useSelector } from "react-redux";
import { BirthdayField } from "../../../../Form/BirthdayField";
import { PhoneField } from "../../../../Form/PhoneField";
import { EmailField } from "../../../../Form/EmailField";

export const UpdateForm = ({ onClose }) => {
  const { data: institutions, isLoading: institutionsLoading } =
    useGetFieldActivitiesQuery();
  const { person } = useSelector((s) => s);

  const [onUpdate, { isSuccess, isError, isLoading }] =
    useLazyUserUpdateQuery();
  const [universityData, setUniversityData] = useState("");

  const onSubmit = async (value) => {
    await onUpdate({
      ...value,
      userId: person.userId,
      apiKey: person.apiKey,
    });
    onClose();
  };

  const handleUniversityChange = (value) => {
    setUniversityData(value);
  };
  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          initials: "",
          email: "",
          password: "",
          birthday: "",
          typeOfActivity: "",
          phoneNumber: "",
          nickName: "",
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
              {/* 
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Пароль"
                fieldName="password"
              ></FormField> */}

              <BirthdayField
                fieldProps={{
                  errors,
                  touched,
                  fieldLabel: "Дата Рождения",
                  fieldName: "birthday",
                }}
                birthdayField={{
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.birthday,
                  name: "birthday",
                }}
              />

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Род деятельности"
                fieldName="typeOfActivity"
              >
                <Input
                  type="text"
                  name="typeOfActivity"
                  className="placeholder:text-white50"
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.typeOfActivity}
                />
              </FormField>

              {/* {values.typeOfActivity.toLowerCase() === "студент" && (
                <FormField
                  errors={errors}
                  touched={touched}
                  fieldLabel="Вуз/ссуз"
                >
                  <Select
                    placeholder="Выберите ВУЗ или ССУЗ"
                    disabled={institutionsLoading}
                    onChange={handleUniversityChange}
                    options={institutionsTransformer(institutions)}
                  />
                </FormField>
              )} */}

              <PhoneField
                fieldProps={{
                  errors,
                  touched,
                  fieldLabel: "Контактный номер",
                  fieldName: "phoneNumber",
                }}
                phoneFieldProps={{
                  name: "phoneNumber",
                  onChange: handleChange,
                  value: values.phoneNumber,
                }}
              />

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Ник в телеграм"
                fieldName="nickName"
              >
                <Input
                  type="text"
                  name="nickName"
                  className="placeholder:text-white50"
                  placeholder="@you_nick"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nickName}
                />
              </FormField>

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
