type PageHeaderProps = {
  label: string;
  title: string;
};

export function PageHeader({ label, title }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-santo-navy">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f2b4a_0%,#1a4f8b_60%,#0f2b4a_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="mb-2 text-[11px] font-black tracking-[0.25em] text-santo-accent">
          {label}
        </p>
        <h1 className="text-3xl font-black tracking-wider text-white sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 h-0.5 w-12 bg-santo-accent" />
      </div>
    </section>
  );
}
