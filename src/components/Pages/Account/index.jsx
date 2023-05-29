
import { useProtector } from "../../../app/hooks/useProtector";

export const Account = () => {
  const Component = useProtector();
  return <Component />;
};
