import { create } from 'zustand';

const useDebtStore = create((set) => ({
  debts: [],
  isLoading: false,
  error: null,

  fetchDebts: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/dept', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Debts');
      }

      const data = await response.json();
      set({ debts: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useDebtStore;
