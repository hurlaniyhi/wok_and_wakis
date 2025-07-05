import { useState } from "react";
import { FlexRow, CustomContainer, AbsoluteContainer, Text } from "@/components/styled-components";

export default function SegmentedButton ({ items }: {items: Array<string> }) {
    const [selectedItem, setSelectedItem] = useState(items[0])

    return (
        <FlexRow 
            width="20" height="3.6"
            radius="3.2" $bgColor="#F1F2F4"
        >
            {
                items.map((item, index) => {
                    return (
                        <CustomContainer
                            width="50" $wUnit="%"
                            $zIndex='2' cursor="pointer"
                            key={index}
                            onClick={() => setSelectedItem(item)}
                        >
                            <Text 
                                cursor="pointer"
                                $align="center" fontFamily="'Manrope', sans-serif"
                                color={selectedItem === item ? "#ffffff" : "#08090A"}
                            >
                                {item}
                            </Text>
                        </CustomContainer>
                    )
                })
            }
            <AbsoluteContainer
                $top="0" $lSizeUnit="%"
                $left={selectedItem === items[0] ? '0' : '50'}
                radius="3.2" $bgColor="#08090A"
                width="50" $wUnit="%"
                height="full" 
            />
        </FlexRow>
    )
}