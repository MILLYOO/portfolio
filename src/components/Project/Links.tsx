import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";

const Links = ({ repoUrl, webUrl, gitUrl }: { repoUrl: string; webUrl: string | undefined; gitUrl: string; }) => {
  return (
    <div className="contents gap-1 markdown">
      {gitUrl && (
        <p><a target="_blank" rel="noreferrer" href={gitUrl}>
        GitHub Link 🔗
        {/*<GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />*/}
        </a></p>
      )}
      {webUrl && (
        <p><a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          서비스 Link 🔗
          {/*<WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />*/}
        </a></p>
      )}
      {repoUrl && (
        <p><a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
          포트폴리오 Link 🔗
          {/*<WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />*/}
        </a></p>
      )}
    </div>
  );
};

export default Links;
