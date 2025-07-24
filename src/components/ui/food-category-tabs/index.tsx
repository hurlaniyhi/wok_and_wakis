import { MenuIcon } from "@/components/icons"
import { CustomContainer, FlexRow, Button, AbsoluteContainer } from "@/components/styled-components"
import styles from '@/components/pages/food-catalog/style.module.scss'
import { useFoodCategoryTabs } from "@/hooks"

export default function FoodCategoryTabs ({ onTabSelection }: { onTabSelection: (param: string, value: string) => void }) {
    const { tabs, selectedCategory, handleCategorySelection } = useFoodCategoryTabs(onTabSelection)

    return (
        <CustomContainer 
            className={styles.category_tab_container}
            data-testid='food-category-tabs'
        >
            <FlexRow 
                $gap="2.5" 
                style={{minWidth: 'fit-content'}}
            >
                <MenuIcon />
                {tabs.map((item, index) => {
                    const isActive = selectedCategory === item
                    
                    return (
                        <CustomContainer 
                            width="auto" $wUnit=""
                            key={index}
                        >
                            <Button
                                width="auto" $wUnit=""
                                $bgColor="transparent"
                                height="4" color="#07121D"
                                cursor="pointer"
                                className={isActive ? 'active' : ''}
                                data-testid={isActive ? 'active-tab' : undefined}
                                onClick={() => handleCategorySelection(item)}
                            >
                                {item}
                            </Button>
                            { selectedCategory === item &&
                                (
                                    <AbsoluteContainer 
                                        width="100" $wUnit="%"
                                        $bottom="0" $left="0"
                                        height="0.4" $bgColor={selectedCategory === item ? "#07121D" : 'none'}
                                        radius="0.4"
                                    />
                                )
                            }
                        </CustomContainer>
                    )
                })}
            </FlexRow>
        </CustomContainer> 
    )
}