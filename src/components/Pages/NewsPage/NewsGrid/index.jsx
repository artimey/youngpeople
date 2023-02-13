import ContainerLayout from "../../../Layouts/ContainerLayout/ContainerLayout";
import { NewsGridItem } from "../NewsGridItem";
import { useGetAllNewsQuery } from "../../../../app/api/news";

import styles from "./style.module.scss";

export const NewsGrid = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  return (
    <ContainerLayout>
      <div className={styles.container}>
        {!isLoading &&
          data?.length &&
          data
            .slice(1)
            .map((item) => <NewsGridItem key={item.id} item={item} />)}
      </div>
    </ContainerLayout>
  );
};
