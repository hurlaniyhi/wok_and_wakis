import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { RadioCircle }  from "@/components/ui"
 
describe('Radio circle', () => {
    it('renders the radio circle', () => {
        render(
            <RadioCircle
                onChange={jest.fn()}
                checked={true}
            />
        )
    
        expect(screen.getByTestId("radio-circle")).toBeInTheDocument();
    });

    it('has the input checked if `checked` is true', () => {
        render(
            <RadioCircle
                onChange={jest.fn()}
                checked={true}
            />
        );

        const input = screen.getByRole('radio');
        expect(input).toBeChecked();
    });
    
     it('calls onChange when clicked', () => {
        const mockHandler = jest.fn();
        render(
            <RadioCircle
                onChange={mockHandler}
                checked={false}
            />
        );

        const input = screen.getByRole('radio');
        fireEvent.click(input);
        expect(mockHandler).toHaveBeenCalledTimes(1);
    });
})