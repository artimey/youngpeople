import React, { useState } from 'react'
import { Formik } from 'formik';
import styles from './styles.module.scss';
import { DatePicker, Input, Select } from 'antd';
import { ReactComponent as ArrowDown } from '../../../../img/arrowDown.svg';
import { ReactComponent as Calendar } from '../../../../img/datePicker.svg';
import CheckableTag from 'antd/es/tag/CheckableTag';
import axios from 'axios';

export const CoWorkingForm = ({ title }) => {

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [eventFormatValue, setEventFormatValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const tagsData = [
    '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00',
    '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00',
    '18:00-19:00', '19:00-20:00'
  ];

  const handleDateChange = (value) => {
    const res = `${value?.$D}.${Number(value?.$M) + 1}.${value?.$y}`
    setDateValue(res);
  }

  const handleEventFormatValue = (value) => {
    setEventFormatValue(value)
  }

  const handleTimeChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);

    setSelectedTags(nextSelectedTags);
  };

  const onSubmit = async (values, { setSubmitting }) => {
    // alert('Заявка отправлена!')
    console.log(JSON.stringify({ ...values, eventDate: dateValue, eventTime: selectedTags }, null, 2));

    const body = JSON.stringify({ ...values, eventDate: dateValue, eventTime: selectedTags })

    const test = 'https://mosmolodezh.ru/api/forms/booking/'
    const test1 = 'http://185.211.170.217/api/forms/booking/'

    try {
      setIsLoading(true);
      const data = await axios.post(test, body, { headers: { 'Content-Type': 'application/json' } })
      if (data) {
        setIsSuccess(true)
        setIsLoading(false)
        setTimeout(() => setIsSuccess(false), 3000)
      }
    }
    catch (err) {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
      setIsLoading(false)
      console.log(err);
    }

    // await fetch(test , {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({...values, eventDate: dateValue, eventTime: selectedTags})
    // })
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err => {
    //   console.log(err);
    // })
  }

  return (
    <div>
      {
        isSuccess ?
          <div
            className="bg-green-500 p-[2rem] top-5 right-5 fixed w-[300px] z-[99999] 
          rounded-2xl text-[2rem] text-white font-[500] text-center">
            Заявка отправлена 🎉
          </div>
          :
          null
      }

      {
        isError ?
          <div
            className="bg-red-600 p-[2rem] top-5 right-5 fixed w-[300px] z-[99999] 
          rounded-2xl text-[2rem] text-white font-[500] text-center">
            Что-то пошло не так ;( 
          </div>
          :
          null
      }

      <Formik
        initialValues={{ eventName: '', participantCount: '1', eventDate: '', comment: '', eventTime: "", eventFormat: "" }}
        validate={values => {
          const errors = {};
          if (!values.eventName) {
            errors.eventName = '*Поле обязаятельно к заполнению';
          }
          if (!values.eventFormat) {
            errors.eventFormat = '*Поле обязаятельно к заполнению';
          }
          if (values.participantCount <= 0) {
            errors.participantCount = "*Участников не может быть 0"
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
              <div className={styles.labelTitle}>Название мероприятия <span>*</span></div>
              <Input
                type="text"
                name="eventName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventName}
              />
              <span className={styles.error}>{errors.eventName && touched.eventName && errors.eventName}</span>
            </label>

            {/* <label>
              <div className={styles.labelTitle}>Формат мероприятия <span>*</span></div>
              <Select
                defaultValue="Москва спортивная"
                className={styles.select}
                onChange={handleEventFormatValue}
                suffixIcon={<ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />}
                options={[
                  { value: 'День московского студента', label: 'День московского студента' },
                  { value: 'Москва историческая', label: 'Москва историческая' },
                  { value: 'Москва спортивная', label: 'Москва спортивная' }
                ]}
              />
            </label> */}

            <label>
              <div className={styles.labelTitle}>Формат мероприятия <span>*</span></div>
              <Input
                type="text"
                name="eventFormat"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventFormat}
              />
              <span className={styles.error}>{errors.eventFormat && touched.eventFormat && errors.eventFormat}</span>
            </label>

            <label>
              <div className={styles.labelTitle}>Количество участников<span>*</span></div>
              <Input
                type="number"
                name="participantCount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />

              <span className={styles.error}>{errors.participantCount && touched.participantCount && errors.participantCount}</span>
            </label>

            <label>
              <div className={styles.labelTitle}>Какого числа <span>*</span></div>
              <DatePicker
                name="eventDate"
                id="eventDate"
                format={'DD.MM.YYYY'}
                onChange={handleDateChange}
                placeholder="Выберите дату"
                suffixIcon={<Calendar width={"1.8rem"} height={"1.8rem"} />} />

              <span className={styles.error}>{errors.eventDate && touched.eventDate && errors.eventDate}</span>
            </label>

            <label>
              <div className={styles.labelTitle}>В какое время<span>*</span></div>
              {tagsData.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(checked) => handleTimeChange(tag, checked)}
                  className={`${selectedTags.includes(tag) ? styles.checkedTag : ""} ${styles.tags}`}
                >
                  {tag}
                </CheckableTag>
              ))}

              <span className={styles.error}>{errors.time && touched.time && errors.time}</span>
            </label>

            <label>
              <div className={styles.labelTitle}>Пожелания</div>
              <textarea
                type="text"
                name="comment"
                placeholder='Напишите, что вы хотите добавить...'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
            </label>

            <button className={`${styles.submitBtn} disabled:bg-white50`} type="submit" disabled={isLoading}>
              {
                !isLoading ? 
                <>Оставить заявку на бронирование</>
                :
                <>Заявка отправляется ...</>
              }
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
};
