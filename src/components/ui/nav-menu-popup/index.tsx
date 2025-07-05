import { Portal } from "@/components/layouts";
import { CustomContainer, FixedContainer } from "@/components/styled-components";
import { NavMenuItems } from "@/components/ui";
import styles from './style.module.scss'

export default function NavMenuPopup () {

    return (
        <Portal>
            <FixedContainer
                width="35" $top="9"
                $right="1"
                className={styles.navMenuPopupContainer}
            >
                <CustomContainer
                    $minHeight="15" radius="0.8"
                    $bgColor="#ffffff" $padding="2"
                    $shadow="16px 8px 16px 16px rgba(0,0,0,0.05)"
                >
                    <NavMenuItems className="navMenuItemContainer"/>
                </CustomContainer>
            </FixedContainer>
        </Portal>
    )
}