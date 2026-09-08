"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function goTo(href: string) {
    setOpen(false);
    document.body.style.overflow = "";
    window.setTimeout(() => {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-ink/96 text-paper backdrop-blur-md"
          : "border-transparent bg-transparent text-paper",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 md:px-8 lg:px-10">
        <a href="#topo" className="flex min-w-0 items-center gap-4">
          <Image
            src="/brand/mk-white-logo.svg"
            alt="Maria Kerber Clinic"
            width={45}
            height={26}
            className="h-6 w-auto"
            priority
          />
          <span className="hidden h-6 w-px bg-paper/25 sm:block" />
          <span className="hidden font-mono text-[10px] tracking-[0.26em] text-paper/70 uppercase sm:block">
            Máquina de Vendas
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] tracking-[0.2em] text-paper/70 uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-paper/20 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-4 w-4" strokeWidth={1.25} /> : <Menu className="h-4 w-4" strokeWidth={1.25} />}
        </button>
      </div>

      {open ? (
        <div className="min-h-[calc(100dvh-72px)] border-t border-paper/10 bg-ink lg:hidden">
          <nav className="flex flex-col px-5 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-paper/10 py-4 font-mono text-[12px] tracking-[0.22em] uppercase"
                onClick={() => goTo(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
