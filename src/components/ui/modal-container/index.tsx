import { 
    AbsoluteContainer, 
    CustomContainer, 
    FixedContainer, 
    FlexRow, 
    Heading5 
} from "@/components/styled-components";
import { CloseIcon } from "@/components/icons";
import styles from './style.module.scss'
import { JSX } from "react";
import { useModalContainer } from "@/hooks";

interface IModalContainer {
    children: JSX.Element | React.ReactNode;
    title?: string,
    close: () => void
}

export default function ModalContainer ({ children, title, close }: IModalContainer) {
    const { isHover, setIsHover, handleModalClose } = useModalContainer(close)

    return (
        <FixedContainer 
            width="100" $wUnit="%"
            height="full"  $zIndex="10"
            $bgColor="rgba(0,0,0,0.5)"
            $top="0" $left="0"
            className={styles.modalContainer}
            onClick={handleModalClose}
        >
            <CustomContainer
                width='60' height="72"
                radius="1.2" $bgColor="#ffffff"
                //$bottomPadding="2"
                className={styles.modalContentContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <AbsoluteContainer
                    $top="0" $left="0"
                    width="100" $wUnit="%"
                    $zIndex="2"
                >
                    <FlexRow 
                        $gap="2" height="6" 
                        $bgColor="#ffffff"
                        $leftPadding="2" $rightPadding="2"
                        $shadow="0 8px 16px -2px rgba(0,0,0,0.05)"
                        //$shadow="0px 4px 24px 0px #D9E2EC33"
                    >
                        <CustomContainer
                            width="auto" $wUnit=""
                            cursor="pointer"
                            onClick={handleModalClose}
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <CloseIcon
                                isHover={isHover}
                            />
                        </CustomContainer>
                        <Heading5 
                            $textSize="2" fontWeight="600" 
                            color="#243B53" 
                        >
                            {title}
                        </Heading5>
                    </FlexRow>
                </AbsoluteContainer>

                <CustomContainer 
                    overflow="auto" $topPadding="6"
                    height="100" $hUnit="%"
                >
                    {children}
                </CustomContainer>
            </CustomContainer>
        </FixedContainer>
    )
}