"use client"

import React, { useState, useEffect } from "react"
import { MenuItem } from "@/types/menu"
import CategoryFilter from "@/components/category-filter"
import MenuItems from "@/components/menu-items"

interface MenuContainerProps {
    menuData: {
        categories: string[],
        items: MenuItem[]
    }
}

export default function MenuContainer({ menuData }: MenuContainerProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
    const [mounted, setMounted] = useState(false)

    // Prevenir errores de hidratación
    useEffect(() => {
        setMounted(true)
    }, [])

    const filterItems = (render: (items: MenuItem[]) => React.ReactNode) => {
        const filteredItems =
        selectedCategory === "Todos"
        ? menuData.items
        : menuData.items.filter((item) => item.category === selectedCategory)

        return render(filteredItems)
    }

    if (!mounted) {
        return <div className="space-y-12"></div>
    }

    return (
        <div className="space-y-12">
            <div className="relative">
                <h2 className="text-2xl font-bold mb-6 text-primary inline-block relative">
                    Categorías
                    <span className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-primary/30 rounded-full"></span>
                </h2>
                <CategoryFilter
                    categories={["Todos", ...menuData.categories]}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>
            
            <div className="relative">
                <h2 className="text-2xl font-bold mb-6 text-primary inline-block relative">
                    {selectedCategory === "Todos" ? "Todos los Platos" : `Platos de ${selectedCategory}`}
                    <span className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-primary/30 rounded-full"></span>
                </h2>
                <div className="bg-background/50 rounded-lg p-6 shadow-sm border border-border/40">
                    {filterItems((items) => (
                        <MenuItems items={items} />
                    ))}
                </div>
            </div>
        </div>
    )
}