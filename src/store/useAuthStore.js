import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    error: null,
    loading: false,

    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.post(`http://127.0.0.1:5000/login`, { email, password }); 

            if (response.data) {
                const { user, access_token } = response.data; 
                set({ user, token: access_token, error: null }); 
                localStorage.setItem('token', access_token); 

                // Decode the JWT token
                try {
                    const decodedPayload = JSON.parse(atob(access_token.split('.')[1]));
                    console.log("Decoded Token Payload:", decodedPayload); // Display decoded info in the console
                    set({ user: decodedPayload }); // Optionally set the decoded payload as user info in state
                } catch (decodeError) {
                    console.error("Failed to decode token:", decodeError);
                }

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

    signup: async (first_name, last_name, email, password, role_id) => {
        set({ loading: true, error: null });
        try {
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const response = await axios.post(`http://127.0.0.1:5000/user`, {
                created_at: createdAt,
                email,
                first_name,
                last_name,
                password,
                role_id,
            });
    
            const { user, access_token } = response.data;
            if (access_token) {
                set({ user, token: access_token, error: null });
                localStorage.setItem('token', access_token);
                console.log("Token stored:", access_token);
            } else {
                throw new Error("No access token returned from signup");
            }
        } catch (error) {
            console.error("Signup error:", error);
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
