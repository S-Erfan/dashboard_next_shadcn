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
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/lib/localStorageUtils";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<
    "system" | "dark" | "light"
  >("system");

  useEffect(() => {
    const local = getLocalStorageItem<"system" | "dark" | "light" | null>(
      "theme"
    );

    if (local) {
      setTheme(local);
      setSelectedTheme(local);
    } else {
      setSelectedTheme((theme as "system" | "dark" | "light") || "system");
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme === "light"
                ? "rotate-0 scale-100"
                : "-rotate-90 scale-0"
            )}
          />
          <Moon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme === "dark"
                ? "rotate-0 scale-100"
                : "rotate-90 scale-0"
            )}
          />
          <Monitor
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] transition-all",
              selectedTheme === "system"
                ? "rotate-0 scale-100"
                : "rotate-90 scale-0"
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
