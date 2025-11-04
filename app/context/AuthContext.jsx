import React, { useState, useEffect } from 'react';
import { AuthContext } from './auth-context.js';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('user_id');
        const username = localStorage.getItem('username');
        const nombre = localStorage.getItem('nombre_usuario');
        const apellido = localStorage.getItem('apellido_usuario');

        if (token && user_id && username) {
            setUser({
                id: user_id,
                token,
                username, 
                nombre_usuario: nombre,
                apellido_usuario: apellido
            });
        }
        setLoading(false);
    }, []);


    const login = async (email, password) => {
        try {
            const response = await fetch('https://backend-gold-alpha-80.vercel.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo_electronico: email,
                    contrasena: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al iniciar sesión');
            }

            // Store user data
            const userData = {
                id: data.user.id_usuario,
                token: data.access_token,
                username: data.user.correo_electronico,
                nombre_usuario: data.user.nombre_usuario,
                apellido_usuario: data.user.apellido_usuario
            };

            setUser(userData);

            localStorage.setItem('token', data.access_token);
            localStorage.setItem('user_id', data.user.id_usuario);
            localStorage.setItem('username', data.user.correo_electronico);
            localStorage.setItem('nombre_usuario', data.user.nombre_usuario);
            localStorage.setItem('apellido_usuario', data.user.apellido_usuario);

            return { success: true };

        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const register = async (nombre, apellido, email, password) => {
        try {
            const response = await fetch('https://backend-gold-alpha-80.vercel.app/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre_usuario: nombre,
                    apellido_usuario: apellido,
                    correo_electronico: email,
                    contrasena: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al crear la cuenta');
            }

            // Auto-login after registration
            const userData = {
                id: data.user.id_usuario,
                token: data.access_token,
                username: data.user.correo_electronico,
                nombre_usuario: data.user.nombre_usuario,
                apellido_usuario: data.user.apellido_usuario
            };

            setUser(userData);

            localStorage.setItem('token', data.access_token);
            localStorage.setItem('user_id', data.user.id_usuario);
            localStorage.setItem('username', data.user.correo_electronico);
            localStorage.setItem('nombre_usuario', data.user.nombre_usuario);
            localStorage.setItem('apellido_usuario', data.user.apellido_usuario);

            return { success: true };

        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('username');
        localStorage.removeItem('nombre_usuario');
        localStorage.removeItem('apellido_usuario');
    };

    const isAuthenticated = () => {
        return !!user && !!user.token;
    };

    // Helper function for authenticated API calls
    const authFetch = async (url, options = {}) => {
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (user && user.token) {
            headers['Authorization'] = `Bearer ${user.token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        // If unauthorized, logout
        if (response.status === 401) {
            logout();
        }

        return response;
    };

    const value = {
        user,
        login,
        register,
        logout,
        loading,
        isAuthenticated,
        authFetch
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};