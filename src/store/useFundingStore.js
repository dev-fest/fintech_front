import { create } from 'zustand';

const useFundingStore = create((set) => ({
  fundings: [],
  isLoading: false,
  error: null,

  fetchFundings: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/funding', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Fundings');
      }

      const data = await response.json();
      set({ fundings: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useFundingStore;
