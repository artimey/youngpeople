import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetAllProjectsQuery } from '../../../app/api/projects'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';
import { ProjectDescription } from './ProjectDescription';
import { ProjectEvents } from './ProjectEvenets';
import { ProjectHeader } from './ProjectHeader';
import { ProjectSlider } from './ProjectSlider';

export const ProjectPage = () => {
  const [project, setProject] = useState({});
  const { projectSlug } = useParams()
  const { data, isLoading } = useGetAllProjectsQuery();

  useEffect(() => {
    if (data && !isLoading) {
      setProject(data[projectSlug]);
    }
  }, [data, isLoading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
console.log('data',data);
  return (
    <MainLayout>
      <ContainerLayout>
        <ProjectHeader title={project.title} />

        <ProjectDescription
          title={project.title}
          logo={project?.logo?.VALUE} 
          description={project?.text1?.VALUE?.TEXT}
        />
      </ContainerLayout>

      {project?.slider?.VALUE && <ProjectSlider images={project?.slider?.VALUE} />}

      <ContainerLayout>
        <ProjectEvents eventsText={project?.text2?.VALUE?.TEXT} />
      </ContainerLayout>
    </MainLayout>
  )
}
