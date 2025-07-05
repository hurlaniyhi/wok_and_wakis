import { AbsoluteContainer, FlexRow, Button, GridContainer, Span } from "@/components/styled-components";
import { FoodItem } from "@/types";
import { IoRemoveSharp, IoAddSharp } from "react-icons/io5";
import styles from './style.module.scss'

interface IModalActionButtons {
    quantity: number,
    onQuantityChange: (quantity: number) => void,
    onAddCart: () => void,
    item: FoodItem,
}

export default function CartActionButtons ({ quantity, onQuantityChange, onAddCart, item}: IModalActionButtons) {
    
    return (
        <AbsoluteContainer
            $bottom="0" $left="0"
            width="100" $wUnit="%"
        >
            <FlexRow 
                $bgColor="rgba(255, 255, 255, 0.8)"
                $minHeight="8" $leftPadding="2"
                $topPadding="1" $bottomPadding="1.5"
                $rightPadding="2" $gap="2.5"
                className={styles.modalActionButtonContainer}
            >
                <FlexRow 
                    width="auto" $wUnit="" 
                    $gap="1" $leftMargin="2"
                    className="fixed_flex_shape"
                >
                    <Button
                        $bgColor="#08E9E1" radius="10"
                        width="3.6" height="3.6"
                        color="#08090A" $hoverColor="#ffffff"
                        $hoverBgColor="#07121D"
                        disabled={quantity === 1}
                        onClick={() => onQuantityChange(quantity - 1)}
                    >
                        <IoRemoveSharp fontSize='2rem' />
                    </Button>
                    <GridContainer
                        width="4.8" height="4" 
                        $padding="1" $bgColor="#F1F2F4"
                    >
                        <Span 
                            color="#08090A" $textSize="1.6"
                        >
                            {quantity}
                        </Span>
                    </GridContainer>
                    <Button
                        $bgColor="#08E9E1" radius="10"
                        width="3.6" height="3.6"
                        color="#08090A" $hoverColor="#ffffff"
                        $hoverBgColor="#07121D"
                        onClick={() => onQuantityChange(quantity + 1)}
                    >
                        <IoAddSharp fontSize='2rem' />
                    </Button>
                </FlexRow>
                <Button
                    $bgColor="#08E9E1"
                    width="100"  $wUnit="%"
                    height="5.6" $hoverBgColor="#07121D"
                    color="#08090A" $hoverColor="#ffffff"
                    $titleSize="1.6"
                    onClick={onAddCart}
                >
                    Add to cart -${item.price?.toFixed(2)}
                </Button>
            </FlexRow>
        </AbsoluteContainer>
    )
}