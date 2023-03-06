import { Input } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useLazyAddPartnerQuery } from "../../../../app/api/partnerApi";
import { FormField } from "../../../Form/FormField";
import { FormLayout } from "../../../Form/FormLayout";
import { SubmitButton } from "../../../Form/SubmitButton";
import styles from "./styles.module.scss";

export const RestoreForm = () => {
  const [onAdd, { isSuccess, isError, isLoading }] = useLazyAddPartnerQuery();

  const onSubmit = async (value) => {
    await onAdd({ ...value });
  };
  return (
    <Formik
      initialValues={{
        password: "",
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
        <FormLayout
          isSuccess={isSuccess}
          isError={isError}
          onSubmit={handleSubmit}
        >
          <>
            <FormField
              errors={errors}
              touched={touched}
              fieldLabel="Почта"
              fieldName="email"
            >
              <Input
                type="email"
                name="email"
                placeholder="example@mail.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.participantCount}
                className="placeholder:text-white50 text-white"
                required
              />
              <div className="text-white  mt-[1.6rem] font-medium text-[1.6rem] leading-[2.2rem]">
                <span>Знаете пароль? </span>
                &nbsp;
                <Link className="text-white50 underline" to="/sign_in">
                  Войти
                </Link>
              </div>
            </FormField>

            <div className={styles.buttonWrapper}>
              <SubmitButton isLoading={isLoading} />
            </div>
          </>
        </FormLayout>
      )}
    </Formik>
  );
};
