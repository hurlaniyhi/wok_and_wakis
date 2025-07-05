import { CustomContainer, FlexColumn, Heading5, Text } from "@/components/styled-components"
import { FoodCard, FoodCategoryTabs } from "@/components/ui"
import { useFoodItems } from "@/hooks"
import { FoodItem } from "@/types"
import FoodItemSkeleton  from "@/components/feedback/loader/food-item-skeleton"
import { Fragment } from "react"

export default function FoodItems () {
    const { 
        categorizedFoodItems, 
        categories, 
        handleSortFoodItem, 
        isLoading 
    } = useFoodItems()

    return (
        <Fragment> 
            {
                isLoading ?
                    <FoodItemSkeleton />
                    :
                        (
                            <CustomContainer 
                                $leftPadding="2.5" $rightPadding="2.5"
                            >
                                <FoodCategoryTabs onTabSelection={handleSortFoodItem} />
                                <CustomContainer 
                                    $topMargin="3"
                                    className="min-h-[calc(100vh-62.1rem)]"
                                >
                                    { categories?.length ?
                                        (
                                            categories?.map((item, index) => {
                                                return (
                                                    <CustomContainer 
                                                        $bottomMargin="4"
                                                        key={index}
                                                    >
                                                        <CustomContainer $bottomMargin="2.5">
                                                            <Heading5 $textSize="2" fontWeight="600">{item}</Heading5>
                                                            { item === 'Popular Items' &&
                                                                (
                                                                    <Text fontWeight="500" color="#627D98">
                                                                        The most commonly ordered items and dishes from this store
                                                                    </Text>
                                                                )
                                                            }
                                                        </CustomContainer>
                                                        <div className="grid-wrapper">
                                                            {
                                                                categorizedFoodItems[item]?.map((foodItem: FoodItem, foodIndex: number) => {
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
                                                )
                                            })
                                        )
                                        :
                                        <FlexColumn 
                                            className="min-h-[calc(100vh-62.1rem)]"
                                        >
                                            <Text $textSize="2">No Food Items</Text>
                                        </FlexColumn>
                                    }
                                </CustomContainer>
                            </CustomContainer>
                        )
            }
        </Fragment>
    )
}