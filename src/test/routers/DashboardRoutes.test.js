import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Pruebas en <Dashboard/>', () => {
    
    const values = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'nico'
        }
    }


    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={values}>
                    <DashboardRoutes/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('nico')
    });

    
})
