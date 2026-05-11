import { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ProjectProps, WorkExperienceProps } from "@/types";

const ProjectCard = ({
  name,
  description,
  webUrl,
  gitUrl,
  repoUrl,
  period,
  stack,
  markdown,
  imgSrc,
}: ProjectProps) => (
  <div className="rounded-lg border border-GRAY_LIGHT dark:border-GRAY_EXTRAHEAVY bg-GRAY_LIGHT/40 dark:bg-GRAY_EXTRAHEAVY/20 px-4 py-3 flex gap-3">
    {imgSrc && (
      <div className="shrink-0">
        <Image
          src={imgSrc}
          width="120"
          height="120"
          alt={name}
          className="w-14 h-14 object-cover rounded-md border border-GRAY_LIGHT dark:border-GRAY_HEAVY"
        />
      </div>
    )}
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm">
            {webUrl ? (
              <a href={webUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2">
                {name}
              </a>
            ) : name}
          </span>
          <div className="flex gap-2 text-xs">
            {gitUrl && (
              <a href={gitUrl} target="_blank" rel="noopener noreferrer"
                className="text-GRAY_HEAVY dark:text-GRAY hover:text-BLACK dark:hover:text-white transition-colors">
                GitHub ↗
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer"
                className="text-GRAY_HEAVY dark:text-GRAY hover:text-BLACK dark:hover:text-white transition-colors">
                포트폴리오 ↗
              </a>
            )}
          </div>
        </div>
        <span className="text-xs text-GRAY_HEAVY dark:text-GRAY shrink-0">
          {period[0]} — {period[1]}
        </span>
      </div>

      <p className="text-sm text-GRAY_HEAVY dark:text-GRAY leading-relaxed">{description}</p>

      {markdown && (
        <div className="markdown text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      )}

    </div>
  </div>
);

const WorkExperienceItem = ({
  name,
  position,
  period,
  markdown,
  imgSrc,
  introduce,
  title,
  link,
  projects,
}: WorkExperienceProps & { projects?: ProjectProps[] }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 py-6 px-4 rounded-lg hover:bg-GRAY_LIGHT/30 dark:hover:bg-GRAY_EXTRAHEAVY/30 transition-all duration-300">
      {/* 좌측: 회사 로고 + 기본 정보 */}
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6 shrink-0">
        {imgSrc && (
          <div className="w-32 h-14 flex items-center justify-center rounded-lg border border-GRAY_LIGHT dark:border-GRAY_HEAVY bg-white p-2 shrink-0">
            <Image
              src={imgSrc}
              width="200"
              height="80"
              alt={name}
              className="object-contain w-full h-full"
            />
          </div>
        )}
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="font-medium text-GRAY_HEAVY dark:text-GRAY">{position}</span>
            <span className="text-GRAY_HEAVY dark:text-GRAY text-sm">{period[0]} — {period[1]}</span>
          </div>
        </div>
      </div>

      {/* 우측: 회사 설명 + 프로젝트 목록 */}
      <div className="md:border-l md:border-GRAY_LIGHT dark:md:border-GRAY_EXTRAHEAVY md:pl-4 w-full flex flex-col gap-4">
        {/* 회사 설명 */}
        {(introduce || markdown || title) && (
          <div className="markdown">
            {introduce && (
              <div className="items-center gap-4 w-full mb-2 hidden md:flex">
                <div className="h-[1px] bg-GRAY_HEAVY/20 flex-grow" />
                <span className="text-GRAY_HEAVY p-2 text-center italic">{introduce}</span>
              </div>
            )}
            {title && (
              <h4>
                {title}
                {link && (
                  <a href={link} rel="noopener noreferrer" target="_blank"> 서비스 Link 🔗</a>
                )}
              </h4>
            )}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
          </div>
        )}

        {/* 수행 프로젝트 토글 */}
        {projects && projects.length > 0 && (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 w-fit group"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-GRAY_HEAVY dark:text-GRAY group-hover:text-BLACK dark:group-hover:text-white transition-colors">
                수행 프로젝트
              </span>
              <span className="text-xs text-GRAY dark:text-GRAY_HEAVY">
                {projects.length}건
              </span>
              <span className={`text-GRAY_HEAVY dark:text-GRAY text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {open && (
              <div className="flex flex-col gap-2">
                {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
