import ContainerLayout from "../../../Layouts/ContainerLayout/ContainerLayout";
import { NewsGridItem } from "../NewsGridItem";
import { useGetAllNewsQuery } from "../../../../app/api/news";

import styles from "./style.module.scss";
import { newsTransformer } from "../../../../utils/transformers/news";

export const NewsGrid = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  return (
    <ContainerLayout>
      <div className={styles.container}>
        {!isLoading &&
          newsTransformer(data)?.length &&
          newsTransformer(data)
            .slice(1)
            .map((item) => <NewsGridItem key={item.id} item={item} />)}
      </div>
    </ContainerLayout>
  );
};
