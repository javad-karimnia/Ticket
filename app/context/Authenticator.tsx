import React, { createContext, useState } from 'react';


export const Auth =createContext<any>(null)

const Authenticator = ({children}:any) => {

    const[auth, dispatch] = useState({
        user: '',
        pass: '',
    })


    return (
        <Auth.Provider value={{auth, dispatch}}>
            {children}
        </Auth.Provider>
    );
};

export default Authenticator;