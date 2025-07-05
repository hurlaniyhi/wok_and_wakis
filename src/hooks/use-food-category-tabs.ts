import { useFoodItemsContext } from "@/providers";
import { useEffect, useState } from "react";

const tabs = [
    "Popular Items", 
    "Wings & Tenders", 
    "Popcorn Chicken", 
    "Mix & Match Combos", 
    "Fish & Shrimp", 
    "Sandwiches", 
    "Drinks",
    "Party Trays",
    "Kid’s Menu",
    "Sides"
]

export function useFoodCategoryTabs (onTabSelection: (selectedTab: string) => void) {
    const { foodItems } = useFoodItemsContext()
    const [selectedCategory, setSelectedCategory] = useState<string>("Popular Items")

    useEffect(() => {
        onTabSelection(selectedCategory)
    }, [foodItems])

    const handleCategorySelection = (category: string) => {
        setSelectedCategory(category)
        onTabSelection(category)
    }

    return { selectedCategory, handleCategorySelection, tabs }
}