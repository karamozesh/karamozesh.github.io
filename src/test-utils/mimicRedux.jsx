import { Provider } from 'react-redux'
import { store } from '../store/index';
import { render, RenderOptions } from '@testing-library/react';

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };

