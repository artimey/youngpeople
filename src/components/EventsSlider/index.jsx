import React from 'react';
import { Row } from 'antd';
import { EventCard } from '../EventCard';
import { useGetAllProjectsQuery } from '../../app/api/events';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';

export const EventsSlider = ({ heading = null }) => {

  const { data, isError, isLoading } = useGetAllProjectsQuery()

  return (
    <section className="bg-brandBlue py-[8rem] max-sm:py-[6rem]">
      <ContainerLayout>
        {heading ? <>{heading}</> : null}

        {
          !isLoading && data?.length ?
            <Row gutter={[24, 16]} className="flex items-stretch">
              {data.map((item, idx) => {
                return (
                  <EventCard key={idx} item={item} />
                );
              })}
            </Row>
            :
            null
        }
      </ContainerLayout>
    </section>
  );
};
