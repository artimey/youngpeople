import { useRef, useCallback } from "react";
import { Formik } from "formik";
import styles from "./styles.module.scss";
import { FormLayout } from "../../../../Form/FormLayout";
import { FormField } from "../../../../Form/FormField";
import { Input } from "antd";
import { SubmitButton } from "../../../../Form/SubmitButton";
import { TextAreaField } from "../../../../Form/TextAreaField";
import { DraggArea } from "../../../../Form/DraggArea";
import { useLazyCreateEventQuery } from "../../../../../app/api/events";
import { useSelector } from "react-redux";

export const AddEventForm = ({ onClose }) => {
  const { person } = useSelector((s) => s);
  const uploadAvatar = useRef(null);

  const [onCreateEvent, { isSuccess, isError }] = useLazyCreateEventQuery();
  const handleChangeAvatar = useRef((file) => {
    uploadAvatar.current = file.originFileObj;
  });

  const onSubmit = useCallback(async (value) => {
    await onCreateEvent({
      userId: person.userId,
      apiKey: person.apiKey,
      name: value.eventName,
      eventType: value.eventType,
      place: value.eventPlace,
      detail: value.description,
      date: value.eventDate,
      photo: uploadAvatar.current,
    });
    onClose();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Formik
        initialValues={{
          eventName: "",
          eventType: "",
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
            isSuccess={isSuccess}
            isError={isError}
            onSubmit={handleSubmit}
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
                fieldName="eventType"
                required
              >
                <Input
                  className="placeholder:text-white50"
                  type="text"
                  name="eventType"
                  onChange={handleChange}
                  placeholder="Выставка"
                  onBlur={handleBlur}
                  value={values.eventType}
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
                  name="eventDate"
                  onChange={handleChange}
                  placeholder="22 января, 21:00"
                  onBlur={handleBlur}
                  value={values.eventDate}
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
                  name="eventPlace"
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
                  maxLength: 300,
                }}
              />

              <div className={styles.buttonWrapper}>
                <SubmitButton
                  // isLoading={isLoading}
                  text="Сохранить"
                />
              </div>
            </>
          </FormLayout>
        )}
      </Formik>
    </div>
  );
};
