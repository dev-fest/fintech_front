import { create } from 'zustand';

const useProfiteStore = create((set) => ({
  profites: [],
  isLoading: false,
  error: null,

  fetchProfites: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/profit', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profites');
      }

      const data = await response.json();
      set({ profites: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProfiteStore;