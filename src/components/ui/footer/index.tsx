import { CustomLink, FlexRow, Text } from "@/components/styled-components";
import { MakerLogo } from "@/components/icons";
import styles from './style.module.scss'

export default function Footer () {

    return (
        <footer
            data-testid='footer-container'
        >
            <FlexRow 
                $justifyContent="space-between"
                $minHeight="6" $bgColor="#ffffff"
                $padding="1" $leftPadding="2.5"
                $rightPadding="2.5" $gap="2"
                wrap="wrap"
                className={styles.footerContainer}
            >
                <FlexRow 
                    width="auto" $wUnit=""
                    $gap="1.5"
                >
                    <Text 
                        color="#243B53" 
                        fontWeight="500"
                    >
                        &copy; 2020 Delo
                    </Text>
                    <CustomLink 
                        color="#06ADA8" fontWeight="500"
                        $hoverColor="#627D98"
                        href="#"
                    >
                        Terms of service
                    </CustomLink>
                    <CustomLink 
                        color="#06ADA8" fontWeight="500"
                        $hoverColor="#627D98"
                        href="#"
                    >
                        Privacy
                    </CustomLink>
                </FlexRow>
                <FlexRow
                    width="auto" $wUnit=""
                    $gap="0.5"
                    className={styles.poweredByConatiner}
                >
                    <Text 
                        fontWeight="600" $textSize="1.3"
                        color="#627D98"
                    >
                        Powered by
                    </Text>
                    <MakerLogo />
                </FlexRow>
            </FlexRow>
        </footer>
    )
}