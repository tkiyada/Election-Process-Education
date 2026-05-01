import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FAQ from './components/FAQ';

const mockFaqs = [
  { id: 1, question: 'What is VVPAT?', answer: 'Voter Verifiable Paper Audit Trail' },
  { id: 2, question: 'Who can vote?', answer: 'Citizens 18 and older' },
];

const mockT = (key) => key; // Mock translation function

describe('FAQ Component UI Tests', () => {
  it('renders all questions properly', () => {
    render(<FAQ faqs={mockFaqs} t={mockT} />);
    expect(screen.getByText('What is VVPAT?')).toBeInTheDocument();
    expect(screen.getByText('Who can vote?')).toBeInTheDocument();
  });

  it('toggles answer visibility on click', () => {
    render(<FAQ faqs={mockFaqs} t={mockT} />);
    
    // initially hidden via CSS but in DOM
    const answerElement = screen.getByText('Voter Verifiable Paper Audit Trail');
    const questionElement = screen.getByText('What is VVPAT?').closest('.faq-question-container');
    
    // click to open
    fireEvent.click(questionElement);
    expect(questionElement.getAttribute('aria-expanded')).toBe('true');
    
    // click to close
    fireEvent.click(questionElement);
    expect(questionElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('supports keyboard navigation (Enter key)', () => {
    render(<FAQ faqs={mockFaqs} t={mockT} />);
    
    const questionElement = screen.getByText('Who can vote?').closest('.faq-question-container');
    
    // Simulate Enter key press
    fireEvent.keyDown(questionElement, { key: 'Enter', code: 'Enter' });
    expect(questionElement.getAttribute('aria-expanded')).toBe('true');
  });
});
