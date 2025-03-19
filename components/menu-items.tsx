"use client"

import { useState, useEffect } from "react"
import type { MenuItem } from "@/types/menu"
import MenuItemCard from "@/components/menu-item-card"

interface MenuItemsProps {
  items: MenuItem[]
}

export default function MenuItems({ items }: MenuItemsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}