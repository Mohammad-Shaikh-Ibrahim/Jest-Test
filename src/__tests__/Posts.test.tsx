import { render, screen } from '@testing-library/react';
import Posts from '../components/Posts';

const mockPosts = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  body: `This is the body of post ${i + 1}`,
}));

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockPosts),
    } as Response)
  );
});

afterAll(() => {
  (global.fetch as jest.Mock).mockRestore();
});

test('renders 10 posts after loading', async () => {
  render(<Posts />);

  const loader = screen.getByRole('progressbar');
  expect(loader).toBeInTheDocument();

  const heading = await screen.findByText('Posts');
  expect(heading).toBeInTheDocument();

  mockPosts.forEach((post) => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.body)).toBeInTheDocument();
  });
});
