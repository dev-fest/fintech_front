import { create } from 'zustand';

const useRevenueStore = create((set) => ({
  revenues: [],
  isLoading: false,
  error: null,

  fetchRevenues: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/revenue', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch revenues');
      }

      const data = await response.json();
      set({ revenues: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useRevenueStore;
