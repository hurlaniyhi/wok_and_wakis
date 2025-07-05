import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer }  from "@/components/ui"
 
describe('Footer', () => {
    it('renders the footer', () => {
        render(<Footer />)
        expect(screen.getByTestId("footer-container")).toBeInTheDocument();
    });

    it('displays copyright text', () => {
        render(<Footer />);
        expect(screen.getByText(/© 2020 Delo/i)).toBeInTheDocument();
    });

    it('contains navigation links', () => {
        render(<Footer />);
        expect(screen.getByRole('link', { name: /Privacy/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Terms of service/i })).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
})