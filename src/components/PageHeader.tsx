interface PageHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHeader({ label, title, subtitle, bgImage }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/60" />
        </div>
      )}
      {!bgImage && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,24,24,0.12),transparent_60%)]" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="section-label animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          {label}
        </p>
        <h1
          className="heading-1 mt-4 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 text-ink-300 max-w-xl mx-auto text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
