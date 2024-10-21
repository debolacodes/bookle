
/* eslint no-use-before-define: 0 */ 

import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookSearch from '../../src/components/BookSearch';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';


import '@testing-library/jest-dom/vitest'

// Mock the images
vi.mock('../images/book-stack.png', () => 'book-stack.png');
vi.mock('../assets/search.svg', () => 'search.svg');

describe('BookSearch Component', () => {
  const mockSetSearchTerm = vi.fn();
  const mockHandleSearch = vi.fn();

  beforeEach(() => {
    render(
      <BookSearch 
        searchTerm="" 
        setSearchTerm={mockSetSearchTerm} 
        handleSearch={mockHandleSearch} 
      />
    );
  });

   // Ensure cleanup after each test
  afterEach(() => {
    cleanup();
  });

  it('renders input and button', () => {
    expect(screen.getByPlaceholderText(/Search for books.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('calls setSearchTerm on input change', () => {
    const input = screen.getByPlaceholderText(/Search for books.../i);
    fireEvent.change(input, { target: { value: 'Harry Potter' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('Harry Potter');
  });

  it('calls handleSearch on button click', () => {
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);
    expect(mockHandleSearch).toHaveBeenCalled();
  });

  it('calls handleSearch on Enter key press', () => {
    const input = screen.getByPlaceholderText(/Search for books.../i);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockHandleSearch).toHaveBeenCalled();
  });

});