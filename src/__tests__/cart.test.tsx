import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Cart } from '@/components/ui'
import { TestProviders } from '@/__tests__/utils/test-provider'
import mockData from '@/utils/mock-data'


beforeEach(() => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal-root');
    document.body.appendChild(portalRoot);

    localStorage.clear(); // To clear the stored cartItems from the initialCartItems prop in the Cart context
  });
  
afterEach(() => {
  const portalRoot = document.getElementById('portal-root');
  if (portalRoot) {
    document.body.removeChild(portalRoot);
  }
});

// Use the below jest mocking on the useCart hook to manipulate the cartItem used by Cart component if 
// we don't want to modify our cartContext to have initialCartItems and we won't need to pass anything also
// to the TestProviders component.
// Put the below just mock per test and modify the cartItems property based on each test

// jest.mock('@/hooks/useCart', () => ({
//   useCart: () => ({
//     cartItems: mockData.cartItems,
//     addToCart: jest.fn(),
//     removeFromCart: jest.fn(),
//     clearCart: jest.fn(),
//   }),
// }));
 
describe('Cart', () => {
  it('renders the cart items', () => {
    render(
      <Cart close={jest.fn} />, 
      { 
        wrapper: ({children}) => (
          <TestProviders cartItems={mockData.cartItems}>
            {children}
          </TestProviders> 
        )
      }
    )
    expect(screen.getByTestId("cart-item-container")).toBeInTheDocument();
  });

  it('should not renders cart items', () => {
    render(
      <Cart close={jest.fn} />, 
      { 
        wrapper: ({children}) => (
          <TestProviders cartItems={[]}>
            {children}
          </TestProviders>
        )
      }
    )
    expect(screen.queryByTestId('cart-item-container')).not.toBeInTheDocument();
  });

  it('renders no cart item element text', () => {
    render(
      <Cart close={jest.fn} />, 
      { wrapper: TestProviders }
    )
    expect(screen.getByTestId('no-cart-item-text')).toBeInTheDocument();
  });
})