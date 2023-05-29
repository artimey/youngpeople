import { useSelector } from "react-redux";
import { sidebarTabs, userSidebarData } from "../../../../utils/constants/account";
import { LkNavButton } from "../../../UiKit/Cards/LkNavButton/LkNavButton";

export const PartnerSidebar = () => {
  const group = useSelector((s) => s.person.group);
  return (
    <>
      {(sidebarTabs[group] ?? userSidebarData).map((item) => {
        return <LkNavButton key={item.id} data={item} />;
      })}
    </>
  );
};
