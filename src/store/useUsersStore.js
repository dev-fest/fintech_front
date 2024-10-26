import { create } from 'zustand';

const useUsersStore = create((set) => ({
    users: [],
    fetchUsers: async () => {
        const token = localStorage.getItem('token');
        console.log("Token:", token);

        if (!token) {
            console.warn("No token found.");
            return;
        }

        try {
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            console.log("Decoded Token:", decodedToken);

            const response = await fetch('https://fintech-backend-ltm6.onrender.com/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            console.log("Fetched Users:", data);
            
            set({ users: data });
        } catch (error) {
            console.error("Failed to decode token:", error.message);
            console.error("Fetch error:", error);
        }
    },
    modifyUser: async (userId, userData) => {
        const token = localStorage.getItem('token');
        console.log("Token for modifyUser:", token);

        if (!token) {
            console.warn("No token found for modifyUser.");
            return;
        }
        console.log("User ID for modification:", userId);
        
        if (!userId) {
            console.error("No user ID provided for modification.");
            return; 
        }

        try {
            const response = await fetch(`http://127.0.0.1:5000/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error("Failed to modify user");
            }

            const updatedUser = await response.json();
            console.log("Modified User:", updatedUser);

            set((state) => ({
                users: state.users.map(user => user.id === userId ? updatedUser : user)
            }));
        } catch (error) {
            console.error("Modify user error:", error);
        }
    },
    deleteUser: async (userId) => {
      const token = localStorage.getItem('token');
      console.log("Token for deleteUser:", token);

      if (!token) {
          console.warn("No token found for deleteUser.");
          return;
      }

      console.log("User ID for deletion:", userId);

      try {
          const response = await fetch(`http://127.0.0.1:5000/user/${userId}`, {
              method: 'DELETE',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
              },
          });

          if (!response.ok) {
              throw new Error("Failed to delete user");
          }

          console.log(`User with ID ${userId} deleted successfully`);

          set((state) => ({
              users: state.users.filter(user => user.id !== userId)
          }));
      } catch (error) {
          console.error("Delete user error:", error);
      }
  }
}));

export default useUsersStore;
