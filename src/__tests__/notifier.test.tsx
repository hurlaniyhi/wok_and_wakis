import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Notifier  from "@/components/feedback/notifier"
import { TestProviders } from '@/__tests__/utils/test-provider'

jest.mock('../providers/context', () => {
    const actual = jest.requireActual('../providers/context');
    return {
        ...actual,
        useFeedbackContext: () => ({
            feedback: {
                notification: {
                    title: '',
                    message: 'Test message',
                    status: true,
                }
            },
            setFeedback: jest.fn(),
        }),
    };
});
 
describe('Notifier', () => {
    it('renders the notifier (toaster)', () => {
        render(<Notifier />, { wrapper: TestProviders })
        expect(screen.getByTestId("notifier")).toBeInTheDocument();
    });

    it('displays a toast message', () => {
        render(<Notifier />, { wrapper: TestProviders });
        expect(screen.getByText(/test message/i)).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Notifier />, { wrapper: TestProviders });
        expect(asFragment()).toMatchSnapshot();
    });
})