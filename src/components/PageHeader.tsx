type PageHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
  imageLayout?: "background" | "right";
  tall?: boolean;
  largeSubtitle?: boolean;
  children?: React.ReactNode;
};

export function PageHeader({ label, title, subtitle, image, imagePosition = "center", imageLayout = "background", tall = false, largeSubtitle = false, children }: PageHeaderProps) {
  const hasBackgroundImage = image && imageLayout === "background";
  const hasRightImage = image && imageLayout === "right";

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-santo-navy via-santo-blue to-santo-light ${hasBackgroundImage ? "min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]" : ""}`}>
      {/* 背景画像（backgroundモード） */}
      {hasBackgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${image}')`, backgroundPosition: `center ${imagePosition}` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-santo-navy/90 via-santo-navy/65 to-santo-navy/30" />
        </>
      )}

      {/* 装飾パターン（背景画像がない場合のみ表示） */}
      {!hasBackgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white" />
          <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-white" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center ${hasRightImage ? "justify-between gap-8" : ""}`}>
          {/* テキスト */}
          <div className={tall ? "py-24 sm:py-32 lg:py-40" : "py-16 sm:py-24 lg:py-28"}>
            <p className="mb-3 text-[14px] font-black tracking-[0.3em] text-white/70">
              {label}
            </p>
            <h1 className="text-3xl font-black tracking-wider text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <div className="mt-5 h-1 w-16 rounded-full bg-santo-accent" />
            {subtitle && (
              <p className={`mt-5 max-w-lg font-bold leading-[2] text-white/70 drop-shadow-md ${largeSubtitle ? "text-[16px] sm:text-[22px] lg:text-[24px]" : "text-[15px] sm:text-[18px]"}`}>
                {subtitle}
              </p>
            )}
            {children}
          </div>

          {/* 右側画像（rightモード） */}
          {hasRightImage && (
            <div className="hidden lg:block shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="h-60 w-72 rounded-xl object-cover shadow-2xl xl:h-72 xl:w-80"
                style={{ objectPosition: imagePosition }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
