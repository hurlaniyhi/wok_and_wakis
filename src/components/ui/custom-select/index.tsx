import { Circle, CustomContainer, FlexRow, Heading5, Text, Span } from "@/components/styled-components";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import styles from './style.module.scss'

interface ICustomSelect {
    isOpened: boolean,
    onToggle: () => void,
    title: string,
    description?: string,
    isRequired?: boolean
}

export default function CustomSelect ({ isOpened, onToggle, title, description, isRequired }: ICustomSelect) {

    return (
        <FlexRow 
            $bgColor="#eef2f6" $justifyContent="space-between"
            wrap="wrap" $padding="2"
            $topPadding="1" $bottomPadding="1"
            onClick={onToggle}
            data-testid='custom-select'
        >
            <CustomContainer width="auto" $wUnit="">
                <FlexRow width="auto" $wUnit="" $gap="1">
                    <Heading5
                        $textSize="1.8" fontWeight="500"
                        cursor="pointer"
                    >
                        {title}
                    </Heading5>
                    { isRequired && (
                        <Span 
                            className={styles.requiredField}
                            $bgColor='#FFD60A' color="#24292D"
                            radius="2" $textSize="1.3"
                            fontWeight="600" $padding="0.2"
                            $leftPadding="0.6" $rightPadding="0.6"
                            cursor="pointer"
                        >
                            Required
                        </Span>
                    )}
                </FlexRow>
                <Text 
                    color="#334E68" fontWeight="500"
                    cursor="pointer"
                >
                    {description || ''}
                </Text>
            </CustomContainer>
            <Circle 
                size="3.2" $bgColor="#ffffff"
            >
                { isOpened ?
                    <MdKeyboardArrowDown fill="#08090A" fontSize="2rem" />
                    :
                    <MdKeyboardArrowRight fill="#08090A" fontSize="2rem" />
                }
            </Circle>
        </FlexRow>
    )
}