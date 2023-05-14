import React from "react";
import { Row } from "antd";
import { EventCard } from "../EventCard";
import { useGetAllEventsQuery } from "../../app/api/events";
import ContainerLayout from "../Layouts/ContainerLayout/ContainerLayout";
import { Link, useSearchParams } from "react-router-dom";
import { FieldButton } from "../UiKit/Buttons";

export const EventsSlider = ({ heading = null }) => {
  const [projectIdFromParams] = useSearchParams();
  const projectId = projectIdFromParams.get("LINK_PROJECT");

  const { data, isLoading } = useGetAllEventsQuery(projectId);

  if (!data?.length && !isLoading && projectId) {
    return (
      <ContainerLayout>
        <div className="text-center py-[6rem]">
          <div className="mb-[2rem] text-[2.5rem] text-white">
            Мероприятий от проекта не найдено
          </div>
          <Link to="/events">
            <FieldButton type="bg8">Ко всем мероприятиям</FieldButton>
          </Link>
        </div>
      </ContainerLayout>
    );
  }

  return (
    <section className="bg-brandBlue py-[8rem] max-sm:py-[6rem]">
      <ContainerLayout>
        {heading ? <>{heading}</> : null}

        {!isLoading && data?.length ? (
          <Row gutter={[24, 16]} className="flex items-stretch">
            {heading
              ? data
                  .slice(0, 3)
                  .map((item, idx) => <EventCard key={idx} item={item} />)
              : data.map((item, idx) => <EventCard key={idx} item={item} />)}
          </Row>
        ) : null}
      </ContainerLayout>
    </section>
  );
};
