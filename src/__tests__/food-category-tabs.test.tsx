import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { FoodCategoryTabs }  from "@/components/ui"
import { TestProviders } from '@/__tests__/utils/test-provider'
 
describe('Food category tabs', () => {
    const mockHandler = jest.fn();

    beforeEach(() => {
        render(
            <FoodCategoryTabs onTabSelection={mockHandler} />,
            { wrapper: TestProviders }
        );
    });

    it('renders the food category tabs container', () => {
        expect(screen.getByTestId("food-category-tabs")).toBeInTheDocument();
    });

    it('displays all category tab buttons', () => {
        const tabButtons = screen.getAllByRole('button');
        expect(tabButtons.length).toBeGreaterThan(0);
    });

    it('calls onTabSelection when a tab is clicked', () => {
        mockHandler.mockClear(); // reset count to 0 before simulating click

        const firstTab = screen.getAllByRole('button')[0];
        fireEvent.click(firstTab);

        expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    it('highlights the active tab (if logic exists)', () => {
        const activeTab = screen.getByTestId('active-tab');
        expect(activeTab).toBeInTheDocument();
    });
})