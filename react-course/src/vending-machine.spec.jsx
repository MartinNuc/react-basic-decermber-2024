import {it, describe, expect} from 'vitest';
import {render, screen, fireEvent, within} from '@testing-library/react'
import { VendingMachine } from './vending-machine';

describe('Vending machine', () => {
  it('renders', () => {
    render(<VendingMachine />);
    
    expect(screen.getByTestId('totalPrice')).toHaveTextContent('0,-');
    
    const button = within(screen.getAllByTestId('VendingItem')[0]).getByRole('button');
    fireEvent.click(button)
    
    expect(screen.getByTestId('totalPrice')).toHaveTextContent('3,-');
  })
})