import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PhotoCard from './PhotoCard';

const mockData = {
  name: 'Morty Smith',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  status: 'Alive',
  location: {
    name: 'Earth (Replacement Dimension)',
  },
  origin: {
    name: 'Earth (C-137)',
  },
};

describe('PhotoCard', () => {
  it('should render the character name', () => {
    render(<PhotoCard {...mockData} />);
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

  it('should render the character species', () => {
    render(<PhotoCard {...mockData} />);
    expect(screen.getByText('Human')).toBeInTheDocument();
  });

  it('should render the character location', () => {
    render(<PhotoCard {...mockData} />);
    expect(
      screen.getByText('Location: Earth (Replacement Dimension)')
    ).toBeInTheDocument();
  });

  it('should render the character origin', () => {
    render(<PhotoCard {...mockData} />);
    expect(screen.getByText('Origin: Earth (C-137)')).toBeInTheDocument();
  });

  it('should render the character status', () => {
    render(<PhotoCard {...mockData} />);
    expect(screen.getByText('Status: Alive')).toBeInTheDocument();
  });
});
