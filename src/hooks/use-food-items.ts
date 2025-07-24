import { useFoodCatalogContext } from "@/providers"
import { FoodItem } from "@/types"
import { useState } from "react"
import { useApi } from "./api"

export function useFoodItems () {
    const { foodCatalog: { selectedCategory } } = useFoodCatalogContext()
    const { fetchFoods, fetchFoodsState, searchFoods, searchFoodsState } = useApi()
    const [foodItems, setFoodItems] = useState<Array<FoodItem>>([])

    // async function fetchFoodItems () {
    //     const response = await fetchFoods()
    //     if (Array.isArray(response?.data)) {
    //         setFoodItems(response.data)
    //     }
    // }

    async function searchFoodItems (param: string, value: string) {
        const response = await searchFoods(param, value)
        if (Array.isArray(response?.data)) {
            setFoodItems(response.data)
        }
    }

    return { 
        searchFoodItems,
        foodItems,
        selectedCategory,
        isLoading: fetchFoodsState.loading || searchFoodsState.loading
    }
}