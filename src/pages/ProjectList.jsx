// src/components/ProjectList.js
import React, { useEffect } from 'react';
import useProjectStore from '../store/useProjectStore';

const ProjectList = () => {
  const { projects, isLoading, error, fetchProjects } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (isLoading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.project_name}</h2>
            <p>Start Date: {project.start_date}</p>
            <p>End Date: {project.end_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
