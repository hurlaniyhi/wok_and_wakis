import { useState } from "react";
import { CustomContainer, FixedContainer, FlexRow } from "@/components/styled-components";
import styles from './style.module.scss'
import { NavMenuItems, NavMenuPopup } from "@/components/ui";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

export default function TopNav () {
    const [showMenuItems, setShowMenuItems] = useState<boolean>(false)

    return (
        <>
            <FixedContainer
                $top="0" $left="0"
                width="100" $wUnit="%"
                $zIndex="5"
                data-testid="nav-container"
            >
                <FlexRow
                    height="8" $bgColor="#ffffff"
                    $leftPadding="2" $rightPadding="2"
                    $justifyContent="space-between"
                    $shadow="0 8px 16px -2px rgba(0,0,0,0.05)"
                    // $shadow="0px 4px 24px 0px #D9E2EC33"
                    $gap="2"
                >
                    <CustomContainer 
                        width="20"
                    >
                        <img 
                            src="/logo.svg" 
                            alt="wok&wakis" 
                        />
                    </CustomContainer>
                    <CustomContainer
                        width="auto" $wUnit=""
                        className={styles.menuItemsWrapper}
                    >
                        <NavMenuItems />
                    </CustomContainer>
                    <CustomContainer
                        width="auto" $wUnit=""
                        className={styles.menuIconWrapper}
                        onClick={() => setShowMenuItems(!showMenuItems)}
                    >
                        { showMenuItems ?
                            <VscChromeClose />
                                : <VscMenu />
                        }
                    </CustomContainer>
                </FlexRow>
            </FixedContainer>
            { showMenuItems &&
                <NavMenuPopup />
            }
        </>
    )
}