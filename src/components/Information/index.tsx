import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import Image from "next/image";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8" role="region" aria-label="Personal information">
      <div className="relative flex shrink gap-4 md:gap-8 items-start">
        <div className="hidden md:block relative w-40 shrink-0 h-40">
          {information.imgSrc && (
            <Image
              src={information.imgSrc}
              width="400"
              height="400"
              alt={information.name}
              className="relative object-cover rounded-full w-40 h-40 z-20"
            />
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="hidden md:inline-block relative rounded-br-3xl rounded-tr-3xl rounded-bl-3xl z-20 bg-transparent origin-top-left w-fit bg-white dark:bg-BLACK">
            <h1 className="leading-[1.15] text-4xl lg:text-[45px] relative px-4 z-20 inline-block">
              안녕하세요,
              <br /> 풀스택 개발자<br />
              <span className="text-PRIMARY font-semibold">{information.name}</span>
              입니다.
            </h1>
          </div>
          <div className="md:hidden flex items-center justify-between gap-3">
            <h1 className="leading-[1.2] font-semibold text-2xl sm:text-3xl relative z-20 flex-1">
              안녕하세요,
              <br /> 풀스택 개발자<br />
              <span className="text-PRIMARY selection:bg-PRIMARY_LIGHT font-semibold">{information.name}</span>
              입니다.
            </h1>
            {information.imgSrc && (
              <div className="shrink-0">
                <Image
                  src={information.imgSrc}
                  width="300"
                  height="300"
                  alt={`${information.name}의 프로필 사진`}
                  className="object-cover rounded-full w-24 h-24"
                />
              </div>
            )}
          </div>
          <nav aria-label="연락처 링크" className="flex px-4 gap-1 md:px-4 px-0">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </nav>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
