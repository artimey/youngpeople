import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { DatePicker, Input, Select } from "antd";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import { ReactComponent as Calendar } from "../../../../img/datePicker.svg";
import CheckableTag from "antd/es/tag/CheckableTag";
import { useGetFieldActivitiesQuery } from "../../../../app/api/partnerApi";
import styles from "./styles.module.scss";
import { useLazyBookSpaceQuery } from "../../../../app/api/bookingSpace";
import { institutionsTransformer } from "../../../../utils/transformers/institutions";
import { Notifications } from "../../../UiKit/Notifications";
import { PatternFormat } from "react-number-format";

export const CoWorkingForm = ({ title }) => {
  const [isDeliveredSuccess, setIsDeliveredSuccess] = useState(false);
  const [isDeliveredError, setIsDeliveredError] = useState(false);
  const [universityData, setUniversityData] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [eventFormatValue, setEventFormatValue] = useState("");
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

  const [handleBooking, { data, isSuccess, isError }] = useLazyBookSpaceQuery();
  useEffect(() => {

    let timer;

    if (isSuccess) {
      setIsDeliveredSuccess(true)
      timer = setTimeout(() => {setIsDeliveredSuccess(false)}, 5000)
    } else if (isError) {
      setIsDeliveredError(true)
      timer = setTimeout(() => {setIsDeliveredError(false)}, 5000)
    }

    return () => clearTimeout(timer);

  }, [isSuccess, isError])

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
    const body = { ...values, eventDate: dateValue, eventTime: selectedTags, universityData };

    handleBooking(body);
  };

  return (
    <div>
      {isDeliveredSuccess ? (
        <div
          className="top-5 right-5 fixed z-[99999]"
        >
          <Notifications type="success" close={() => setIsDeliveredSuccess(false)}>
            Ваша заявка была успешна отправленна
          </Notifications>
        </div>
      ) : null}

      {isDeliveredError ? (
        <div
          className=" top-5 right-5 fixed z-[99999]"
        >
          <Notifications type="warning" close={() => setIsDeliveredError(false)}>
            Что то пошло не так
          </Notifications>
        </div>
      ) : null}

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
          isSubmitting,
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <div className={styles.labelTitle}>
                Дата Рождения <span>*</span>
              </div>
              <PatternFormat 
                format="##.##.####"
                mask='_'
                type="text"
                name="bornDate"
                placeholder={'10.09.1147'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bornDate}
                required
              />
              <span className={styles.error}>
                {errors.bornDate && touched.bornDate && errors.bornDate}
              </span>
              <span className={styles.error}>
                {errors.eventName && touched.eventName && errors.eventName}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>
                Вуз/ссуз <span>*</span>
              </div>
              <Select
                placeholder="Где обучаетесь?"
                className={styles.select}
                onChange={handleUniversityChange}
                suffixIcon={
                  <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                }
                options={institutionsTransformer(institutions)}
              />
            </label>

            <label>
              <div className={styles.labelTitle}>
                Название мероприятия <span>*</span>
              </div>
              <Input
                type="text"
                name="eventName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventName}
              />
              <span className={styles.error}>
                {errors.eventName && touched.eventName && errors.eventName}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>
                Формат мероприятия <span>*</span>
              </div>
              <Input
                type="text"
                name="eventFormat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventFormat}
              />
              <span className={styles.error}>
                {errors.eventFormat &&
                  touched.eventFormat &&
                  errors.eventFormat}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>
                Количество участников<span>*</span>
              </div>
              <Input
                type="number"
                name="participantCount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>
                Какого числа <span>*</span>
              </div>
              <DatePicker
                name="eventDate"
                id="eventDate"
                format={"DD.MM.YYYY"}
                onChange={handleDateChange}
                placeholder="Выберите дату"
                suffixIcon={<Calendar width={"1.8rem"} height={"1.8rem"} />}
              />

              <span className={styles.error}>
                {errors.eventDate && touched.eventDate && errors.eventDate}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>
                В какое время<span>*</span>
              </div>
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

              <span className={styles.error}>
                {errors.time && touched.time && errors.time}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>Пожелания</div>
              <textarea
                type="text"
                name="comment"
                placeholder="Напишите, что вы хотите добавить..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
            </label>

            <button
              className={`${styles.submitBtn} disabled:bg-white50`}
              type="submit"
              disabled={isLoading}
            >
              {!isLoading ? (
                <>Оставить заявку на бронирование</>
              ) : (
                <>Заявка отправляется ...</>
              )}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
