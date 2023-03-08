import ContainerLayout from "../../../Layouts/ContainerLayout/ContainerLayout";
import { useGetNewsListQuery } from "../../../../app/api/news";
import { NewsRow } from "./NewsRow";
import styles from "./style.module.scss";

export const NewsGrid = () => {
  const { data, isLoading } = useGetNewsListQuery();
  return (
    <ContainerLayout>
      <div className={styles.container}>
        {!isLoading &&
          data?.length &&
          data.map((news, idx) => <NewsRow key={idx} news={news} />)}
      </div>
    </ContainerLayout>
  );
};
