import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';

describe('Pruebas en <Navbar/>', () => {
    
    const historyMocks = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const values = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Nicolas'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={values}>
            <MemoryRouter>
                <Router history={historyMocks}>
                <Navbar/>

                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach(()=>{
        jest.clearAllMocks();
    })


    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Nicolas');
    });
    
    test('debe de llamar el logout y usar el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(values.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMocks.replace).toHaveBeenCalledWith('/login');
    });
    
})
