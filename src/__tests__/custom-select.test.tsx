import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CustomSelect }  from "@/components/ui"
 
describe('Custom select', () => {
    it('renders the custom select', () => {
        render(
            <CustomSelect 
                isOpened={true}
                title="Add Cheese"
                description="Select 1"
                onToggle={jest.fn()}
            />
        )
        expect(screen.getByTestId("custom-select")).toBeInTheDocument();
    })

    it('displays the title and description', () => {
        render(
            <CustomSelect 
                isOpened={true}
                title="Add Cheese"
                description="Select 1"
                onToggle={jest.fn()}
            />
        );
        expect(screen.getByText("Add Cheese")).toBeInTheDocument();
        expect(screen.getByText("Select 1")).toBeInTheDocument();
    });

    it('calls onToggle when clicked', () => {
        const onToggleMock = jest.fn();
        render(
            <CustomSelect 
                isOpened={false}
                title="Add Cheese"
                description="Select 1"
                onToggle={onToggleMock}
            />
        );

        const selectElement = screen.getByTestId("custom-select");
        fireEvent.click(selectElement);

        expect(onToggleMock).toHaveBeenCalledTimes(1);
    });
})