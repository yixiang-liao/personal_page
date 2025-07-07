import React, { useState } from "react";
import ProjectBox from "../components/Project_box";
import ProjectModal from "../components/ProjectModal";
import projectfile from "../data/projext.json";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="project-container-wrapper">
        <div className="project-container">
          {projectfile.map((project) => (
            <ProjectBox
              key={project.id}
              image={project.images.cover}
              title={project.project_name}
              type={project.type}
              tags={project.tags}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={Boolean(selectedProject)} // ← 這行很關鍵！
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Project;
