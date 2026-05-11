import SectionTitle from "../SectionTitle";
import CertificateItem from "./CertificateItem";

import { DataProps } from "@/types";

const Certificate = ({ certificate }: Pick<DataProps, "certificate">) => {
  return (
    <div>
      <SectionTitle>Certificates</SectionTitle>
      <div className="grid grid-cols-3 divide-x divide-GRAY_LIGHT dark:divide-GRAY_EXTRAHEAVY">
        {[...certificate].reverse().map((certificate) => (
          <CertificateItem key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
