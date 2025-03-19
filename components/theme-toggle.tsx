"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <div className="relative">
        <Sun 
          className={`h-5 w-5 transition-all duration-300 ${
            theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`} 
        />
        <Moon 
          className={`absolute top-0 left-0 h-5 w-5 transition-all duration-300 ${
            theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`} 
        />
      </div>
    </motion.button>
  )
}
