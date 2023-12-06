import React, { createContext, useContext } from 'react';

// Create the context
export const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        isAStudent: false,
        studentID: undefined,
      });

    const updateUser = (newUserInfo) => {
        setUserInfo(newUserInfo);
    };

    return (
        <UserContext.Provider value={{userInfo, updateUser}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access user context
export const useUser = () => useContext(UserContext);
