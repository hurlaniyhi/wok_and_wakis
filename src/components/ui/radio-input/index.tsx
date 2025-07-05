import { CustomContainer } from "@/components/styled-components";
import { CustomSelect, RadioCircle } from '@/components/ui'

interface IRadioInput {
    options: Array<string>,
    input: string,
    onInputChange: (val: string) => void,
    isOpened: boolean,
    onToggle: () => void,
    title: string,
    description?: string,
}

export default function RadioInput ({ options, input, onInputChange, isOpened, onToggle, title, description }: IRadioInput) {

    return (
        <CustomContainer
            data-testid='radio-input'
        >
            <CustomSelect 
                title={title}
                description={description}
                isOpened={isOpened}
                isRequired
                onToggle={onToggle}
            />

            {isOpened && (
                <CustomContainer
                    $topMargin="0.8"
                    $leftPadding="2" $rightPadding="2"
                >
                    { options.map((label, i) => (
                        <label key={i} className="customOption">
                            <RadioCircle 
                                name="egg-style"
                                checked={input === label}
                                onChange={() => onInputChange(label)}
                            />
                            {label}
                        </label>
                    ))}
                </CustomContainer>
            )}
        </CustomContainer>
    )
}