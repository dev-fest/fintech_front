import { create } from 'zustand';

const useCashStore = create((set) => ({
  cashs: [],
  isLoading: false,
  error: null,

  fetchCashs: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/cash', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Cashs');
      }

      const data = await response.json();
      set({ cashs: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useCashStore;
