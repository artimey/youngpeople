import React from "react";
import { Input, Select } from "antd";
import { Formik } from "formik";
import { ReactComponent as ArrowDown } from "../../../../img/arrowDown.svg";
import styles from "./styles.module.scss";
import { Checkbox } from "../../../Checkbox";

export const PartnersForm = () => {
  return (
    <div>
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
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.eventName) {
        //     errors.eventName = "*Поле обязаятельно к заполнению";
        //   }
        //   if (!values.eventFormat) {
        //     errors.eventFormat = "*Поле обязаятельно к заполнению";
        //   }
        //   if (values.participantCount <= 0) {
        //     errors.participantCount = "*Участников не может быть 0";
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
              />
              <span className={styles.error}>
                {errors.eventName && touched.eventName && errors.eventName}
              </span>
            </label>

            <label>
              <div className={styles.labelTitle}>Сфера деятельности</div>
              <Select
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
              />
            </label>

            <label>
              <div className={styles.labelTitle}>Название организации*</div>
              <Input
                type="text"
                name="organizationName"
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
              <Select
                defaultValue="Центральный"
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
              <Input
                type="phone"
                name="phoneNumber"
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
              <div className={styles.labelTitle}>Почта*</div>
              <Input
                type="email"
                name="email"
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

            <div className={styles.checkboxWrapper}>
              <Checkbox />
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
