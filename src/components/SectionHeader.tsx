interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export const SectionHeader = ({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => (
  <header className={`mb-14 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
    <span className="section-label">{label}</span>
    <h2 className="section-title mt-3">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </header>
);
