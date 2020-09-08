import React from 'react';

import AuthContextProvider, { AuthContext } from './AuthContext';

export const context = { auth: AuthContext };

function Providers(props) {
    return (
        <AuthContextProvider>
            {props.children}
        </AuthContextProvider>
    );
}

export default Providers;