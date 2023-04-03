import React from "react";
import { Col, Row } from "antd";
import ContainerLayout from "../Layouts/ContainerLayout/ContainerLayout";
import { useGetImportantNewsQuery } from "../../app/api/news";
import { ImportantNewsCard } from "../UiKit/NewsCards/ImportantNewsCard";
import styles from "./allNews.module.scss";

export const AllNews = ({ heading = null, pattern = false }) => {
  const { data, isLoading } = useGetImportantNewsQuery();
  return (
    <section className="bg-brandBlue max-sm:pt-[6rem]">
      <ContainerLayout>
        {heading}

        <div className="overflow-hidden">
          <Row>
            <Col span={12} xs={24} sm={24} md={12}>
              {!isLoading && data[0] && (
                <ImportantNewsCard item={data[0]} isFirst />
              )}
            </Col>
            <Col span={12} xs={24} sm={24} md={12}>
              {!isLoading && data?.length && (
                <div className="w-full h-full flex flex-col flex-nowrap justify-between">
                  {data.slice(1, 4).map((item) => {
                    return <ImportantNewsCard key={item.id} item={item} />;
                  })}
                </div>
              )}
            </Col>
          </Row>
        </div>
      </ContainerLayout>

      {pattern ? <div className={`${styles.pattern} mt-[80px]`}></div> : null}
    </section>
  );
};
