import { CustomContainer, FlexRow } from "@/components/styled-components";
import { Checkbox, CustomSelect } from '@/components/ui'
import { CheeseOption } from "@/types";

interface ICheckboxInput {
    options: Array<CheeseOption>,
    input: Array<string>,
    onInputChange: (val: string) => void,
    isOpened: boolean,
    onToggle: () => void,
    title: string,
    description?: string,
    additionalParam?: string
}

export default function CheckboxInput ({ 
    options, 
    input, 
    isOpened, 
    title, 
    description, 
    additionalParam,
    onToggle, 
    onInputChange, 
}: ICheckboxInput) {

    return (
        <CustomContainer data-testid='checkbox-input'>
            <CustomSelect 
                title={title}
                description={description}
                isOpened={isOpened}
                onToggle={onToggle}
            />

            {isOpened && (
                <CustomContainer
                    $topMargin="0.8"
                    $leftPadding="2" $rightPadding="2"
                >
                    { options.map((item, i) => (
                        <label key={i} className="checkboxOption">
                            <FlexRow 
                                width="auto" $wUnit="" 
                                $gap="1.5"
                                className="cheeseCheckboxWithName"
                            >
                                <Checkbox
                                    checked={input.includes(item.label)}
                                    onChange={() => onInputChange(item.label)}
                                />
                                <span>{item.label}</span>
                            </FlexRow>
                            { additionalParam && (
                                <span className={`checkboxPrice ${item.highlight ? 'green' : ''}`}>
                                    + {item[additionalParam]}
                                </span>
                            )}
                        </label>
                    ))}
                </CustomContainer>
            )}
        </CustomContainer>
    )
}