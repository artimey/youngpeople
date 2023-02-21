import React from "react";
import { Col, Row } from "antd";
import ContainerLayout from "../Layouts/ContainerLayout/ContainerLayout";
import NewsCard from "./NewsCard";
import NewsBudge from "./NewsBudge";
import { useGetAllNewsQuery } from "../../app/api/news";
import styles from "./allNews.module.scss";
import { newsTransformer } from "../../utils/transformers/news";

export const AllNews = ({ heading = null, pattern = false }) => {
  const { data, isLoading } = useGetAllNewsQuery();
  
  return (
    <section className="bg-brandBlue max-sm:pt-[6rem]">
      <ContainerLayout>
        {heading}

        <div className="overflow-hidden">
          <Row gutter={[32, 16]}>
            <Col span={12} xs={24} sm={24} md={12}>
              {!isLoading && newsTransformer(data)[0] && <NewsCard item={newsTransformer(data)[0]} />}
            </Col>
            <Col span={12} xs={24} sm={24} md={12}>
              {!isLoading && newsTransformer(data).length && (
                <div className="w-full h-full flex flex-col flex-nowrap gap-y-[1.6rem]">
                  {newsTransformer(data).slice(1).map((item) => {
                    return <NewsBudge key={item.id} item={item} />;
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
