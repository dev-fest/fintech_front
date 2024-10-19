import {create} from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    error: null,
    loading: false,
    
    login: async (email, password) => {
        set({ loading: true, error: null }); 
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', { email, password });
            const { user, token } = response.data; 
            set({ user, token, error: null });
            localStorage.setItem('token', token); 
        } catch (error) {
            set({ error: error.response.data.message, loading: false });
        } finally {
            set({ loading: false });
        }
    },

    signup: async (firstName, lastName, email, password) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/register', { firstName, lastName, email, password });
            set({ user: response.data.user, token: response.data.token, error: null });
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            set({ error: error.response.data.message, loading: false });
        } finally {
            set({ loading: false });
        }
    },

    logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem('token');
    },
}));

export default useAuthStore;
