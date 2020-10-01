import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen/>', () => {
    
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
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={values}>
                <LoginScreen history={historyMocks}/>
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de realizar el dispatch y la navegacion', () => {
        const handleClick=wrapper.find('button').prop('onClick');

        handleClick();

        expect(values.dispatch).toHaveBeenCalledWith({
            type : types.login,
            payload: {
                name: 'Nicolas'
            }
        });

        expect(historyMocks.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('last_path','/dc');
        handleClick();

        expect(historyMocks.replace).toHaveBeenCalledWith('/dc');
    });
    
})
