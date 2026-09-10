import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Moon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      <Switch
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
        className="data-[state=unchecked]:bg-secondary data-[state=checked]:bg-primary"
      />
      <Sun className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
    </div>
  );
}
