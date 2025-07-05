import { FoodItem, FoodItemsContextType } from "@/types";
import React, {useContext, useState} from "react";

const FoodItemsContext = React.createContext<FoodItemsContextType|null>(null)

export const FoodItemsProvider = (props: any) => {
    const [foodItems, setFoodItems] = useState<Array<FoodItem>>([])

    function storeFoodItems (items: Array<FoodItem>) {
        setFoodItems(items)
    }

    const stateActions = {
        storeFoodItems
    }

    return (
        <FoodItemsContext.Provider value={{foodItems, ...stateActions}} >
            {props.children}
        </FoodItemsContext.Provider>
    )
}

export const useFoodItemsContext = () => {
    const context = useContext(FoodItemsContext);
    if (!context) throw new Error('useFoodItemsContext must be used within FoodItems Provider');
    return context;
};