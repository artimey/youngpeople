import { Select } from "antd";
import { useGetTasksQuery } from "../../../../../app/api/tasks";
import styles from "./styles.module.scss";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveEventTab } from "../../../../../app/store/slices/accountOption";

export const EventsSelect = () => {
  const { data, isLoading } = useGetTasksQuery();
  const dispatch = useDispatch();
  const events = useMemo(() => {
    if (!data?.events) return [];
    return Object.values(data.events).map((item) => ({
      value: String(item.id),
      label: item.name,
    }));
  }, [data?.events]);
  const handleChange = (value) => {
    dispatch(setActiveEventTab(value));
  };
  useEffect(() => {
    if (data?.events) {
      dispatch(setActiveEventTab(Object.keys(data.events)?.[0]));
    }
  }, [data?.events, dispatch]);
  return (
    <div className={styles.container}>
      {!isLoading && data?.events && (
        <>
          <span className={styles.selectLabel}>Название мероприятия:</span>
          <Select
            className={styles.events}
            defaultValue={events?.[0]?.value}
            options={events}
            onChange={handleChange}
            bordered={false}
          />
        </>
      )}
    </div>
  );
};
