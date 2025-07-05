import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FoodCard }  from "@/components/ui"
import mockData from '@/utils/mock-data'

const mockFood = mockData.foodItems[0]
 
describe('Food card', () => {
    it('renders the food card', () => {
        render(<FoodCard  foodItem={mockFood} />)
        expect(screen.getByTestId("food-card-container")).toBeInTheDocument();
    });

    it('displays food title', () => {
        render(<FoodCard foodItem={mockFood} />);
        expect(screen.getByText(mockFood.title)).toBeInTheDocument();
    });

    it('displays food price', () => {
        render(<FoodCard foodItem={mockFood} />);
        expect(screen.getByText(`$${mockFood.price}`)).toBeInTheDocument();
    });

    it('renders food image', () => {
        render(<FoodCard foodItem={mockFood} />);
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', mockFood.imageUrl);
        expect(image).toHaveAttribute('alt');
    });
})