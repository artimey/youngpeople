import { useEffect, useState } from "react";
import { Notifications } from "../../UiKit/Notifications";

export const FormLayout = ({
  children,
  onSubmit,
  onReset,
  isSuccess,
  isError,
}) => {
  const [isDeliveredSuccess, setIsDeliveredSuccess] = useState(isSuccess);
  const [isDeliveredError, setIsDeliveredError] = useState(isError);

  useEffect(() => {
    let timer;

    if (isSuccess) {
      setIsDeliveredSuccess(true);
      timer = setTimeout(() => {
        setIsDeliveredSuccess(false);
      }, 5000);
    } else if (isError) {
      setIsDeliveredError(true);
      timer = setTimeout(() => {
        setIsDeliveredError(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [isSuccess, isError]);

  return (
    <div>
      {isDeliveredSuccess ? (
        <div className="top-5 right-5 fixed z-[99999]">
          <Notifications
            type="success"
            close={() => setIsDeliveredSuccess(false)}
          >
            Ваша заявка была успешна отправленна
          </Notifications>
        </div>
      ) : null}

      {isDeliveredError ? (
        <div className=" top-5 right-5 fixed z-[99999]">
          <Notifications
            type="warning"
            close={() => setIsDeliveredError(false)}
          >
            Что то пошло не так
          </Notifications>
        </div>
      ) : null}

      <form onSubmit={onSubmit} onReset={onReset}>
        {children}
      </form>
    </div>
  );
};
