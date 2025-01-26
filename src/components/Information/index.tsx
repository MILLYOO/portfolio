import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";
import Image from "next/image";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex shrink gap-8 items-start">
        <div className="hidden md:block relative w-40 shrink-0 h-40">
          {information.imgSrc && (
            <Image
              src={information.imgSrc}
              width="400"
              height="400"
              alt={information.name}
              className="relative object-cover rounded-full border-[1px] border-GRAY_LIGHT border-solid w-40 h-40 z-20"
            />
          )}
        </div>
        <h1 className="flex flex-col w-full">
          안녕하세요,
          <br /> 풀스택 개발자{" "}
          <span className="text-PRIMARY font-semibold">{information.name}</span>
          입니다.
        </h1>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
