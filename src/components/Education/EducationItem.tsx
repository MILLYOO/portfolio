const EducationItem = ({
  name,
  description,
  period,
}: {
  name: string;
  description: string;
  period: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0">
      <div className="flex flex-col gap-1 mr-4 w-48 shrink-0">
        <h3>{name}</h3>
        <span className="text-sm text-GRAY_HEAVY dark:text-GRAY">{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
      </div>
      <div className="md:border-l md:border-GRAY_LIGHT dark:md:border-GRAY_EXTRAHEAVY md:pl-4">
        <span className="whitespace-pre-wrap text-sm">{description}</span>
      </div>
    </div>
  );
};

export default EducationItem;
