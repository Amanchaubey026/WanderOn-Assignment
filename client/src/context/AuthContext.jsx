/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { BASE_URL } from '../utils/vars';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('userInfo'));
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(() => {
        const storedDetails = localStorage.getItem('userDetails');
        return storedDetails ? JSON.parse(storedDetails) : null;
    });

    useEffect(() => {
        if (isLoggedIn && !userDetails) {
            const storedDetails = localStorage.getItem('userDetails');
            if (storedDetails) {
                setUserDetails(JSON.parse(storedDetails));
            }
        }
    }, [isLoggedIn, userDetails]);


    const logout = async () => {
        try {
            const authToken = Cookies.get('userInfo');
            if (!authToken) {
                throw new Error('No auth token found');
            }

            await axios.post(`${BASE_URL}/api/users/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                withCredentials: true, 
            });

            Cookies.remove('userInfo');
            localStorage.removeItem('userDetails');
            setIsLoggedIn(false);
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,userDetails, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
