import { FoodItem } from "@/types"
import helpers from "@/utils/helpers"
import { useEffect, useState } from "react"
import { useApi } from "./api"

export function useFoodItems () {
    const { fetchFoods, fetchFoodsState } = useApi()
    const [foodItems, setFoodItems] = useState<Array<FoodItem>>([])
    const [categorizedFoodItems, setCategorizedFoodItems] = useState<Record<string, FoodItem[]>>({})

    useEffect(() => {
        fetchFoodItems()
    }, [])

    async function fetchFoodItems () {
        const response = await fetchFoods()
        if (Array.isArray(response?.data)) {
            setFoodItems(response.data)
        }
    }

    function handleSortFoodItem (selectedTab: string) {
        const sortedFoodItems = helpers.sortFoodItems(selectedTab, foodItems)
        
        setCategorizedFoodItems(sortedFoodItems)
    }

    return { 
        categorizedFoodItems, 
        categories: Object.keys(categorizedFoodItems),
        handleSortFoodItem, 
        isLoading: fetchFoodsState.loading 
    }
}