import { AccountCards } from "../../components/Pages/Account/Cards";
import { PartnerAccountCards } from "../../components/Pages/Account/Cards/PartnerAccountCards";
import { UserAccountCards } from "../../components/Pages/Account/Cards/UserAccountCards";
import { EventsSelect } from "../../components/Pages/Account/Org/EventsSelect";
import { OrgContent } from "../../components/Pages/Account/Org/OrgContent";
import { PartnerContent } from "../../components/Pages/Account/Partner/PartnerContent";
import { Todo } from "../../components/Pages/Account/Todo";
import { UserContent } from "../../components/Pages/Account/User/UserContent";
import { UserTabHeader } from "../../components/Pages/Account/User/UserTabHeader/UserTabHeader";
import {
  AMBASADOR_GROUP_NUMBER,
  ORG_GROUP_NUMBER,
  PARTNER_GROUP_NUMBER,
  USER_GROUP_NUMBER,
} from "./person";

export const EVENTS_TAB = "eventsTab";
export const TASKS_TAB = "tasksTab";

export const userSidebarData = [
  {
    id: "1",
    type: EVENTS_TAB,
    count: null,
  },
  // {
  //   id: "1234221",
  //   type: "goals",
  //   count: 17,
  // },
  // {
  //   id: "12341",
  //   type: "certificates",
  //   count: 2,
  // },
  // {
  //   id: "324232",
  //   type: "changeCoins",
  //   count: 64,
  // },
];

export const partnerSidebarData = [
  {
    id: "1",
    type: EVENTS_TAB,
    count: null,
  },
  {
    id: "1234221",
    type: TASKS_TAB,
    count: 17,
  },
  // {
  //   id: "12341",
  //   type: "certificates",
  //   count: 2,
  // },
  // {
  //   id: "324232",
  //   type: "changeCoins",
  //   count: 64,
  // },
];

export const sidebarTabs = {
  [USER_GROUP_NUMBER]: userSidebarData,
  [ORG_GROUP_NUMBER]: partnerSidebarData,
  [PARTNER_GROUP_NUMBER]: partnerSidebarData,
};

export const contentByTabs = {
  [EVENTS_TAB]: <AccountCards />,
  [TASKS_TAB]: <Todo />,
};

export const userContentByTabs = {
  [EVENTS_TAB]: <UserAccountCards />,
  [TASKS_TAB]: null,
};

export const partnerContentByTabs = {
  [EVENTS_TAB]: <PartnerAccountCards />,
  [TASKS_TAB]: null,
};

export const orgContentByTabs = {
  [EVENTS_TAB]: <PartnerAccountCards />,
  [TASKS_TAB]: <Todo />,
};

export const accountHeaderByTabs = {
  [EVENTS_TAB]: <UserTabHeader />,
  [TASKS_TAB]: <EventsSelect />,
};

export const contentByGroup = {
  [USER_GROUP_NUMBER]: <UserContent />,
  [ORG_GROUP_NUMBER]: <OrgContent />,
  [PARTNER_GROUP_NUMBER]: <PartnerContent />,
  [AMBASADOR_GROUP_NUMBER]: <PartnerContent />,
};
