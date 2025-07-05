import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { TopNav } from '@/components/ui'
import { TestProviders } from '@/__tests__/utils/test-provider'
 
describe('Top Nav', () => {
    it('renders the top nav', () => {
        render(<TopNav />, { wrapper: TestProviders })
        expect(screen.getByTestId("nav-container")).toBeInTheDocument();
    });

    it('renders the logo', () => {
        render(<TopNav />, { wrapper: TestProviders });
        expect(screen.getByAltText(/wok&wakis/i)).toBeInTheDocument();
    });

    it('renders nav menu items', () => {
        render(<TopNav />, { wrapper: TestProviders });
        expect(screen.getByTestId('nav-menu-items')).toBeInTheDocument();
    });
})