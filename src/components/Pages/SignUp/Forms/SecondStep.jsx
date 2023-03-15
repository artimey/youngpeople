import { Input, Select } from "antd";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import { useGetFieldActivitiesQuery } from "../../../../app/api/partnerApi";
import { institutionsTransformer } from "../../../../utils/transformers/institutions";
import { Checkbox } from "../../../Checkbox";
import { FormField } from "../../../Form/FormField";
import { FormLayout } from "../../../Form/FormLayout";
import { SubmitButton } from "../../../Form/SubmitButton";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import styles from "./styles.module.scss";
import { useLazyUserUpdateQuery } from "../../../../app/api/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SecondStep = () => {
  const navigate = useNavigate();
  const [onUpdate, { isSuccess, isError, isLoading,data }] =
    useLazyUserUpdateQuery();
  const { data: institutions, isLoading: institutionsLoading } =
    useGetFieldActivitiesQuery();

  const { person } = useSelector((s) => s);

  const [isAgree, setIsAgree] = useState(false);
  const [universityData, setUniversityData] = useState("");

  useEffect(() => {
    if (data && !isError) {
      navigate("/account");
    }
  }, [data]);

  const onSubmit = async (value) => {
    if (isAgree) {
      await onUpdate({
        ...value,
        userId: person.userId,
        apiKey: person.apiKey,
      });
    }
  };

  const handleUniversityChange = (value) => {
    setUniversityData(value);
  };
  return (
    <Formik
      initialValues={{
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

            {values.typeOfActivity.toLowerCase() === "студент" && (
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Вуз/ссуз"
              >
                <Select
                  placeholder="Выберите ВУЗ или ССУЗ"
                  disabled={institutionsLoading}
                  className={styles.select}
                  onChange={handleUniversityChange}
                  suffixIcon={
                    <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                  }
                  options={institutionsTransformer(institutions)}
                />
              </FormField>
            )}

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
