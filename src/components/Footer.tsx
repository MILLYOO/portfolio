import ContactItem from "./ContactItem";

const Footer = ({
  contact,
  name,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer
      className="flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY"
      role="contentinfo"
      aria-label="사이트 푸터"
    >
      <nav aria-label="연락처 링크" className="flex gap-1">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact}>
            {contact.name}
          </ContactItem>
        ))}
      </nav>
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright ${new Date().getFullYear()}. ${name} All rights reserved.`}</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sjoleee/very-simple-portfolio"
          className="hover:text-PRIMARY_HEAVY transition-colors"
        >
          Powered by very-simple-portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
