import React, { useState } from "react";
import { Input, Select } from "antd";
import { Formik } from "formik";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import { Checkbox } from "../../../Checkbox";
import { districts } from "../../../../mockData/mockData";
import { useLazyAddPartnerQuery } from "../../../../app/api/partners";
import { PatternFormat } from "react-number-format";
import { FormLayout } from "../../../Form/FormLayout";
import { FormField } from "../../../Form/FormField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";
import { PhoneField } from "../../../Form/PhoneField";
import { EmailField } from "../../../Form/EmailField";
import { TextAreaField } from "../../../Form/TextAreaField";

export const PartnersForm = () => {
  const [district, setDistrict] = useState(districts[0]);
  const [isAgree, setIsAgree] = useState(false);
  const [onAdd, { isSuccess, isError, isLoading }] = useLazyAddPartnerQuery();

  const onSubmit = async (value) => {
    if (isAgree) {
      await onAdd({ ...value, district });
    }
  };
  return (
    <Formik
      initialValues={{
        fmp: "",
        fieldActivity: "",
        organizationName: "",
        post: "",
        district: "",
        subjectCooperation: "",
        phoneNumber: "",
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
              fieldLabel="ФИО*"
              fieldName="fmp"
            >
              <Input
                type="text"
                name="fmp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventName}
                required
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Сфера деятельности"
              fieldName="fieldActivity"
            >
              <Input
                type="text"
                name="fieldActivity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Название организации*"
              fieldName="organizationName"
            >
              <Input
                type="text"
                name="organizationName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
                required
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Должность"
              fieldName="post"
            >
              <Input
                type="text"
                name="post"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="АО, в котором осуществляется деятельность"
              fieldName="district"
            >
              <Select
                value={district}
                onChange={setDistrict}
                className={styles.select}
                suffixIcon={
                  <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                }
                options={districts}
              />
            </FormField>

            <TextAreaField
              fieldProps={{
                errors,
                touched,
                fieldLabel: "Предмет сотрудничества",
                fieldName: "subjectCooperation",
              }}
              textareaProps={{
                name: "subjectCooperation",
                placeholder: "Напишите, что вы хотите добавить...",
                onChange: handleChange,
                onBlur: handleBlur,
                value: values.comment,
              }}
            />

            <PhoneField
              fieldProps={{
                errors,
                touched,
                fieldLabel: "Контактный номер",
                fieldName: "phoneNumber",
              }}
              phoneFieldProps={{
                name: "phone",
                onChange: handleChange,
                value: values.phoneNumber,
                required: true,
              }}
            />
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
              <SubmitButton isLoading={isLoading} text="Отправить запрос" />

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
