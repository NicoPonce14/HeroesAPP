import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
    
    const values = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    test('debe de mostar el login si no esta autenticado', () => {
       
        const wrapper = mount(
            <AuthContext.Provider value={values}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el componente de marvel si esta autenticado', () => {
        const values = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Nico'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={values}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        
        expect(wrapper.find('nav').exists()).toBe(true);
    });
    
    
})
