import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <header
      className="bg-gradient-to-r from-GRADIENT_FROM via-PRIMARY to-GRADIENT_TO h-2 sticky top-0 md:static md:h-20 flex justify-center items-center"
      role="banner"
      aria-label="사이트 헤더"
    >
      <h1 className="text-2xl hidden md:block font-semibold text-white">{resumeTitle.title}</h1>
    </header>
  );
};

export default ResumeTitle;
