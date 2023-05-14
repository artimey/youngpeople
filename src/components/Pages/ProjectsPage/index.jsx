import { useEffect } from "react";
import { useGetAllProjectsQuery } from "../../../app/api/projects";
import { dataIsEmpty } from "../../../utils/helpers";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { ProjectsCard } from "../../UiKit/ProjectsCard";
import { ProjectsHeader } from "./ProjectsHeader";

export const ProjectsPage = () => {
  const { data, isLoading, isError } = useGetAllProjectsQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <ContainerLayout>
        <ProjectsHeader />
      </ContainerLayout>
      <div>
        {!isLoading &&
          !isError &&
          dataIsEmpty(data) &&
          Object.keys(data).map((item, idx) => (
            <ProjectsCard
              key={item}
              idx={idx + 1}
              previewText={data[item].previewText}
              title={data[item].title}
              id={item}
              img={data[item].img}
            />
          ))}
      </div>
    </MainLayout>
  );
};
