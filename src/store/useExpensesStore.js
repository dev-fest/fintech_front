import { create } from 'zustand';

const useExpenseStore = create((set) => ({
  expenses: [],
  isLoading: false,
  error: null,

  fetchExpenses: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/expense', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch expenses');
      }

      const data = await response.json();
      set({ expenses: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useExpenseStore;
