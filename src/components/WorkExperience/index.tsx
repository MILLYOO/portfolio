import React from "react";

import SectionTitle from "../SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

import { DataProps } from "@/types";

const WorkExperience = ({ workExperience, project }: Pick<DataProps, "workExperience" | "project">) => {
  const items = [...workExperience].reverse();
  return (
    <div>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="flex flex-col">
        {items.map((experience, index) => {
          const relatedProjects = [...project]
            .filter((p) => p.companyId === experience.id)
            .reverse();
          return (
            <React.Fragment key={experience.id}>
              <WorkExperienceItem {...experience} projects={relatedProjects} />
              {index < items.length - 1 && (
                <div className="border-b border-GRAY_LIGHT dark:border-GRAY_EXTRAHEAVY mx-4 my-2" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
