import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
   
    const {dispatch} = useContext(AuthContext);

    const HandleClick = () => {
        
        const last_path = localStorage.getItem('last_path') || '/'
        
        dispatch({
            type: types.login,
            payload : {
                name : 'Nicolas'
            }
        })

        history.replace(last_path);
    }
    
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={HandleClick}
            >
                Login
            </button>
        </div>
    )
}
