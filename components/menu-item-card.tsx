"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { MenuItem } from "@/types/menu"

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md border border-border/50 h-[350px]"></div>
  }

  return (
    <motion.div 
      className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/30 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={item.imageUrl || "/placeholder.svg"} 
          alt={item.name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold font-heading leading-tight">{item.name}</h3>
          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium border border-primary/20 mt-1">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm font-body">{item.description}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full border border-border/20">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}