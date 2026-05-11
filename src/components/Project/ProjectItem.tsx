import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Links from "./Links";

import { ProjectProps } from "@/types";

const ProjectItem = ({
  name,
  description,
  repoUrl,
  webUrl,
  gitUrl,
  period,
  markdown,
  imgSrc,
}: ProjectProps) => {
  return (
    <article
      className="flex flex-col sm:flex-row md:flex-row gap-4 sm:gap-6 py-6 px-4 rounded-lg hover:bg-GRAY_LIGHT/30 dark:hover:bg-GRAY_EXTRAHEAVY/30 transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
          {imgSrc && (
            <div className="overflow-hidden rounded-lg">
              <Image
                src={imgSrc}
                width="200"
                height="200"
                alt={name}
                className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-GRAY_HEAVY border-solid w-24 h-24 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <div className="w-48">
              <h3 className="group-hover:text-PRIMARY transition-colors">{name}</h3>
              <div className="flex flex-col">
                <span className="text-GRAY_HEAVY dark:text-GRAY">{`${period[0]} - ${period[1]}`}</span>
              </div>
            </div>
            <Links repoUrl={repoUrl} webUrl={webUrl} gitUrl={gitUrl} />
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown flex flex-col w-full gap-2">
        <div>
          <blockquote className="whitespace-pre-wrap">{`${description}`}</blockquote>
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ProjectItem;
