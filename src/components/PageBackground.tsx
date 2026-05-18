export const PageBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-mesh" />
    <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.18]" />
    <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px] animate-float" />
    <div
      className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[110px] animate-float"
      style={{ animationDelay: "1.5s" }}
    />
    <div
      className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] animate-float"
      style={{ animationDelay: "3s" }}
    />
    <div className="absolute inset-0 grain" />
  </div>
);
