import React, { useState, useEffect, useRef } from "react";
import ProjectBox from "../components/Project_box";
import ProjectModal from "../components/ProjectModal";
import projectfile from "../data/projext.json";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null); // 用來抓取 project-container

  useEffect(() => {
    // 等 DOM render 完再操作
    const updateLastLine = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(container.children);
      if (items.length === 0) return;

      // 先移除舊的 .last-line
      items.forEach((el) => el.classList.remove("last-line"));

      // 找出最後一行的 offsetTop
      const lastOffsetTop = items[items.length - 1].offsetTop;

      // 加上 .last-line class
      items.forEach((el) => {
        if (el.offsetTop === lastOffsetTop) {
          el.classList.add("last-line");
        }
      });
    };

    // 初始執行 + resize 時更新
    updateLastLine();
    window.addEventListener("resize", updateLastLine);
    return () => window.removeEventListener("resize", updateLastLine);
  }, [projectfile]);

  return (
    <div className="project" id="projects">
      <h1>Projects</h1>
      <div className="project-container-wrapper">
        <div className="project-container" ref={containerRef}>
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
          open={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Project;
