// wirte your test here...
import {
  describe,
  it,
  expect,
  vi,
  afterAll,
} from 'vitest';

import BaseInformationContent from '../../components/Resume/CreateSteps/BaseInformationContent';
import { renderWithProviders } from '../../utils/test-utils';
import {
  fireEvent,
  screen,
} from '@testing-library/react';

// const setup = () => {
//   const utils = render(<CostInput />);
//   const input =
//     screen.getByLabelText('cost-input');
//   return {
//     input,
//     ...utils,
//   };
// };

// const testConsole = vi.fn(() => {
//   return {
//     log: (message) => {},
//   };
// });

// vi.stubGlobal('console', testConsole);

describe('nameResumeChangeHandler()', () => {
  const consoleMock = vi
    .spyOn(console, 'log')
    .mockImplementation(() => {});

  afterAll(() => {
    consoleMock.mockReset();
  });
  it('should change the input name', () => {
    const testName = 'ahamd';

    const data = renderWithProviders(
      <BaseInformationContent />,
    );

    // console.log(data.store.getState());

    const input = screen.getByLabelText(
      'name-resume',
    );
    fireEvent.change(input, {
      target: { value: testName },
    });

    expect(input.value).toBe(testName);
  });
});
