interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="sm:text-2xl md:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-[10px] sm:text-[12px] md:text-[14px]  text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
