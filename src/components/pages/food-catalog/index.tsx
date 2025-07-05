import {
    AbsoluteContainer, 
    CustomContainer, 
    CustomLink, 
    FlexRow, 
    GridContainer, 
    Heading4, 
    Text 
} from "@/components/styled-components";
import { FoodItems } from "@/components/ui";
import styles from './style.module.scss'

export default function FoodCatalog () {

    return (
        <CustomContainer
            $topMargin="8" //$bottomMargin="2"
        >
            <CustomContainer
                height="36" 
            >
                <img 
                    src="/brand-bg.svg" alt="Logo" 
                    className="img_covered"
                />
                <AbsoluteContainer 
                    width="48"
                    $bottom="0" $left="2.5"
                    className={styles.about_company_container}
                >
                    <CustomContainer
                        $padding="2" $bgColor="#ffffff"
                        $minHeight="16"
                    >
                        <Heading4 $textSize="2.4" fontWeight="600">
                            Kings Family Restaurant - Butler
                        </Heading4>
                        <FlexRow 
                            $gap="1" $bottomPadding="0.5" 
                            wrap="wrap"
                        >
                            <Text fontWeight="500">
                                1322 Lazy Alley, Philadelphia, CA 30203, USA
                            </Text>
                            <CustomLink fontWeight="600" href="" >More info</CustomLink>
                        </FlexRow>
                        <Text 
                            fontWeight="500" color="#627D98" 
                            $bottomPadding="0.5"
                        >
                            Bakery - Breakfast & Brunch - Cafe - Coffees
                        </Text>
                        <FlexRow $gap="1" wrap="wrap">
                            <Text fontWeight="500">
                                Open Hours: 8:30 AM - 7:00 PM
                            </Text>
                            <GridContainer
                                $minWidth="4.9" height="2.5"
                                width="auto" $sizeUnit="" 
                                $bgColor="#BEFDFB" radius="0.4"
                                $padding="0.2"
                            >
                                <Text fontFamily="'Manrope', sans-serif" fontWeight="600">Open</Text>
                            </GridContainer>
                        </FlexRow>
                    </CustomContainer>
                </AbsoluteContainer>
            </CustomContainer>

            <CustomContainer $topMargin="5">
                <FoodItems />
            </CustomContainer>
        </CustomContainer>
    )
}
