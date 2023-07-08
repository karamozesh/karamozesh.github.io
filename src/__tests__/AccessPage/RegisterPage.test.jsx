

import React from 'react'
import RegisterComponent from "../../components/Access/RegisterComponent";
import { describe, vi , it } from "vitest";
import {fireEvent, render} from '../../test-utils/mimicRedux';


describe('Register ',
        ()=>{

            it('submit data when the form submitted' , ()=>{

                const onSubmit = vi.fn()
                const wrapper = render (<RegisterComponent handleSubmit={onSubmit}/>)
                const submitButton = wrapper.getByRole("submitButton")
                fireEvent.submit(submitButton)
                expect(onSubmit).toHaveBeenCalledTimes(1)

                
            })


            it('Register form should be in the document' , ()=>{
                const onSubmit = vi.fn()
                const wrapper = render (<RegisterComponent handleSubmit={onSubmit}/>)
                const username = wrapper.getByRole("username")
                const email = wrapper.getByRole("email")
                const phoneNumber = wrapper.getByRole("phoneNumber")
                const password = wrapper.getByRole("password")
                const confirmPassword = wrapper.getByRole("confirmPassword")
               expect(username).toBeInTheDocument()
               expect(email).toBeInTheDocument()
               expect(phoneNumber).toBeInTheDocument()
               expect(password).toBeInTheDocument()
               expect(confirmPassword).toBeInTheDocument()
            })

            
})