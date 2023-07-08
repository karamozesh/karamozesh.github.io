import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const reducers =
// const initialState = JSON.parse(
//   JSON.stringify(store.getState()),
// );
// export const mockedStore = mockStore(initialState)

export const renderWithProviders = (
  ui,
  renderOptions,
) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
};

// re-export everything
export * from '@testing-library/react';
