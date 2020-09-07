import React from 'react';

import AuthProvider, { AuthContext } from './AuthProvider';

export const context = { auth: AuthContext };

function Providers(props) {
    return (
        <AuthProvider>
            {props.children}
        </AuthProvider>
    );
}

export default Providers;