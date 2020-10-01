import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname : '/'
        }
    }
    //Llamar al localstorage para ser probado
    Storage.prototype.setItem = jest.fn();


    test('debe de mostrar el componente si esta autenticado y guardar localstorage', () => {
        //utilizar mount instead shallow cuando hay q ir mas en profundo.
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated ={true}
                    component = {() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('last_path', '/');
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated ={false}
                    component = {() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
    });
    
    
})
