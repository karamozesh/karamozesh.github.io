// wirte your test here...
import {
  describe,
  it,
  expect,
  beforeAll,
} from 'vitest';

import BaseInformationContent from '../../components/Resume/CreateSteps/BaseInformationContent';
import { renderWithProviders } from '../../utils/test-utils';
import {
  fireEvent,
  screen,
} from '@testing-library/react';
import { resumeActions } from '../../store/resume-slice';
import store from '../../store';

beforeAll(() => {
  renderWithProviders(<BaseInformationContent />);
});

const resume = 'resume';
const baseInformation = 'baseInformation';

describe('nameResumeChangeHandler()', () => {
  it('should change state of resume name', () => {
    const testName = 'ahamd';

    const input = screen.getByLabelText(
      'name-resume',
    );
    fireEvent.change(input, {
      target: { value: testName },
    });

    const prop = 'phonenumber';

    const changePhonenumberObj = {
      prop,
      value: testName,
    };

    store.dispatch(
      resumeActions.changeBaseInformation(
        changePhonenumberObj,
      ),
    );

    const actualName =
      store.getState()[resume][baseInformation][
        prop
      ];

    expect(testName).toBe(actualName);
  });
});

describe('phonenumberChangeHandler()', () => {
  it('should change state of phone number', () => {
    const testPhoneNumber = '0912';

    const input = screen.getByLabelText(
      'phone-number',
    );

    fireEvent.change(input, {
      target: { value: testPhoneNumber },
    });

    const prop = 'phonenumber';

    const changeNameObj = {
      prop,
      value: testPhoneNumber,
    };

    const actualNameObj =
      store.getState()[resume][baseInformation][
        prop
      ];

    store.dispatch(
      resumeActions.changeBaseInformation(
        changeNameObj,
      ),
    );

    const resultNameObj =
      store.getState()[resume][baseInformation][
        prop
      ];

    expect(actualNameObj).toEqual(resultNameObj);
  });
});

describe('firstNameChangeHandler()', () => {
  it('should change state of first name', () => {
    const testFirstname = 'ahamd';

    const input =
      screen.getByLabelText('firstname');
    fireEvent.change(input, {
      target: { value: testFirstname },
    });

    const prop = 'firstName';

    const changeFirstnameObj = {
      prop,
      value: testFirstname,
    };

    const actualNameObj =
      store.getState()[resume][baseInformation][
        prop
      ];

    store.dispatch(
      resumeActions.changeBaseInformation(
        changeFirstnameObj,
      ),
    );

    const resultNameObj =
      store.getState()[resume][baseInformation][
        prop
      ];

    expect(actualNameObj).toEqual(resultNameObj);
  });
});

describe('genericChangeHandler()', () => {
  it('should change state of resume name', () => {
    const testGeneric = {
      value: 1,
      label: 'male',
    };

    const genericSelect =
      screen.queryAllByLabelText(
        'generic-select',
      );

    // fireEvent.change(genericSelect[0], {
    //   target: testGeneric,
    // });

    // const prop = 'generic';

    // const changeGenericObj = {
    //   prop,
    //   value: testGeneric,
    // };

    // const actualNameObj =
    //   store.getState()[resume][baseInformation][
    //     prop
    //   ];

    // store.dispatch(
    //   resumeActions.changeBaseInformation(
    //     changeGenericObj,
    //   ),
    // );

    // const resultNameObj =
    //   store.getState()[resume][baseInformation][
    //     prop
    //   ];

    // expect(actualNameObj).toEqual(resultNameObj);
  });
});
