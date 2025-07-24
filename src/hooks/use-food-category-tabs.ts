import { useCallback, useEffect } from "react";
import { useFoodCatalogContext } from "@/providers";
import helpers from "@/utils/helpers";

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

export function useFoodCategoryTabs (onTabSelection: (param: string, value: string) => void) {
    const { foodCatalog: { selectedCategory }, updateSelectedCategory } = useFoodCatalogContext()

    useEffect(() => {
        if (!selectedCategory) {
            handleCategorySelection('Popular Items')
        }
    }, [selectedCategory])

    const handleCategorySelection = useCallback((category: string) => {
        updateSelectedCategory(category)
        triggerFoodSearch(category)
    }, [onTabSelection])

    const triggerFoodSearch = (category: string) => {
        const { param, value } = helpers.getFoodSearchQuery(category);
        onTabSelection(param, value);
    };

    return { selectedCategory, handleCategorySelection, tabs }
}
