import { vi } from 'vitest';

vi.mock('react-redux', () => {
  useSelector: vi.fn().mockImplementation(
    (selector) => selector(),
  );
});
