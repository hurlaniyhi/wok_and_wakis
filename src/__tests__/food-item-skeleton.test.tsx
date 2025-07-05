import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FoodItemSkeleton  from "@/components/feedback/loader/food-item-skeleton"
 
describe('Loader', () => {
    it('renders the food item skeleton', () => {
        render(<FoodItemSkeleton />)
        expect(screen.getByTestId("skeleton-container")).toBeInTheDocument();
    });
})