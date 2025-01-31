import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios.js';

const initialState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

export const getAllUsers = createAsyncThunk('user/getAllUsers', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/users');
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching users');
    }
});

export const submitUserForm = async (formData) => {
    try {
        const { data } = await axios.post('/users', formData);
        console.log('User created:', data);
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default usersSlice.reducer;
