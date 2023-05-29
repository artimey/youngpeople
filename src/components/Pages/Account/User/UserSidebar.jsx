import React from "react";
import { EVENTS_TAB, TASKS_TAB } from "../../../../utils/constants/account";
import { EventNavButton } from "../../../UiKit/Cards/LkNavButton/EventNavButton";
import { TaskNavButton } from "../../../UiKit/Cards/LkNavButton/TaskNavButton";

export const UserSidebar = () => {
  return (
    <>
      <EventNavButton
        data={{
          id: "1",
          type: EVENTS_TAB,
          count: null,
        }}
      />
      <TaskNavButton
        data={{
          id: "1234221",
          type: TASKS_TAB,
          count: 17,
        }}
      />
    </>
  );
};
