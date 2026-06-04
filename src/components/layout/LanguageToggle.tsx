"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang, mounted } = useLanguage();

  if (!mounted) {
    return <div className="w-[60px] h-9" />;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "en" ? "vi" : "en")}
      className="gap-0 px-2 font-medium text-sm"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-foreground" : "text-muted-foreground"}>EN</span>
      <span className="mx-1 text-muted-foreground/50">/</span>
      <span className={lang === "vi" ? "text-foreground" : "text-muted-foreground"}>VI</span>
    </Button>
  );
}
