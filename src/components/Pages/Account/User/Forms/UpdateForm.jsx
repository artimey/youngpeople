import { Input } from "antd";
import { Formik } from "formik";
import Select from "rc-select";
import { useState } from "react";
import { PatternFormat } from "react-number-format";
import {
  useGetFieldActivitiesQuery,
  useLazyAddPartnerQuery,
} from "../../../../../app/api/partnerApi";
import { FormField } from "../../../../Form/FormField";
import { FormLayout } from "../../../../Form/FormLayout";
import { SubmitButton } from "../../../../Form/SubmitButton";
import { FormHeader } from "../../FormHeader";
import { ReactComponent as ArrowDown } from "../../../../../img/arrowDown.svg";
import { institutionsTransformer } from "../../../../../utils/transformers/institutions";
import styles from "./styles.module.scss";
import { useLazyUserUpdateQuery } from "../../../../../app/api/auth";
import { useSelector } from "react-redux";

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
              {/* 
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Пароль"
                fieldName="password"
              ></FormField> */}

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Дата рождения"
                fieldName="birthday"
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="birthday"
                  onChange={handleChange}
                  placeholder="дд.мм.гггг"
                  onBlur={handleBlur}
                  value={values.birthday}
                  required
                />
              </FormField>

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
                  required
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
                  required
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
