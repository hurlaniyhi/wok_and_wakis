import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { RadioInput }  from "@/components/ui"
import { eggOptions } from '@/lib/constants'
import userEvent from '@testing-library/user-event'
 
describe('Radio Input', () => {
    it('renders the radio input', () => {
        render(
            <RadioInput
                options={eggOptions}
                input='Over Hard'
                onInputChange={jest.fn()}
                isOpened={true}
                onToggle={jest.fn()}
                title=''
            />
        )
    
        expect(screen.getByTestId("radio-input")).toBeInTheDocument();
    });

    it('renders all radio options', () => {
        render(
            <RadioInput
                options={eggOptions}
                input='Over Hard'
                onInputChange={jest.fn()}
                isOpened={true}
                onToggle={jest.fn()}
                title=''
            />
        );
    
        eggOptions.forEach((option) => {
            expect(screen.getByLabelText(option)).toBeInTheDocument();
        });
    });

    it('marks the selected option as checked', () => {
        render(
            <RadioInput
                options={eggOptions}
                input='Over Hard'
                onInputChange={jest.fn()}
                isOpened={true}
                onToggle={jest.fn()}
                title=''
            />
        );
    
        const radio = screen.getByLabelText("Over Hard") as HTMLInputElement;
        expect(radio.checked).toBe(true);
    });

    it('calls onInputChange when a different radio is selected', async () => {
        const user = userEvent.setup();
        const mockChange = jest.fn();
    
        render(
            <RadioInput
                options={eggOptions}
                input='Over Hard'
                onInputChange={mockChange}
                isOpened={true}
                onToggle={jest.fn()}
                title=''
            />
        );
    
        const newOption = eggOptions.find(opt => opt !== 'Over Hard');
        await user.click(screen.getByLabelText(newOption!));
        expect(mockChange).toHaveBeenCalledTimes(1);
    });

    it('does not render options when isOpened is false', () => {
        render(
            <RadioInput
                options={eggOptions}
                input='Over Hard'
                onInputChange={jest.fn()}
                isOpened={false}
                onToggle={jest.fn()}
                title=''
            />
        );
    
        eggOptions.forEach((option) => {
            expect(screen.queryByLabelText(option)).not.toBeInTheDocument();
        });
    });
})