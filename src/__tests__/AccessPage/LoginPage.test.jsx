import React from 'react'

import { describe, it, vi } from 'vitest'

import LoginComponent from '../../components/Access/LoginComponent';
import {  fireEvent } from '@testing-library/react';

import {render} from '../../test-utils/mimicRedux';


describe('Login', () => {
    it('submit data when the form submitted', () => {
        // const ActualReactRedux = require.requireActual('react-redux');

        // const store = configureStore();
        const onSubmit = vi.fn();
        const wrapper = render ( < LoginComponent onSubmit={onSubmit}/>);
            const usernameInput = wrapper.getByRole('username' )
            const passwordInput = wrapper.getByRole('password')
            const submitButton = wrapper.getByRole('submitButton');
        
            expect(usernameInput).toBeInTheDocument();
            expect(passwordInput).toBeInTheDocument();
    
            // const email = 'anderson@gmail'
            //   const password = 'password123'

            fireEvent.change(usernameInput, { target: { value: "testuser" } });
            fireEvent.change(passwordInput, { target: { value: "testpassword" } });
            fireEvent.click(submitButton);
            // vi.spyOn(global.console, 'warn')
            // const myFunctionSpy = sinon.spy(onSubmit);

            expect(onSubmit).toHaveBeenCalled()
           expect(onSubmit).toHaveBeenCalled(expect.objectContaining({
            x : "testuser",
            v : "testpassword"
          
        }))

          

})
        
// x : "testuser",
// v : "testpassword"
    
        })

           