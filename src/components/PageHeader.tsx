type PageHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-santo-navy via-santo-blue to-santo-light">
      {/* 装飾パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white" />
        <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-white" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="mb-3 text-[12px] font-black tracking-[0.3em] text-white/70">
          {label}
        </p>
        <h1 className="text-4xl font-black tracking-wider text-white sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 h-1 w-16 rounded-full bg-santo-accent" />
        {subtitle && (
          <p className="mt-5 max-w-lg text-[14px] leading-[2] text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
