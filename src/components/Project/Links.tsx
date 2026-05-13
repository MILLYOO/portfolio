import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";
import DownloadIcon from "@/assets/images/download.svg";

const Links = ({ repoUrl, webUrl, gitUrl }: { repoUrl: string; webUrl: string | undefined; gitUrl: string }) => {
  return (
    <div className="flex gap-3 items-center">
      {gitUrl && (
        <a
          href={gitUrl}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          className="text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT hover:text-PRIMARY dark:hover:text-PRIMARY transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      )}
      {webUrl && (
        <a
          href={webUrl}
          target="_blank"
          rel="noreferrer"
          title="서비스 링크"
          className="text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT hover:text-PRIMARY dark:hover:text-PRIMARY transition-colors"
        >
          <WebIcon className="w-5 h-5" />
        </a>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          title="포트폴리오"
          className="text-GRAY_EXTRAHEAVY dark:text-GRAY_LIGHT hover:text-PRIMARY dark:hover:text-PRIMARY transition-colors"
        >
          <DownloadIcon className="w-5 h-5" />
        </a>
      )}
    </div>
  );
};

export default Links;
