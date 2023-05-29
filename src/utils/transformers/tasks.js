export const tasksTransformer = (tasks) => {
  if (tasks) {
    const transformTasks = Object.keys(tasks).reduce((acc, el) => {
      return {
        ...acc,
        [el]: {
          id: tasks[el]["Fields"]["ID"],
          eventId: tasks[el]["Props"]["LINK_EVENT"]["VALUE"],
          name: tasks[el]["Fields"]["NAME"],
          description: tasks[el]["Fields"]["PREVIEW_TEXT"],
          deadline: tasks[el]["Props"]["DEADLINE"]["VALUE"],
          isDone: tasks[el]["Props"]["SUBSCUBES"]["VALUE"] === "y",
        },
      };
    }, {});
    const values = Object.values(transformTasks).reduce((acc, el) => {
      if (acc[el.eventId]) {
        acc[el.eventId].push(el);
      } else {
        acc[el.eventId] = [el];
      }
      return acc;
    }, {});
    return values;
  }
  return null;
};
