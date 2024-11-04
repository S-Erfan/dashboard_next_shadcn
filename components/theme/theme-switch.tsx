"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const selectedTheme = useMemo(() => theme || "system", [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme !== "light"
                ? "-rotate-90 scale-0"
                : "rotate-0 scale-100"
            )}
          />
          <Moon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme !== "dark"
                ? "rotate-90 scale-0"
                : "rotate-0 scale-100"
            )}
          />
          <Monitor
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme !== "system"
                ? "rotate-90 scale-0"
                : "rotate-0 scale-100"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[6rem]">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="flex justify-start items-center gap-2">
            <Sun size={18} />
            <span>Light</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="flex justify-start items-center gap-2">
            <Moon size={18} />
            <span>Dark</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="flex justify-start items-center gap-2">
            <Monitor size={18} />
            <span>System</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
