import { useGetUserEventsQuery } from "../../../../app/api/events";
import { EventCard } from "../../../EventCard";
import { UserEventsPlaceholder } from "../../../UserEventsPlaceholder/UserEventsPlaceholder";

export const AccountCards = () => {
  const { data } = useGetUserEventsQuery();
  if (!data?.length) {
    return <UserEventsPlaceholder />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.6rem]">
      {data?.length &&
        data.map((item) => {
          return <EventCard item={item} key={item.id} />;
        })}
    </div>
  );
};
