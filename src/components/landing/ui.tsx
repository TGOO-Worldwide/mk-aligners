import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium tracking-[0.28em] text-gold uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "warm" | "gold";
}) {
  const tones = {
    paper: "bg-paper text-ink",
    ink: "bg-ink text-paper",
    warm: "bg-warm text-ink",
    gold: "bg-gold text-ink",
  };

  return (
    <section id={id} className={cn("relative", tones[tone], className)}>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        {children}
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-px bg-line sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 bg-white px-4 py-3.5 text-[15px] leading-snug"
        >
          <span className="mt-0.5 font-mono text-gold" aria-hidden>
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("border border-line bg-white", className)}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "invert";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-gold text-ink hover:bg-gold-light",
    secondary: "border border-current bg-transparent hover:bg-white/8",
    ghost: "border border-line bg-transparent text-ink hover:bg-warm",
    invert: "bg-paper text-ink hover:bg-gold",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-[11px] font-medium tracking-[0.22em] uppercase transition-colors",
        styles[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
