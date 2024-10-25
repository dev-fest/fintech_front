import { create } from 'zustand';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_DB_URL;

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    error: null,
    loading: false,

    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`${apiUrl}/login`, { email, password }); // Use apiUrl here

            if (response.data) {
                const { user, access_token } = response.data; 
                set({ user, token: access_token, error: null }); 
                localStorage.setItem('token', access_token); 
                console.log(access_token)
                return response.data; 
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Login error:", error);
            set({ error: error.response?.data?.message || "An error occurred", loading: false });
            throw error;
        } finally {
            set({ loading: false });
        }
    },

    signup: async (firstName, lastName, email, password, roleId) => {
        set({ loading: true, error: null });
        try {
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const response = await axios.post(`${apiUrl}/user`, {
                created_at: createdAt,
                email,
                first_name: firstName,
                last_name: lastName,
                password,
                role_id: roleId,
            });
            set({ user: response.data.user, access_token: response.data.access_token, error: null });
            localStorage.setItem('access_token', response.data.access_token);
        } catch (error) {
            set({ error: error.response?.data?.message || "An error occurred", loading: false });
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
