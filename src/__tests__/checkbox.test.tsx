import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from '@/components/ui'
 
describe('Checkox', () => {
    it('renders checkbox', () => {
        render(
            <Checkbox 
                checked={true}
                onChange={jest.fn()}
            />
        )
        expect(screen.getByTestId("checkbox-container")).toBeInTheDocument();
    });

    it('reflects checked state properly', () => {
        render(
            <Checkbox 
                checked={true}
                onChange={jest.fn()}
            />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('calls onChange handler when clicked', () => {
        const onChangeMock = jest.fn();
        render(
            <Checkbox 
                checked={false}
                onChange={onChangeMock}
            />
        );
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('sets name attribute if provided', () => {
        render(
            <Checkbox 
                checked={false}
                onChange={jest.fn()}
                name="my-checkbox"
            />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('name', 'my-checkbox');
    });
})