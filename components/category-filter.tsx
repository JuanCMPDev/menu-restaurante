"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="overflow-x-auto pb-4"><div className="flex space-x-3 min-w-max"></div></div>
    }

    return (
        <div className="overflow-x-auto pb-4">
            <div className="flex space-x-3 min-w-max">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-background text-foreground hover:bg-muted"
                        } border ${selectedCategory === category ? "border-primary" : "border-border/40"}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: {
                                delay: 0.1 * categories.indexOf(category),
                                duration: 0.3
                            }
                        }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>
        </div>
    )
}