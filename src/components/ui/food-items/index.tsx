import { CustomContainer, FlexColumn, Heading5, Text } from "@/components/styled-components"
import { FoodCard, FoodCategoryTabs } from "@/components/ui"
import { useFoodItems } from "@/hooks"
import { FoodItem } from "@/types"
import FoodItemSkeleton  from "@/components/feedback/loader/food-item-skeleton"

export default function FoodItems () {
    const {
        selectedCategory, 
        foodItems,
        isLoading,
        searchFoodItems, 
    } = useFoodItems()

    return (
        <CustomContainer 
            $leftPadding="2.5" $rightPadding="2.5"
        >
            <FoodCategoryTabs onTabSelection={searchFoodItems} />
            {
                isLoading ?
                    <FoodItemSkeleton />
                    :
                        (
                            <CustomContainer 
                                $topMargin="3"
                                className="min-h-[calc(100vh-62.1rem)]"
                            >
                                { !!foodItems?.length ?
                                    <CustomContainer 
                                        $bottomMargin="4"
                                    >
                                        <CustomContainer $bottomMargin="2.5">
                                            <Heading5 $textSize="2" fontWeight="600">{selectedCategory}</Heading5>
                                            { selectedCategory === 'Popular Items' &&
                                                (
                                                    <Text fontWeight="500" color="#627D98">
                                                        The most commonly ordered items and dishes from this store
                                                    </Text>
                                                )
                                            }
                                        </CustomContainer>
                                        <div className="grid-wrapper">
                                            {
                                                foodItems?.map((foodItem: FoodItem, foodIndex: number) => {
                                                    return (
                                                        <FoodCard 
                                                            foodItem={foodItem}
                                                            key={foodIndex}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </CustomContainer>
                                    :
                                    <FlexColumn 
                                        className="min-h-[calc(100vh-62.1rem)]"
                                    >
                                        <Text $textSize="2">No Food Items</Text>
                                    </FlexColumn>
                                }
                            </CustomContainer>
                        )
            }
        </CustomContainer>
    )
}