import { create } from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],
  isLoading: false,
  error: null,

  fetchProjects: async () => {
    set({ isLoading: true, error: null });
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://fintech-backend-ltm6.onrender.com/project', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      set({ projects: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  deleteProject: async (projectId) => {
    const token = localStorage.getItem('token');
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`http://127.0.0.1:5000/project/${projectId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      // Update the projects state after deletion
      set((state) => ({
        projects: state.projects.filter(project => project.id !== projectId),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  updateProject: async (projectId, updatedData) => {
    const token = localStorage.getItem('token');
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`http://127.0.0.1:5000/project/${projectId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), // Assuming updatedData is an object with the fields to be updated
      });

      if (!response.ok) {
        throw new Error('Failed to update project');
      }

      const data = await response.json();
      
      // Update the projects state with the updated project
      set((state) => ({
        projects: state.projects.map(project => 
          project.id === projectId ? { ...project, ...data } : project
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProjectStore;
