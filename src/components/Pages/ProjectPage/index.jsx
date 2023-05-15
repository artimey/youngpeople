import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../../app/api/projects";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { ProjectDescription } from "./ProjectDescription/ProjectDescription";
import { ProjectEvents } from "./ProjectEvents";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectSlider } from "./ProjectSlider";

export const ProjectPage = () => {
  const [project, setProject] = useState({});
  const { projectSlug } = useParams();
  const { data, isLoading } = useGetAllProjectsQuery();

  useEffect(() => {
    if (data && !isLoading) {
      setProject(data[projectSlug]);
    }
  }, [data, isLoading, projectSlug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <ContainerLayout>
        <ProjectHeader title={project.title} />

        <ProjectDescription
          title={project.title}
          logo={project?.logo?.VALUE}
          description={project?.text1?.VALUE?.TEXT}
          projectId={project.id}
          linkSite={project.linkSite}
        />
      </ContainerLayout>

      {project?.slider?.VALUE && (
        <ProjectSlider images={project?.slider?.VALUE} />
      )}

      <ContainerLayout>
        <ProjectEvents eventsText={project?.text2?.VALUE?.TEXT} />
      </ContainerLayout>
    </MainLayout>
  );
};
