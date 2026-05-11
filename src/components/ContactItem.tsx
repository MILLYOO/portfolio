import { ReactNode } from "react";

const ContactItem = ({
  children,
  isEmail,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  isEmail?: boolean;
  className?: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={isEmail ? `mailto:${href}` : href}
      className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] w-fit"
      aria-label={isEmail ? `이메일: ${href}` : `${children} 링크 (새 탭에서 열림)`}
    >
      <span
        className={`px-2 py-2 text-sm md:text-base dark:text-GRAY_HEAVY hover:text-PRIMARY dark:hover:text-PRIMARY transition-colors ${className}`}
      >
        {children}
      </span>
    </a>
  );
};

export default ContactItem;
