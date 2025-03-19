"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ModeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

interface HeaderProps {
  restaurantName: string
  logoUrl: string
}

export default function Header({ restaurantName, logoUrl }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar errores de hidratación esperando a que el componente esté montado
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-primary shadow-sm" : "bg-primary/90"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden border border-primary-foreground/20">
              <Image
                src={logoUrl || "/placeholder.svg?height=200&width=200"}
                alt={`${restaurantName} logo`}
                fill
                sizes="(max-width: 768px) 3rem, 3.5rem"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl font-medium text-primary-foreground"
            >
              {restaurantName}
            </motion.h1>
            <span className="text-xs text-primary-foreground/80">Menú Digital</span>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <ModeToggle />
        </motion.div>
      </div>
    </motion.header>
  )
}

