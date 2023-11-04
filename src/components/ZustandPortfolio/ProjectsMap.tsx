'use client';

import Card from './Card';
import Loader from './helpers/Loader';
import NotFoundPage from './helpers/NotFoundPage';
import { ProjectsResponse } from '@/types';
import { useProjectsQuery } from '@/hooks/ZustandPortfolio/useZustandProjectsQuery';

const ProjectsMap = () => {
  const { data, isError, isLoading } = useProjectsQuery();

  const projects = data as ProjectsResponse;

  if (isLoading) return <Loader />;
  if (isError) return <NotFoundPage />;

  return (
    <div className="flex flex-col my-10">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 transition-all">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto">
          {projects &&
            projects.projects
              .sort((a, b) => a.order - b.order)
              .map((project) => (
                <Card.NoneClickRoot key={project.id} {...project}>
                  <Card.Actions>
                    <Card.Favorite {...project} />
                  </Card.Actions>

                  <Card.Container>
                    <Card.Title text={project.project_name} />
                    <Card.Actions>
                      <Card.Link text="View Details" href={`/zustand-portfolio/project/${project.id}`} />
                    </Card.Actions>
                  </Card.Container>
                </Card.NoneClickRoot>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMap;
