import { 
    CustomContainer, 
    Heading5, 
    Text, 
    FormGroup, 
    FormGroupWithIcon
} from "@/components/styled-components";
import { 
    CustomSelect, 
    ModalActionButtons, 
    ModalContainer, 
    RadioInput, 
    CheckboxInput 
} from "@/components/ui";
import { FiChevronDown } from "react-icons/fi"
import styles from './style.module.scss'
import { Portal } from "@/components/layouts"
import { FoodItem } from "@/types";
import { useModal } from "@/hooks";

interface IModal {
    item: FoodItem,
    close: () => void
}

export default function Modal ({ item, close }: IModal) {
    const {
        openGroup,
        cheeseOptions,
        eggOptions,
        selectedCheeses,
        eggStyle,
        instructions,
        quantity,
        onEggStyleChange,
        onQuantityChange,
        toggleGroup,
        handleCheeseToggle,
        handleInstructions,
        handleAddToCart
    } = useModal(item, close)
    

    return (
        <Portal>
            <ModalContainer 
                title={item.title} 
                close={close}
                data-testid='modal-container'
            >
                <CustomContainer
                    overflow="auto"
                    height="100" $hUnit="%"
                    $bottomPadding="8"
                    className={styles.modalWrapper}
                >
                    <CustomContainer
                        height="30" 
                        $bgColor="#D9E2EC66"
                    >
                        <img 
                            src={item.imageUrl}
                            alt="Food Image" 
                            className="img_covered"
                        />
                    </CustomContainer>
                    <CustomContainer
                        $leftPadding="2" $rightPadding="2"
                        $topMargin="2" 
                    >
                        <Heading5 
                            $textSize="2.4" color="#243B53"
                            $bottomMargin="0.4"
                        >
                            {item.title}
                        </Heading5>
                        <Text>
                            {item.description}
                        </Text>
                    </CustomContainer>

                    <div className={styles.selectableContainer}>
                        {/* Egg Style */}
                        <div className={styles.optionGroup}>
                            <RadioInput 
                                options={eggOptions}
                                input={eggStyle}
                                isOpened={openGroup.eggs}
                                title="Egg Style"
                                description="Select 1"
                                onInputChange={(val) => onEggStyleChange(val)}
                                onToggle={() => toggleGroup('eggs')}
                            />
                        </div>

                        {/* Add Cheese */}
                        <div className={styles.optionGroup}>
                            <CheckboxInput 
                                options={cheeseOptions}
                                input={selectedCheeses}
                                isOpened={openGroup.cheese}
                                title="Add Cheese"
                                description="Select up to 3"
                                onInputChange={(val) => handleCheeseToggle(val)}
                                onToggle={() => toggleGroup('cheese')}
                                additionalParam='price'
                            />
                        </div>

                        {/* Add Instruction */}
                        <div className={styles.optionGroup}>
                            <CustomSelect 
                                title="Special Instructions"
                                description="Leave a note for the kitchen"
                                isOpened={openGroup.instructions}
                                onToggle={() => toggleGroup('instructions')}
                            />

                            { openGroup.instructions && (
                                <form
                                    className={styles.formContainer}
                                >
                                    <FormGroup $bottomMargin="2">
                                        <textarea 
                                            name='kitchenNote' 
                                            placeholder="e.g allergies, extra spicy, etc"
                                            value={instructions.kitchenNote}
                                            onChange={handleInstructions}
                                        />
                                    </FormGroup>

                                    <FormGroupWithIcon >
                                        <label>If sold out,</label>
                                        <div className="input-with-icon">
                                            <select 
                                                name='soldOutOption'
                                                value={instructions.soldOutOption}
                                                onChange={handleInstructions}
                                            >
                                                <option value=''>--- select ---</option>
                                                <option 
                                                    value='Go with merchant recommendation'
                                                >
                                                    Go with merchant recommendation
                                                </option>
                                            </select>
                                            <FiChevronDown className="input-with-icon-tag" />
                                        </div>
                                    </FormGroupWithIcon>
                                </form>
                            )}

                        </div>
                    </div>
                </CustomContainer>
                <ModalActionButtons 
                    quantity={quantity}
                    onQuantityChange={onQuantityChange}
                    onAddCart={handleAddToCart}
                    item={item}
                />
            </ModalContainer>
        </Portal>
    )
}
