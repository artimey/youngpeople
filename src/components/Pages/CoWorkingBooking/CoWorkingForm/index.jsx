import React, { useState } from "react";
import { Formik } from "formik";
import { DatePicker, Input, Select } from "antd";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import { ReactComponent as Calendar } from "../../../../img/datePicker.svg";
import CheckableTag from "antd/es/tag/CheckableTag";
import { useGetFieldActivitiesQuery } from "../../../../app/api/partnerApi";
import { useLazyBookSpaceQuery } from "../../../../app/api/bookingSpace";
import { institutionsTransformer } from "../../../../utils/transformers/institutions";
import { PatternFormat } from "react-number-format";
import { FormLayout } from "../../../Form/FormLayout";
import { FormField } from "../../../Form/FormField";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";

export const CoWorkingForm = () => {
  const [universityData, setUniversityData] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const tagsData = [
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
    "19:00-20:00",
  ];

  const { data: institutions, isLoading } = useGetFieldActivitiesQuery();

  const [handleBooking, { isSuccess, isError }] = useLazyBookSpaceQuery();

  const handleDateChange = (value) => {
    const res = `${value?.$D}.${Number(value?.$M) + 1}.${value?.$y}`;
    setDateValue(res);
  };

  const handleUniversityChange = (value) => {
    setUniversityData(value);
  };

  const handleTimeChange = (tag, checked) => {
    if (checked && selectedTags.length <= 4) {
      setSelectedTags((s) => [...s, tag]);
    } else {
      setSelectedTags((s) => s.filter((item) => item !== tag));
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const body = {
      ...values,
      eventDate: dateValue,
      eventTime: selectedTags,
      universityData,
    };

    handleBooking(body);
  };

  return (
    <Formik
      initialValues={{
        eventName: "",
        participantCount: "1",
        eventDate: "",
        comment: "",
        eventTime: "",
        eventFormat: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.eventName) {
          errors.eventName = "*Поле обязаятельно к заполнению";
        }
        if (!values.eventFormat) {
          errors.eventFormat = "*Поле обязаятельно к заполнению";
        }
        if (values.participantCount <= 0) {
          errors.participantCount = "*Участников не может быть 0";
        }
        return errors;
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
              fieldLabel="Дата Рождения"
              fieldName="bornDate"
            >
              <PatternFormat
                format="##.##.####"
                mask="_"
                type="text"
                name="bornDate"
                placeholder={"10.09.1147"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bornDate}
                required
              />
            </FormField>
            <FormField errors={errors} touched={touched} fieldLabel="Вуз/ссуз">
              <Select
                placeholder="Где обучаетесь?"
                className={styles.select}
                onChange={handleUniversityChange}
                suffixIcon={
                  <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                }
                options={institutionsTransformer(institutions)}
              />
            </FormField>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Название мероприятия*"
              fieldName="eventName"
            >
              <Input
                type="text"
                name="eventName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventName}
              />
            </FormField>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Формат мероприятия*"
              fieldName="eventFormat"
            >
              <Input
                type="text"
                name="eventFormat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventFormat}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Количество участников*"
              fieldName="participantCount"
            >
              <Input
                type="number"
                name="participantCount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Какого числа*"
              fieldName="eventDate"
            >
              <DatePicker
                name="eventDate"
                id="eventDate"
                format={"DD.MM.YYYY"}
                onChange={handleDateChange}
                placeholder="Выберите дату"
                suffixIcon={<Calendar width={"1.8rem"} height={"1.8rem"} />}
                className={styles.datePicker}
              />
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="В какое время*"
              fieldName="time"
            >
              <>
                {tagsData.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(checked) => handleTimeChange(tag, checked)}
                    className={`${
                      selectedTags.includes(tag) ? styles.checkedTag : ""
                    } ${styles.tags}`}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </>
            </FormField>

            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Пожелания"
              fieldName="comment"
            >
              <textarea
                type="text"
                name="comment"
                placeholder="Напишите, что вы хотите добавить..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
            </FormField>

            <div className={styles.buttonWrapper}>
              <SubmitButton
                isLoading={isLoading}
                text="Оставить заявку на бронирование"
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
