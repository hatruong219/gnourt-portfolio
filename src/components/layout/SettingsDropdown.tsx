"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Monitor, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SettingsDropdown() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, mounted } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setLang("en")}>
            {mounted && lang === "en" && <Check className="h-3.5 w-3.5" />}
            {(!mounted || lang !== "en") && <span className="h-3.5 w-3.5" />}
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLang("vi")}>
            {mounted && lang === "vi" && <Check className="h-3.5 w-3.5" />}
            {(!mounted || lang !== "vi") && <span className="h-3.5 w-3.5" />}
            Tiếng Việt
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            {theme === "light" ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Sun className="h-3.5 w-3.5" />
            )}
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {theme === "dark" ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            {theme === "system" ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Monitor className="h-3.5 w-3.5" />
            )}
            System
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
