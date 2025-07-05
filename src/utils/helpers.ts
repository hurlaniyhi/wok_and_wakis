import { FoodItem } from "@/types"

const sortFoodItems = (category: string, items: Array<FoodItem>) => {
    const grouped: Record<string, FoodItem[]> = {};
  
    const addToGroup = (key: string, item: FoodItem) => {
        if (!grouped[key]) {
            grouped[key] = [item];
        } else {
            grouped[key].push(item);
        }
    };
  
    for (const item of items) {
        if (category === 'Popular Items') {
            addToGroup(item.category, item);
    
            if (item.isPopular) {
                addToGroup('Popular Items', item);
            }
        } else if (item.category === category) {
            addToGroup(item.category, item);
        }
    }
  
    // Ensure "Popular Items" is first if it exists
    if ('Popular Items' in grouped) {
        const { ['Popular Items']: popularItems, ...rest } = grouped;
        
        return {
            'Popular Items': popularItems,
            ...rest,
        };
    }
  
    return grouped;
};

const wait = (time: number) => new Promise(res => setTimeout(res, time))

export default {
    sortFoodItems,
    wait
}