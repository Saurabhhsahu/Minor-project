import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [token,setToken] = useState("saurabh");
    
    const value = {
        token,
        setToken
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;