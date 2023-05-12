import { useRef, useCallback } from "react";
import { Formik } from "formik";
import styles from "./styles.module.scss";
import { FormLayout } from "../../../../Form/FormLayout";
import { FormField } from "../../../../Form/FormField";
import { Input } from "antd";
import { SubmitButton } from "../../../../Form/SubmitButton";
import { TextAreaField } from "../../../../Form/TextAreaField";
import { DraggArea } from "../../../../Form/DraggArea";

export const AddEventForm = (pops) => {
  const uploadAvatar = useRef(null);

  const handleChangeAvatar = useRef((file) => {
    uploadAvatar.current = file.file;
    console.log("handleChangeAvatar", file);
  });

  const onSubmit = useCallback(
    // async (value, actions) => {
    //   await onUpdate({
    //     ...value,
    //     userId: person.userId,
    //     apiKey: person.apiKey,
    //     avatar: uploadAvatar.current,
    //   });
    //   onClose();
    // },
    []
  );

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          eventName: "",
          eventGenre: "",
          eventDate: "",
          eventPlace: "",
          description: "",
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
            isSuccess={false}
            isError={false}
            // onSubmit={handleSubmit}
          >
            <>
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Фото мероприятия*"
                fieldName="eventName"
                required
              >
                <DraggArea onUpload={handleChangeAvatar.current} />
              </FormField>
              {/* <FormHeader
                head="Ваши данные"
                avatar={person.avatar}
                handleChangeAvatar={handleChangeAvatar}
                handleDelete={handleDeleteAvatar}
              /> */}
              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Название мероприятия*"
                fieldName="eventName"
                required
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="eventName"
                  onChange={handleChange}
                  placeholder="Введите название..."
                  onBlur={handleBlur}
                  value={values.eventName}
                />
              </FormField>

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Жанр мероприятия*"
                fieldName="eventGenre"
                required
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="eventGenre"
                  onChange={handleChange}
                  placeholder="Выставка"
                  onBlur={handleBlur}
                  value={values.eventGenre}
                />
              </FormField>

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Дата и время проведения*"
                fieldName="eventName"
                required
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="initials"
                  onChange={handleChange}
                  placeholder="22 января, 21:00"
                  onBlur={handleBlur}
                  value={values.eventName}
                />
              </FormField>

              <FormField
                errors={errors}
                touched={touched}
                fieldLabel="Место проведения*"
                fieldName="eventPlace"
                required
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="eventGenre"
                  onChange={handleChange}
                  placeholder="Введите адрес..."
                  onBlur={handleBlur}
                  value={values.eventPlace}
                />
              </FormField>

              <TextAreaField
                fieldProps={{
                  errors,
                  touched,
                  fieldLabel: "Описание мероприятия*",
                  fieldName: "description",
                }}
                textareaProps={{
                  name: "description",
                  placeholder: "Информация о проекте.",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.description,
                }}
              />

              <div className={styles.buttonWrapper}>
                <SubmitButton
                  // isLoading={isLoading}
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
};
