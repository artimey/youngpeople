import React from "react";
import { useGetAllProjectsQuery } from "../../../app/api/projects";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";

export const ProjectsPage = () => {
    const {data} = useGetAllProjectsQuery()
    console.log('DATA',data);
  return (
    <MainLayout>
      <ContainerLayout>
        Проекты
      </ContainerLayout>
    </MainLayout>
  );
};
