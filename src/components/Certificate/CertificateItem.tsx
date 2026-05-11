const CertificateItem = ({
  name,
  date,
  organizer,
}: {
  name: string;
  date: string;
  organizer: string;
}) => {
  return (
    <div className="flex flex-col gap-1 items-center text-center px-4">
      <h3>{name}</h3>
      <span className="text-sm text-GRAY_HEAVY dark:text-GRAY">{date}</span>
      <span className="text-sm text-GRAY_HEAVY dark:text-GRAY">{organizer}</span>
    </div>
  );
};

export default CertificateItem;
