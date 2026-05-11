import React from "react";

import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  const teamProjects = [...project].reverse().filter((p) => !p.isTeam);

  return (
    <div>
      <SectionTitle>Personal Project</SectionTitle>
      <div className="flex flex-col">
        {teamProjects.map((p, index) => (
          <React.Fragment key={p.id}>
            <ProjectItem {...p} />
            {index < teamProjects.length - 1 && (
              <div className="border-b border-GRAY_LIGHT dark:border-GRAY_EXTRAHEAVY mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project;
