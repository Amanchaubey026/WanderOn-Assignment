/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { BASE_URL } from '../utils/vars';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('userInfo'));
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const userInfoCookie = Cookies.get('userInfo');
            if (!userInfoCookie) {
                throw new Error('No user info cookie found');
            }

            const userInfo = JSON.parse(userInfoCookie);
            const authToken = userInfo.token;
            if (!authToken) {
                throw new Error('No auth token found in user info');
            }

            // console.log('AuthToken:', authToken);

            await axios.post(`${BASE_URL}/api/users/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                withCredentials: true, 
            });

            Cookies.remove('userInfo');
            setIsLoggedIn(false);
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
