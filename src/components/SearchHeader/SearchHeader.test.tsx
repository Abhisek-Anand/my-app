import React from 'react';
import { render, screen } from '@testing-library/react';
import {SearchHeader} from './SearchHeader';

describe('SearchHeader', ()=> {
  test('renders search form', () => {
    render(<SearchHeader />);
    const linkElement = screen.getByText(/submit/i);
    expect(linkElement).toBeInTheDocument();
  });
})

