import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CheckboxInput }  from "@/components/ui"
import { cheeseOptions } from '@/lib/constants'
 
describe('Checkbox Input', () => {
    it('renders the checkbox input', () => {
        render(
            <CheckboxInput 
                options={cheeseOptions}
                input={['Add Cheddar']}
                isOpened={true}
                title="Add Cheese"
                description="Select up to 3"
                onInputChange={jest.fn()}
                onToggle={jest.fn()}
            />
        )
    
        expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
        expect(screen.getByText('Select up to 3')).toBeInTheDocument();
    });

    it('renders all checkbox options', () => {
        render(
            <CheckboxInput 
                options={cheeseOptions}
                input={[]}
                isOpened={true}
                title="Add Cheese"
                description=""
                onInputChange={jest.fn()}
                onToggle={jest.fn()}
            />
        );
        
        cheeseOptions.forEach(option => {
            expect(screen.getByLabelText(option.label)).toBeInTheDocument();
        });
    });

    it('calls onInputChange when a checkbox is clicked', () => {
        const handleChange = jest.fn();
      
        render(
            <CheckboxInput 
                options={cheeseOptions}
                input={[]}
                isOpened={true}
                title="Add Cheese"
                description=""
                onInputChange={handleChange}
                onToggle={jest.fn()}
            />
        );
      
        const checkbox = screen.getByLabelText(cheeseOptions[0].label);
        checkbox.click();
      
        expect(handleChange).toHaveBeenCalled();
    });

    it('calls onToggle when toggled', () => {
        const handleToggle = jest.fn();
      
        render(
            <CheckboxInput 
                options={cheeseOptions}
                input={[]}
                isOpened={false}
                title="Add Cheese"
                description=""
                onInputChange={jest.fn()}
                onToggle={handleToggle}
            />
        );
      
        const toggleElement = screen.getByText('Add Cheese');
        toggleElement.click();
      
        expect(handleToggle).toHaveBeenCalled();
    });

    it('should not render options when isOpened is false', () => {
        render(
            <CheckboxInput 
                options={cheeseOptions}
                input={[]}
                isOpened={false}
                title="Add Cheese"
                description=""
                onInputChange={jest.fn()}
                onToggle={jest.fn()}
            />
        );
      
        cheeseOptions.forEach(option => {
          expect(screen.queryByLabelText(option.label)).not.toBeInTheDocument();
        });
    });
})