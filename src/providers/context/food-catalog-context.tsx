import React, {useContext, useState} from "react";
import { FoodCatalog, FoodItem, FoodCatalogContextType } from "@/types";


const FoodCatalogContext = React.createContext<FoodCatalogContextType|null>(null)

export const FoodCatalogProvider = (props: any) => {
    const [foodCatalog, setFoodCatalog] = useState<FoodCatalog>({foodItems: [], selectedCategory: ''})

    function storeFoodItems (items: Array<FoodItem>) {
        setFoodCatalog((prev) => {
            return {...prev, foodItems: items}
        })
    }

    function updateSelectedCategory (selectedCategory: string) {
        setFoodCatalog((prev) => {
            return {...prev, selectedCategory}
        })
    }

    const stateActions = {
        storeFoodItems,
        updateSelectedCategory
    }

    return (
        <FoodCatalogContext.Provider value={{foodCatalog, ...stateActions}} >
            {props.children}
        </FoodCatalogContext.Provider>
    )
}

export const useFoodCatalogContext = () => {
    const context = useContext(FoodCatalogContext);
    if (!context) throw new Error('useFoodCatalogContext must be used within FoodItems Provider');
    return context;
};