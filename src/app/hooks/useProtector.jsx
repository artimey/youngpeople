import { useSelector } from "react-redux";
import { personComponents } from "../../utils/protectors";
import { Navigate } from "react-router-dom";
import { USER } from "../../utils/constants";

export const useProtector = () => {
  const { person } = useSelector((s) => s);
  if (!person && !localStorage.getItem(USER)) {
    return <Navigate to="/" replace />;
  }
  return localStorage.getItem(USER) ? personComponents[localStorage.getItem(USER).group] : <></>;
};
