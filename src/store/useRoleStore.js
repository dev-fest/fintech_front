import { create } from 'zustand';

const useRoleStore = create((set) => ({
  roles: [],
  loading: false, 
  error: null, 
  fetchAllRoles: async () => {
    const token = localStorage.getItem('token'); 
    set({ loading: true, error: null }); 
    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/roles', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch roles');
      }
      const data = await response.json();
      set({ roles: data, error: null }); 
      console.log("Fetched Roles:", data.map((role) => role.role_name));
    } catch (error) {
      set({ roles: [], error: error.message }); 
    } finally {
      set({ loading: false }); 
    }
  },

  
  createRole: async (role_name) => {
    const token = localStorage.getItem('token'); 
    set({ loading: true, error: null }); 

    try {
      const response = await fetch('http://127.0.0.1:5000/role', {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role_name }),
      });

      if (!response.ok) {
        throw new Error('Failed to create role');
      }

      const data = await response.json();
      set((state) => ({
        roles: [...state.roles, data], 
      }));
    } catch (error) {
      set({ error: error.message }); 
    } finally {
      set({ loading: false }); 
    }
  },

  
  updateRole: async (role_id, updatedData) => {
    const token = localStorage.getItem('token'); 
    set({ loading: true, error: null }); 

    try {
      const response = await fetch(`http://127.0.0.1:5000/role/${role_id}`, {
        method: 'PUT', 
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), 
      });

      if (!response.ok) {
        throw new Error('Failed to update role');
      }

      const data = await response.json();
      set((state) => ({
        roles: state.roles.map((role) =>
          role.role_id === role_id ? { ...role, ...data } : role
        ),
      }));
    } catch (error) {
      set({ error: error.message }); 
    } finally {
      set({ loading: false }); 
    }
  },

  
  removeRole: async (role_id) => {
    const token = localStorage.getItem('token'); 
    set({ loading: true, error: null }); 

    try {
      const response = await fetch(`http://127.0.0.1:5000/role/${role_id}`, {
        method: 'DELETE', 
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete role');
      }

      set((state) => ({
        roles: state.roles.filter((role) => role.role_id !== role_id),
      }));
    } catch (error) {
      set({ error: error.message }); 
    } finally {
      set({ loading: false }); 
    }
  },
}));

export default useRoleStore;
