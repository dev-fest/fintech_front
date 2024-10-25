import { create } from 'zustand';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_DB_URL;

const useUserStore = create((set) => ({
  users: [],

  fetchUsers: async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    // Decode the token to get the role_id
    let role_id;
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      role_id = decodedToken.role_id;
      console.log("Decoded Role ID:", role_id);
    } catch (error) {
      console.error("Failed to decode token:", error);
      return;
    }

    if (role_id !== '671420c2df2d71de25efde15') {
      console.error('Unauthorized: Insufficient permissions to fetch users.');
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      set({ users: response.data });
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  },
}));

export default useUserStore;
