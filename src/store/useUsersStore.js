import {create} from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const response = await fetch('https://fintech-backend-y0qv.onrender.com/user'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      set({ users: data }); 
    } catch (error) {
      console.error('Failed to fetch users:', error);
      
    }
  },
}));

export default useUserStore;
