import { EditIcon, CartIcon } from "@/components/icons";
import { FlexRow, Button, Text, Span } from "@/components/styled-components";
import { useCartContext } from "@/providers";
import { useState } from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import Cart from "../cart";
import SegmentedButton from "../segmented-button";
import styles from './style.module.scss'

export default function NavMenuItems ({ className }: { className?: string }) {
    const { cart } = useCartContext()
    const [viewCart, setViewCart] = useState<boolean>(false)

    return (
        <>
            <FlexRow
                width="auto" $wUnit=""
                $gap="4"
                data-testid='nav-menu-items'
                className={className && styles[className]}
            >
                <FlexRow 
                    width="auto" $wUnit=""
                    $gap="2.5"
                >
                    <SegmentedButton items={['Delivery', 'Pickup']} />
                    <FlexRow 
                        width="auto" $wUnit=""
                        $gap="0.8"
                    >
                        <MdAccessTimeFilled fill="#08090A" fontSize="2rem"  />
                        <Text 
                            fontFamily="'Manrope', sans-serif"
                            color="#08090A"
                        >
                            ASAP - Ready in 25 - 40 mins
                        </Text>
                        <EditIcon />
                    </FlexRow>
                </FlexRow>
                <Button
                    width="9.2" height="5.6"
                    $bgColor="#08E9E1" radius="0.8"
                    cursor="pointer"
                    onClick={() => setViewCart(!viewCart)}
                >
                    <FlexRow $gap="1" $justifyContent="center">
                        <CartIcon />
                        <Span 
                            $textSize="1.6" fontWeight="700" 
                            color="#08090A" cursor="pointer"
                        >
                            {cart.length}
                        </Span>
                    </FlexRow>
                </Button>
            </FlexRow>
            { viewCart && (<Cart close={() => setViewCart(false)} />)
            }
        </>
    )
}