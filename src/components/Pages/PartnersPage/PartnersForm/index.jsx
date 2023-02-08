import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import { Formik } from "formik";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import { Checkbox } from "../../../Checkbox";
import { districts } from "../../../../mockData/mockData";
import { useLazyAddPartnerQuery } from "../../../../app/api/partnerApi";
import { Notifications } from "../../../UiKit/Notifications";
import { PatternFormat } from "react-number-format";
import styles from "./styles.module.scss";

export const PartnersForm = () => {
  const [district, setDistrict] = useState(districts[0]);
  const [isAgree, setIsAgree] = useState(false);
  const [onAdd, { isSuccess, isError }] = useLazyAddPartnerQuery();
  const [isDeliveredSuccess, setIsDeliveredSuccess] = useState(false);
  const [isDeliveredError, setIsDeliveredError] = useState(false);

  useEffect(() => {

    if (isSuccess) {
      setIsDeliveredSuccess(true)
      const timer = setTimeout(() => {setIsDeliveredSuccess(false)}, 5000)
      return () => {
        clearTimeout(timer)
      };
    } else if (isError) {
      setIsDeliveredError(true)
      const timer = setTimeout(() => {setIsDeliveredError(false)}, 5000)
      return () => {
        clearTimeout(timer)
      };
    }

  }, [isSuccess, isError])

  const onSubmit = async (value) => {
    if (isAgree) {
      await onAdd({ ...value, district });
    }
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <div className={styles.labelTitle}>ФИО*</div>
              <Input
                type="text"
                name="fmp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventName}
                required
              />
              <span className={styles.error}>
                {errors.fmp && touched.fmp && errors.fmp}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>Сфера деятельности</div>
              <Input
                type="text"
                name="fieldActivity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span>
              {/* <Select
                defaultValue="Помощь нуждающимся"
                className={styles.select}
                suffixIcon={
                  <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                }
                options={[
                  {
                    value: "День московского студента",
                    label: "День московского студента",
                  },
                  {
                    value: "Москва историческая",
                    label: "Москва историческая",
                  },
                  { value: "Москва спортивная", label: "Москва спортивная" },
                ]}
              /> */}
            </label>

            <label>
              <div className={styles.labelTitle}>Название организации*</div>
              <Input
                type="text"
                name="organizationName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
                required
              />

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>Должность</div>
              <Input
                type="text"
                name="post"
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
                АО, в котором осуществляется деятельность
              </div>
              {/* <Input
                type="text"
                name="district"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
              />

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span> */}
              <Select
                value={district}
                onChange={setDistrict}
                className={styles.select}
                suffixIcon={
                  <ArrowDown className="mr-[1.8rem] w-[1.6rem] h-[1rem]" />
                }
                options={districts}
              />
            </label>

            <label>
              <div className={styles.labelTitle}>Предмет сотрудничества</div>
              <textarea
                type="text"
                name="subjectCooperation"
                placeholder="Напишите, что вы хотите добавить..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
            </label>

            <label>
              <div className={styles.labelTitle}>Контактный номер*</div>
              <PatternFormat 
                format="+7 (###) ### ## ##"
                mask='_'
                type="phone"
                name="phoneNumber"
                placeholder={'+7 (000) 00 00 00'}
                onChange={handleChange}
                value={values.phoneNumber}
                required
              />
              {/* <Input
                type="phone"
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
                required
              /> */}

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>Почта*</div>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
                required
              />

              <span className={styles.error}>
                {errors.participantCount &&
                  touched.participantCount &&
                  errors.participantCount}
              </span>
            </label>

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
              <button
                className={`${styles.submitBtn} disabled:bg-white50`}
                type="submit"
              >
                Отправить запрос
              </button>

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
          </form>
        )}
      </Formik>
    </div>
  );
};
