import { useSelector } from "react-redux";
import { accountHeaderByTabs } from "../../../../utils/constants/account";

export const AccountHeader = () => {
  const { activeTab } = useSelector((s) => s.accountOptions);

  return <>{accountHeaderByTabs[activeTab]}</>;
};
