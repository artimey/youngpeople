import { useCallback, useState } from "react";
import { Input } from "antd";
import { Formik } from "formik";
import { memo, useRef } from "react";
import { FormField } from "../../../../Form/FormField";
import { FormLayout } from "../../../../Form/FormLayout";
import { SubmitButton } from "../../../../Form/SubmitButton";
import FormHeader from "../../FormHeader";
import { useLazyUserUpdateQuery } from "../../../../../app/api/auth";
import { useSelector } from "react-redux";
import { BirthdayField } from "../../../../Form/BirthdayField";
import { PhoneField } from "../../../../Form/PhoneField";
import { EmailField } from "../../../../Form/EmailField";
import styles from "./styles.module.scss";

export const UpdateForm = memo(({ onClose }) => {
  const { person } = useSelector((s) => s);
  const [initials, setInitials] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [typeOfActivity, setTypeOfActivity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickName, setNickName] = useState("");
  const [onUpdate, { isSuccess, isError, isLoading }] =
    useLazyUserUpdateQuery();
  const uploadAvatar = useRef(null);

  const handleChangeAvatar = useRef((file) => {
    uploadAvatar.current = file.file;
  });

  const handleDeleteAvatar = useRef(() => {
    uploadAvatar.current = null;
  });

  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleChangeActivity = (e) => {
    setTypeOfActivity(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeNick = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = useCallback(async () => {
    await onUpdate({
      userId: person.userId,
      apiKey: person.apiKey,
      avatar: uploadAvatar.current,
      initials,
      email,
      nickName,
      birthday,
      phoneNumber,
    });
    onClose();
  }, [
    birthday,
    email,
    initials,
    nickName,
    onUpdate,
    person.apiKey,
    person.userId,
    phoneNumber,
  ]);

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
          // handleSubmit,
        }) => (
          <FormLayout
            isSuccess={isSuccess}
            isError={isError}
            // onSubmit={handleSubmit}
          >
            <>
              <FormHeader
                head="Ваши данные"
                avatar={person.avatar}
                handleChangeAvatar={handleChangeAvatar}
                handleDelete={handleDeleteAvatar}
              />
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
                  onChange={handleChangeInitials}
                  placeholder="Иванов Иван Иванович"
                  onBlur={handleBlur}
                  value={initials}
                />
              </FormField>

              <EmailField
                emailFieldProps={{
                  placeholder: "example@mail.com",
                  onChange: handleChangeEmail,
                  onBlur: handleBlur,
                  value: email,
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
                  onChange: handleChangeBirthday,
                  onBlur: handleBlur,
                  value: birthday,
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
                  onChange={handleChangeActivity}
                  onBlur={handleBlur}
                  value={typeOfActivity}
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
                  onChange: handleChangePhone,
                  value: phoneNumber,
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
                  onChange={handleChangeNick}
                  onBlur={handleBlur}
                  value={nickName}
                />
              </FormField>

              <div className={styles.buttonWrapper}>
                <SubmitButton
                  isLoading={isLoading}
                  text="Сохранить"
                  onClick={onSubmit}
                />
              </div>
            </>
          </FormLayout>
        )}
      </Formik>
    </div>
  );
});
