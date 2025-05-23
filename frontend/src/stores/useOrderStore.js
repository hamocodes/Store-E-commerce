
import { create } from 'zustand';
import axios from 'axios';

const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get('/api/orders'); // Adjust the URL to your backend
      set({ orders: res.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || 'Failed to fetch orders',
        loading: false,
      });
    }
  },
}));

export default useOrderStore;
