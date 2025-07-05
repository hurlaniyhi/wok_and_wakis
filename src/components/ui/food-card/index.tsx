import { useState } from "react"
import { 
    CustomContainer, 
    Heading5, 
    FlexRow, 
    AbsoluteContainer, 
    Text, 
    Span 
} from "@/components/styled-components"
import { FoodItem } from "@/types"
import styles from './style.module.scss'
import { Modal } from "@/components/ui"

export default function FoodCard ({ foodItem } : { foodItem: FoodItem }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <FlexRow 
                height="14.8"  $gap="2"
                radius="0.4" $borderColor="#D9E2EC"
                $justifyContent="space-between"
                $hoverBorderColor='#08E9E1'
                data-testid='food-card-container'
                onClick={() => setShowModal(true)}
            >
                <CustomContainer 
                    width="auto" $wUnit=""
                    $padding="1.5" $topPadding="2"
                    height="100" $hUnit="%"
                    cursor="pointer"
                >
                    <Heading5 
                        $textSize="1.6" fontWeight="500"
                        cursor="pointer"
                    >
                        {foodItem.title}
                    </Heading5>
                    <Text 
                        $bottomMargin="1" cursor="pointer"
                        className="truncate_multiline"
                    >
                        {foodItem.description}
                    </Text>
                    <AbsoluteContainer 
                        $bottom="2" $left="1.5"
                        className={styles.price_container}
                    >
                        <Span cursor="pointer">${foodItem.price?.toFixed(2)}</Span>
                    </AbsoluteContainer>
                </CustomContainer>
                <CustomContainer 
                    width="14.8" height="14.8"
                    cursor="pointer" $bgColor="#D9E2EC66"
                    className="fixed_flex_shape"
                >
                    <img 
                        src={foodItem.imageUrl} 
                        alt="Food Image" 
                        className="img_covered" 
                    />
                </CustomContainer>
            </FlexRow>
            { showModal && (
                <Modal 
                    item={foodItem}
                    close={() => setShowModal(false)} 
                />
            )}
        </>
    )
}